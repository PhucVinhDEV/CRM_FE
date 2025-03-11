import axios from "axios";
import Cookie from "js-cookie";

import { ACCESS_TOKEN } from "@/utils/storage";
import { API_ENDPOINTS } from "./ApiEndpoint";
import { ROUTES } from "@/routes/routes";

const refreshToken = async () => {
  try {
    const { data } = await axios.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN, null, {
      withCredentials: true, // ✅ Trình duyệt tự động gửi Refresh Token trong Cookie
    });
    // ✅ Chỉ lưu lại Access Token mới vào Cookie
    Cookie.set(ACCESS_TOKEN, data.access_token);
    return data;
  } catch (error) {
    // ❌ Xóa Access Token nếu refresh thất bại
    Cookie.remove(ACCESS_TOKEN);
    window.location.href = ROUTES.AUTH.LOGIN;
    return null;
  }
};

const restConnector = (cookie?: string) => {
  const CreateRestConnector = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STATIC_API_URL,
    timeout: 30000,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie ? cookie : Cookie.get(ACCESS_TOKEN)}`,
    },
  });

  // ✅ Interceptor cho response: xử lý khi token hết hạn
  CreateRestConnector.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        // 🔄 Refresh token nếu access token hết hạn
        const newToken = await refreshToken();
        if (newToken) {
          error.config.headers.Authorization = `Bearer ${newToken.access_token}`;
          return axios(error.config); // Gửi lại request sau khi refresh token
        }
      }
      return Promise.reject(error);
    },
  );
  CreateRestConnector.interceptors.request.use((config) => {
    const excludedUrls = [
      API_ENDPOINTS.AUTH.LOGIN,
      API_ENDPOINTS.AUTH.LOGOUT,
      API_ENDPOINTS.AUTH.REFRESH_TOKEN,
      API_ENDPOINTS.AUTH.SEND_OTP,
      API_ENDPOINTS.AUTH.VERIFY_OTP,
    ]; // Các API không cần token
    if (excludedUrls.some((url) => config.url?.includes(url))) {
      delete config.headers.Authorization;
    }
    return config;
  });
  return CreateRestConnector;
};
export default restConnector;
