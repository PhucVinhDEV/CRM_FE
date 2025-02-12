import Cookie from "js-cookie";
import { ACCESS_TOKEN } from "../utils/storage";
import { decryptSync, checkTokenExpired } from "../utils/auth";
import { TokenResponse } from "@/types/user";

const API_URL = process.env.NEXT_PUBLIC_STATIC_API_URL;

export const AuthService = {
  // called api login function
  async login(
    username: string,
    password: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${API_URL}/auth/v1/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok || data.status !== 1000 || !data.result.authenticated) {
        console.error("Login failed:", data?.errors || "Unknown error");
        return { success: false, message: data.errors };
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
    } catch (error) {
      console.error("Login failed service:", error);
      return {
        success: false,
        message: "Network error. Please try again later.",
      };
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
