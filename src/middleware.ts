import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./i18n/setting";
import { HEADER_CURR_LANG_KEY } from "./constants/common";
import { ACCESS_TOKEN } from "./utils/storage";
import { checkTokenExpired, decrypt } from "./utils/auth";

const protectedRoutes = ["/account-overview"];

const publicRoutes = ["/login"];

acceptLanguage.languages(languages);

export async function middleware(req: NextRequest) {
  let lng;
  const pathName = req.nextUrl.pathname;

  //Multilanguage
  if (req.cookies.has(cookieName)) lng = req.cookies.get(cookieName)?.value;
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  //Authentication
  const cookie = req.cookies.get(ACCESS_TOKEN)?.value;
  const token = await decrypt(cookie);
  const isTokenExpired = checkTokenExpired(token);
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathName.slice(3).startsWith(route),
  );

  const isPublicRoute = publicRoutes.some((route) =>
    pathName.slice(3).startsWith(route),
  );

  const isRedirectLogin =
    isProtectedRoute && (!token?.id || !token?.type || isTokenExpired);
  const isRedirectHome = isPublicRoute && token?.id && token?.type;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set(HEADER_CURR_LANG_KEY, pathName);

  if (isRedirectLogin) {
    return NextResponse.redirect(new URL(`/${lng}/login`, req.url));
  }

  // Redirect to / if the user is authenticated
  if (isRedirectHome) {
    return NextResponse.redirect(new URL(`/${lng}/`, req.url));
  }

  if (
    !languages.some((loc) => pathName.startsWith(`/${loc}`)) &&
    !pathName.startsWith("/_next") &&
    !pathName.startsWith("/assets")
  ) {
    return NextResponse.redirect(new URL(`/${lng}${pathName}`, req.url), {
      headers: requestHeaders,
    });
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "");
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
