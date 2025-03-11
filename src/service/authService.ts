import Cookie from "js-cookie";
import { ACCESS_TOKEN } from "../utils/storage";
import { decryptSync, checkTokenExpired } from "../utils/auth";
import CryptoJS from "crypto-js";
import queryString from "query-string";
import axios from "axios";
import {
  OauthOutboundGoogle,
  VerifyOTP,
  login,
  sendOTP,
} from "@/apis/author.api";
import { ApiResponse } from "@/types";
import { IRequestOTPAndRegister } from "@/types/user";

export const AuthService = {
  async sendOTP(email: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await sendOTP(email);
      if (!response) {
        return { success: false, message: "An unexpected error occurred." };
      }
      return { success: true, message: "SendOTP successful!" };
    } catch (exception) {
      return { success: false, message: "An unexpected error occurred." };
    }
  },
  async verifyOTPAndRegister(
    values: IRequestOTPAndRegister,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await VerifyOTP(values);
      if (!response) {
        return { success: false, message: "An unexpected error occurred." };
      }
      return { success: true, message: "Register successful!" };
    } catch (exception) {
      return { success: false, message: "An unexpected error occurred." };
    }
  },
  //LoginService: OAuthOutboundGoogle,
  initiateLogin(lng: string): string {
    // Tạo và lưu code verifier
    const codeVerifier = this.generateCodeVerifier();
    localStorage.setItem("code_verifier", codeVerifier);

    // Tạo code challenge từ code verifier
    const codeChallenge = this.generateCodeChallenge(codeVerifier);

    // Tạo URL xác thực Google
    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    const params = {
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      redirect_uri: `${process.env.NEXT_PUBLIC_STATIC_URL}${lng}${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}`, // Thay đổi theo URL của bạn
      response_type: "code",
      scope: "email profile",
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    };
    authUrl.search = queryString.stringify(params);
    return (window.location.href = authUrl.toString());
  },

  async outboundGoogle(
    code: string,
    RedirectURI: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const codeVerifier = localStorage.getItem("code_verifier") || "null";

      // Gửi request đến backend để đổi code lấy token
      const response = await OauthOutboundGoogle(
        code,
        RedirectURI,
        codeVerifier,
      );
      console.log("response nè", response);
      if (response) {
        Cookie.set(ACCESS_TOKEN, response, { expires: 1 });
      } else {
        return {
          success: false,
          message: "Authentication failed. No token received.",
        };
      }

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

  async login(
    email: string,
    password: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      // 🟢 Gọi API login (API đã có `try-catch` nên ném lỗi lên đây)
      const response: ApiResponse<string> = await login({
        email,
        password,
      });

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

  // Tạo code verifier ngẫu nhiên
  generateCodeVerifier(): string {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    return this.base64URLEncode(array);
  },
  // Mã hóa base64URL
  base64URLEncode(buffer: Uint8Array): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.create(buffer))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");
  },

  // Chuyển WordArray thành Uint8Array
  wordArrayToUint8Array(wordArray: CryptoJS.lib.WordArray): Uint8Array {
    const words = wordArray.words;
    const sigBytes = wordArray.sigBytes;
    const u8 = new Uint8Array(sigBytes);

    for (let i = 0; i < sigBytes; i++) {
      u8[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    }

    return u8;
  },

  // Tạo code challenge từ code verifier
  generateCodeChallenge(codeVerifier: string): string {
    const hash = CryptoJS.SHA256(codeVerifier);
    const hashArray = this.wordArrayToUint8Array(hash); // ✅ Không lỗi nữa!
    return this.base64URLEncode(hashArray);
  },
};
