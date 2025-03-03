import { Button } from "../ui/Button";
import { buttonVariants } from "../ui/Button";
import { HeroCards } from "./Herocard";

export const HeroSection = () => {
  return (
    <section className="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
              EngagePro
            </span>{" "}
            -
          </h1>{" "}
          Giải pháp{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              CRM & Marketing Automation
            </span>{" "}
            toàn diện
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Tăng cường kết nối khách hàng, tối ưu quy trình marketing và thúc đẩy
          doanh thu với EngagePro – nền tảng CRM & Marketing Automation toàn
          diện.
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Dùng thử miễn phí
            {/* <GitHubLogoIcon className="ml-2 h-5 w-5" /> */}
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
