import axios from "axios";

const publicRestConnector = () => {
  const CreateRestConnector = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STATIC_API_URL,
    timeout: 30000,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // ✅ Interceptor cho response (nếu cần)
  CreateRestConnector.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized request"); // Xử lý nếu cần
      }
      return Promise.reject(error);
    },
  );

  return CreateRestConnector;
};
export default publicRestConnector;
