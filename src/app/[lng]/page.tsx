import MainContentLayout from "@/components/layouts/MainContentLayout";
import HomeBanner from "@/components/pages/home/home-banners/HomeBanner";

export default async function Home() {
  return (
    <MainContentLayout>
      <main className="mb:min-h-screen mb-[74px] bg-whiteBase dark:bg-black sm:mb-0">
        <div className="container hidden md:block">
          <HomeBanner />
        </div>
      </main>
    </MainContentLayout>
  );
}
