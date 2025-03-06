// File: Dashboard.tsx

import { About } from "@/components/landingpage/About";
import { HeroSection } from "@/components/landingpage/HeroSection";
import { Pricing } from "@/components/landingpage/Pricing";
import NoFooterContentLayout from "@/components/layouts/NoFooterContentLayout";

export default async function Home() {
  return (
    <NoFooterContentLayout>
      <main className="mb:min-h-screen mb-[74px] bg-whiteBase dark:bg-black sm:mb-0">
        <div className="container hidden md:block">DASHBORAD</div>
      </main>
    </NoFooterContentLayout>
  );
}
