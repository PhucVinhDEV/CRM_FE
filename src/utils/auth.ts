import Cookie from "js-cookie";
import { ACCESS_TOKEN } from "./storage";
import { TEMP_ACCESS_TOKEN } from "@/constants/auth";

export const decrypt = async (cookie: string | undefined) => {
  if (!cookie) {
    return null;
  }
  return JSON.parse(
    Buffer.from(cookie.split(".")[1], "base64").toString("ascii"),
  );
};

export const decryptSync = (cookie: string | undefined) => {
  if (!cookie) return null;
  try {
    return JSON.parse(
      Buffer.from(cookie.split(".")[1], "base64").toString("ascii"),
    );
  } catch (error) {
    return null;
  }
};
export const checkTokenExpired = (token: { exp: number }) => {
  if (!token) {
    return true;
  }
  const currentTime = new Date().getTime() / 1000;
  return currentTime > token.exp;
};

export const JwtFromCookie =
  Cookie.get(ACCESS_TOKEN) || Cookie.get(TEMP_ACCESS_TOKEN);
