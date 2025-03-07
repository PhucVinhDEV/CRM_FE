import { dir } from "i18next";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";

import { Toaster } from "@/components/ui/Toaster";
import { languages } from "@/i18n/setting";
import StoreProvider from "@/providers/StoreProvider";
import type { IBasePageProps } from "@/types";

import InitData from "@/components/commons/InitData";
import { GET_STATIC_IMAGE_URL } from "@/constants/common";

import "react-phone-number-input/style.css";
import "../../styles/index.scss";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});
const harmonyOSFont = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Light_Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Regular_Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Medium_Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Bold_Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/harmonyos-sans/HarmonyOS_Sans_Black_Italic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "CRM",
  description: "Website CRM",
  icons: `/assets/images/window.svg`,
};

interface IRootLayout extends IBasePageProps {}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<IRootLayout>) {
  const nextCookies = cookies();

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image"
          content={`${GET_STATIC_IMAGE_URL}/assets/images/opengraph-image.png`}
        />
        <meta name="twitter:card" content="AEX_Trade_large_image" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="600" />
        <meta name="twitter:image:height" content="600" />
        <meta
          name="twitter:image"
          content={`${GET_STATIC_IMAGE_URL}/assets/images/opengraph-image.png`}
        />
      </head>
      <body className={`${lexend.className} ${harmonyOSFont.className}`}>
        <NextTopLoader color="#0066FF" showSpinner={false} />
        <StoreProvider>
          <InitData cookie={nextCookies} />
          <Toaster />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
