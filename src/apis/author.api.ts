import { isProduction } from "@/utils";
import restConnector from "@/connectors/AxiosRestConnector";
import { API_ENDPOINTS } from "@/connectors/ApiEndpoint";
import axios from "axios";
import { IRequestOTPAndRegister } from "@/types/user";

// ✅ Đăng ký tài khoản
export const register = async (values: {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
}) => {
  try {
    const { data } = await restConnector().post(
      API_ENDPOINTS.AUTH.REGISTER,
      values,
    );
    return data;
  } catch (error) {
    if (!isProduction) console.error("Register Error:", error);
    throw error; // Re-throw lỗi để UI xử lý
  }
};

// ✅ Đăng nhập
export const login = async (values: { email: string; password: string }) => {
  try {
    console.log("Login values:", values);
    const { data } = await restConnector().post(
      API_ENDPOINTS.AUTH.LOGIN,
      values,
    );
    return data;
  } catch (error) {
    if (!isProduction) console.error("Login Error:", error);
    throw error;
  }
};

// ✅ Lấy thông tin người dùng hiện tại
export const getCurrentUser = async (cookie?: string) => {
  try {
    const { data } = await restConnector(cookie).get(API_ENDPOINTS.AUTH.MYSELF);

    // Kiểm tra nếu API không có lỗi và `result` tồn tại
    if (data && !data.hasErrors && data.result) {
      return data.result; // Trả về `result` thay vì `null`
    }

    return null; // Trả về `null` nếu có lỗi
  } catch (error) {
    if (!isProduction) console.error("GetCurrentUser Error:", error);
    return null;
  }
};

// ✅ Đăng nhập với google
export const OauthOutboundGoogle = async (
  code: string,
  RedirectURI: string,
  codeVerifier: string,
) => {
  try {
    const baseURL =
      process.env.NEXT_PUBLIC_STATIC_API_URL ||
      "http://localhost:8080/bitznomad";
    const url = `${baseURL}${API_ENDPOINTS.AUTH.OUTBOUND}`;
    const { data } = await axios.post(
      url,
      { code, RedirectURI, codeVerifier },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (data && !data.hasErrors && data.result) {
      return data.result; // Trả về `result` thay vì `null`
    }

    return null;
  } catch (error) {
    console.error("error APi", error);
    if (!isProduction) console.error("Outbound Google Error:", error);
    return null;
  }
};

export const sendOTP = async (email: string) => {
  try {
    const { data } = await restConnector().post(API_ENDPOINTS.AUTH.SEND_OTP, {
      email: email,
    });
    return data;
  } catch (error) {
    if (!isProduction) console.error("SendOTP Error:", error);
    throw error;
  }
};

export const VerifyOTP = async (values: IRequestOTPAndRegister) => {
  try {
    const { data } = await restConnector().post(
      API_ENDPOINTS.AUTH.VERIFY_OTP,
      values,
    );
    return data;
  } catch (error) {
    if (!isProduction) console.error("SendOTP Error:", error);
    throw error;
  }
};
