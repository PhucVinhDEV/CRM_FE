import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

import { isProduction } from "@/utils";
import { getCurrentUser } from "@/apis/author.api";
import SetDataToRedux from "@/components/commons/SetDataToRedux";
import { ACCESS_TOKEN } from "@/utils/storage";

const getDataCurrentUser = async (cookie: ReadonlyRequestCookies) => {
  try {
    const tokenCookie = cookie.get(ACCESS_TOKEN); // Lấy cookie
    if (!tokenCookie) return null; // Kiểm tra nếu không có cookie
    const token = tokenCookie?.value || ""; // Lấy giá trị token an toàn
    if (!token.trim()) return null;
    const data = await getCurrentUser(token);
    return data;
  } catch (error) {
    if (!isProduction) console.log("ERROR GET CURRENT USER", error);
  }
};
const InitData = async ({ cookie }: { cookie: ReadonlyRequestCookies }) => {
  const dataCurrentUser = await getDataCurrentUser(cookie);
  return <SetDataToRedux dataCurrentUser={dataCurrentUser} />;
};

export default InitData;
