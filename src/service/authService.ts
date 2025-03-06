import Cookie from "js-cookie";
import { ACCESS_TOKEN } from "../utils/storage";
import { decryptSync, checkTokenExpired } from "../utils/auth";

import axios from "axios";
import { AppDispatch } from "@/reduxs/store";
import { setUserProps } from "@/reduxs/UserSlice";
import { getCurrentUser, login } from "@/apis/author.api";
import { ApiResponse } from "@/types";

export const AuthService = {
  async login(
    email: string,
    password: string,
    dispatch: AppDispatch,
  ): Promise<{ success: boolean; message: string }> {
    try {
      // 🟢 Gọi API login (API đã có `try-catch` nên ném lỗi lên đây)
      const response: ApiResponse<string> = await login({
        email,
        password,
      });
      console.log("response", response);
      // ❌ Kiểm tra nếu response lỗi hoặc token trống
      if (response.status !== 1000) {
        return { success: false, message: "Authentication failed" };
      }

      if (response.result) {
        Cookie.set(ACCESS_TOKEN, response.result, { expires: 1 });
      } else {
        return {
          success: false,
          message: "Authentication failed. No token received.",
        };
      }

      // ✅ Cập nhật Redux store với thông tin người dùng
      const userData = await getCurrentUser();
      console.log("userData", userData);
      dispatch(
        setUserProps({
          userInfo: userData,
          loading: false,
          isWaitingTempJwt: false,
        }),
      );

      return { success: true, message: "Login successful!" };
    } catch (error) {
      // 🔥 Bắt lỗi API và chuyển thành message dễ đọc cho UI
      if (axios.isAxiosError(error)) {
        return {
          success: false,
          message:
            error.response?.data?.errors?.[0] ||
            "Server error. Please try again.",
        };
      }
      console.error(error);
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
