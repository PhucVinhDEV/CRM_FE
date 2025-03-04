import { isProduction } from "@/utils";
import restConnector from "@/connectors/AxiosRestConnector";
import { API_ENDPOINTS } from "@/connectors/ApiEndpoint";

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
export const getCurrentUser = async () => {
  try {
    const { data } = await restConnector().get(API_ENDPOINTS.AUTH.MYSELF);

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
