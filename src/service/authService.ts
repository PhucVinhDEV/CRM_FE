import Cookie from "js-cookie";
import { ACCESS_TOKEN } from "../utils/storage";
import { decryptSync, checkTokenExpired } from "../utils/auth";
import { IUserInfo, IUserStateForData, TokenResponse } from "@/types/user";
import restConnector from "@/connectors/AxiosRestConnector";
import { API_ENDPOINTS } from "@/connectors/ApiEndpoint";
import axios from "axios";
import { AppDispatch } from "@/reduxs/store";
import { setUserProps } from "@/reduxs/UserSlice";

export const AuthService = {
  async login(
    username: string,
    password: string,
    dispatch: AppDispatch,
  ): Promise<{ success: boolean; message: string }> {
    try {
      // 🟢 Gửi request đăng nhập
      const response = await restConnector().post(API_ENDPOINTS.AUTH.LOGIN, {
        username,
        password,
      });

      const data = response.data;

      // ❌ Kiểm tra nếu response không hợp lệ
      if (data.status !== 1000 || !data.result.authenticated) {
        return {
          success: false,
          message: data.body.errors || "Authentication failed",
        };
      }

      // 🟢 Lấy token từ response
      const tokenResponse: TokenResponse = data.result;
      if (!tokenResponse.authenticated) {
        return { success: false, message: "Unexpected authentication error." };
      }

      // ✅ Lưu token vào cookie
      Cookie.set("access_token", tokenResponse.token.access_token, {
        expires: 1,
      });
      Cookie.set("refresh_token", tokenResponse.token.refresh_token, {
        expires: 7,
      });

      // ✅ Cập nhật Redux store với thông tin người dùng
      const userData: IUserInfo = {
        id: "123123", // Fake ID (Cần lấy ID thật nếu có)
        email: username,
      };

      const responseState: IUserStateForData = {
        userInfo: userData,
        loading: false,
        isWaitingTempJwt: false,
      };

      dispatch(setUserProps(responseState));

      return { success: true, message: "Login successful!" };
    } catch (error) {
      // ❌ Xử lý lỗi từ API (Axios)
      if (axios.isAxiosError(error)) {
        return {
          success: false,
          message:
            error.response?.data?.errors?.[0] ||
            "Server error. Please try again.",
        };
      }

      // ❌ Xử lý lỗi bất ngờ khác
      return { success: false, message: "An unexpected error occurred." };
    }
  },

  // called api check authenticated
  isAuthenticated(): boolean {
    const jwt = Cookie.get(ACCESS_TOKEN);
    if (!jwt) return false;

    const token = decryptSync(jwt);
    if (!token || checkTokenExpired(token)) {
      this.logout();
      return false;
    }
    return true;
  },

  //logout
  logout() {
    Cookie.remove(ACCESS_TOKEN);
    window.location.href = "/login"; // Redirect to login page after logout
  },
};
