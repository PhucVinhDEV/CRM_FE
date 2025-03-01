"use client";

import { About } from "@/components/landingpage/About";
import { HeroSection } from "@/components/landingpage/HeroSection";
import { Navbar } from "@/components/landingpage/Navbar";
import { useTranslation } from "@/i18n/client";

const HomeBanner = () => {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <HeroSection />
        <About />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        word footer
      </footer>
    </div>
  );
};

export default HomeBanner;
