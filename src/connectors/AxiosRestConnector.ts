import axios from "axios";
import Cookie from "js-cookie";

import { ACCESS_TOKEN } from "@/utils/storage";
import { TEMP_ACCESS_TOKEN } from "@/constants/auth";
import { API_ENDPOINTS } from "./ApiEndpoint";

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

  CreateRestConnector.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        Cookie.remove(ACCESS_TOKEN);
        Cookie.remove(TEMP_ACCESS_TOKEN);
        window.location.reload();
      }
      return Promise.reject(error);
    },
  );
  CreateRestConnector.interceptors.request.use((config) => {
    const excludedUrls = [API_ENDPOINTS.AUTH.LOGIN, API_ENDPOINTS.AUTH.LOGOUT]; // Các API không cần token
    if (excludedUrls.some((url) => config.url?.includes(url))) {
      delete config.headers.Authorization;
    }
    return config;
  });
  return CreateRestConnector;
};

export default restConnector;
