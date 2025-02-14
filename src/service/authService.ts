import Cookie from "js-cookie";
import { ACCESS_TOKEN } from "../utils/storage";
import { decryptSync, checkTokenExpired } from "../utils/auth";
import { TokenResponse } from "@/types/user";
import restConnector from "@/connectors/AxiosRestConnector";
import { API_ENDPOINTS } from "@/connectors/ApiEndpoint";
import axios from "axios";

export const AuthService = {
  // called api login function
  async login(
    username: string,
    password: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await restConnector().post(API_ENDPOINTS.AUTH.LOGIN, {
        username,
        password,
      });

      const data = response.data;
      if (data.status !== 1000 || !data.result.authenticated) {
        console.error("Login failed:", data.errors || "Unknown error");
        return {
          success: false,
          message: data.body.errors || "Authentication failed",
        };
      }

      const tokenResponse: TokenResponse = data.result;
      if (tokenResponse.authenticated) {
        Cookie.set("access_token", tokenResponse.token.access_token, {
          expires: 1,
        });
        Cookie.set("refresh_token", tokenResponse.token.refresh_token, {
          expires: 7,
        });
        return { success: true, message: "Login successful!" };
      }

      return { success: false, message: "Unexpected error occurred." };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errResponse = error.response?.data;

        return {
          success: false,
          message:
            errResponse?.errors?.[0] || "Server error. Please try again.",
        };
      }

      console.error("Unexpected error:", error);
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
