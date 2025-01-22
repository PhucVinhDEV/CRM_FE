import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

import { isProduction } from "@/utils";
import { KEY_JWT } from "@/constants/common";
import { getCurrentUser } from "@/apis/author.api";
import SetDataToRedux from "@/components/commons/SetDataToRedux";

const getDataCurrentUser = async (cookie: ReadonlyRequestCookies) => {
  try {
    const token = cookie.get(KEY_JWT); // Find cookie
    if (!token) return null;

    const data = await getCurrentUser(token?.value);
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
