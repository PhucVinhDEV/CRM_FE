import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ['"HarmonyOS Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          bold: "var(--primary-bold)",
          foreground: "hsl(var(--primary-foreground))",
        },
        whiteBase: "#FFFFFF",
        grayBase: "#ebedf1",
        gray300: "#f6f7f8",
        gray400: "#f7f8fa",
        gray500: "#afafaf",
        gray600: "#8c8c8c",
        grayDark: "#65686C",
        grayDarkest: "#323436",
        grayBlue400: "#87909f",
        yellowBase: "#FCD535",
        orangeBase: "#F0B926",
        purpleBase: "#8f4cee",
        blackBase: "#0d0e0f",
        blueBase: "#3887fe",
        greenBase: "#1DC167",
        greenDark: "#0E8A5F",
        green500: "#d9f2eb",
        redBase: "#FF5B42",
        redDark: "#B72125",
        red500: "#ffe7ea",
        black400: "#222429",
        blue100: "#D7EDFE",
        blue200: "#AFD8FE",
        blue300: "#87C0FE",
        blue400: "#69ABFE",
        blue500: "#3887FE",
        blue600: "#2868DA",
        blue700: "#1C4DB6",
        blue800: "#113593",
        blue900: "#0A2579",
      },
      backgroundColor: {
        darkBase: "#0d0e0f",
        dark300: "#25272c",
        dark400: "#141414",
        dark500: "#171721",
        dark600: "#111214",
        dark700: "#0a0a0a",
      },
      backgroundSize: {
        full: "100%",
      },
      borderColor: {
        whiteBase: "#FFFFFF",
        blackBase: "#0d0e0f",
        black400: "#222429",
        bgray500: "#e4e6e8",
        bgray400: "#292b2e",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideX: "slideX 150s linear infinite",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
