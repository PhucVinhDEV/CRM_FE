import { createInstance, FlatNamespace, KeyPrefix } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { FallbackNs } from "react-i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./setting";
import { headers } from "next/headers";
import { HEADER_CURR_LANG_KEY } from "@/constants/common";

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(lng?: string, ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
  const headerReqLangKey = headers().get(HEADER_CURR_LANG_KEY);
  const defaultLng = lng ? lng : (headerReqLangKey?.slice(1, 3) as string);

  const i18nextInstance = await initI18next(
    defaultLng,
    Array.isArray(ns) ? (ns as string[]) : (ns as string),
  );
  return {
    t: i18nextInstance.getFixedT(
      defaultLng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
