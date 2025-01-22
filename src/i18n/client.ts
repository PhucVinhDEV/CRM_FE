"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import i18next, { FlatNamespace, KeyPrefix } from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./setting";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export default i18next;

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  lng?: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const params = useParams();

  const defaultLang = lng ? lng : (params?.lng as string);

  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  if (
    runsOnServerSide &&
    defaultLang &&
    i18n.resolvedLanguage !== defaultLang
  ) {
    i18n.changeLanguage(defaultLang);
  } else {
    // eslint-disable-next-line
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    // eslint-disable-next-line
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    // eslint-disable-next-line
    useEffect(() => {
      if (!defaultLang || i18n.resolvedLanguage === defaultLang) return;
      i18n.changeLanguage(defaultLang);
    }, [defaultLang, i18n]);

    // eslint-disable-next-line
    useEffect(() => {
      if (cookies.i18next === defaultLang) return;
      setCookie(cookieName, defaultLang, { path: "/" });
      // eslint-disable-next-line
    }, [defaultLang, cookies.i18next]);
  }

  return ret;
}
