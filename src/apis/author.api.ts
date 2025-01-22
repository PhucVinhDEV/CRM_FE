import { isProduction } from "@/utils";
import restConnector from "@/connectors/AxiosRestConnector";

export const register = async (values: {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
}) => {
  const { data } = await restConnector().post("/auth/register", {
    ...values,
  });

  return data;
};

export const login = async (values: { email: string; password: string }) => {
  const { data } = await restConnector().post("/auth/login", {
    ...values,
  });

  return data;
};

export const getCurrentUser = async (jwtToken?: string) => {
  try {
    const { data } = await restConnector(jwtToken).get("/auth/whoami");
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    if (!isProduction) console.log(error);
  }
};
