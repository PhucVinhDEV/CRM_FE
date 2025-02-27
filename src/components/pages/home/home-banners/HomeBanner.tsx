"use client";

import { useTranslation } from "@/i18n/client";

const HomeBanner = () => {
  const { t, i18n } = useTranslation();
  // console.log("T Function:", t); // Kiểm tra giá trị t
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1>{t("welcome_message")}</h1>
        <p>Current language: {i18n.language}</p> {/* Show current language */}
        <button onClick={() => i18n.changeLanguage("vi")}>
          🇻🇳 Switch to Vietnamese
        </button>
        <button onClick={() => i18n.changeLanguage("en")}>
          🇬🇧 Switch to English
        </button>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        word footer
      </footer>
    </div>
  );
};

export default HomeBanner;
