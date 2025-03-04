"use client";

import { useEffect, useMemo } from "react";
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
// Listen for the 'loaded' event to log resources after they are loaded
// i18next.on("loaded", (loaded) => {
//   console.log("Loaded resources:", JSON.stringify(loaded, null, 2)); // Pretty-print the loaded resources
//   console.log(
//     "All loaded resources:",
//     JSON.stringify(i18next.store.data, null, 2),
//   ); // Pretty-print all resources
// });

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
  const { i18n } = useTranslationOrg(ns, options);

  // if (
  //   runsOnServerSide &&
  //   defaultLang &&
  //   i18n.resolvedLanguage !== defaultLang
  // ) {
  //   i18n.changeLanguage(defaultLang);
  // } else {
  //   // eslint-disable-next-line
  //   const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  //   // eslint-disable-next-line
  //   useEffect(() => {
  //     if (activeLng === i18n.resolvedLanguage) return;
  //     setActiveLng(i18n.resolvedLanguage);
  //   }, [activeLng, i18n.resolvedLanguage]);

  //   // eslint-disable-next-line
  //   useEffect(() => {
  //     if (!defaultLang || i18n.resolvedLanguage === defaultLang) return;
  //     i18n.changeLanguage(defaultLang);
  //   }, [defaultLang, i18n]);

  //   // eslint-disable-next-line
  //   useEffect(() => {
  //     if (cookies.i18next === defaultLang) return;
  //     setCookie(cookieName, defaultLang, { path: "/" });
  //     // eslint-disable-next-line
  //   }, [defaultLang, cookies.i18next]);
  // }
  // Calculate the language to be set using `useMemo` to prevent unnecessary re-renders

  const languageToSet = useMemo(() => {
    return defaultLang || cookies.i18next || i18n.language;
  }, [defaultLang, cookies.i18next, i18n.language]);

  // Update language when the app starts or when language changes
  useEffect(() => {
    // console.log(
    //   "Language change effect triggered",
    //   i18n.language,
    //   languageToSet,
    // );

    if (runsOnServerSide) return;

    if (i18n.language !== languageToSet) {
      // console.log("Changing language to", languageToSet);
      i18n.changeLanguage(languageToSet); // Change language if necessary
    }

    if (cookies.i18next !== languageToSet) {
      // console.log("Setting cookie to", languageToSet);
      setCookie(cookieName, languageToSet, { path: "/" });
    }
  }, [i18n.language, languageToSet, cookies.i18next, setCookie]);

  return useTranslationOrg(ns, options);
}
