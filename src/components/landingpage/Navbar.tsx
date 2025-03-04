"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/Navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/Sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "../ui/Button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";
import LanguageSwitcher from "../component/LanguageSwitcher";
import CSRLink from "../commons/custom-links/CSRLink";
import { NAV_MENU } from "@/constants/menu";
import { useTranslation } from "@/i18n/client";
import useRouterWithLng from "@/hooks/useRouterWithLng";
import { ROUTES } from "@/routes/routes";
import { useSelector } from "react-redux";
import { selectUserInfo } from "@/reduxs/UserSelector";

interface RouteProps {
  href: string;
  label: string;
}
const routeList: RouteProps[] = [
  {
    href: "/features",
    label: "features",
  },
  {
    href: "/testimonials",
    label: "testimonials",
  },
  {
    href: "/pricing",
    label: "pricing",
  },
  {
    href: "/faq",
    label: "faq",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userInfo = useSelector(selectUserInfo);
  const { t } = useTranslation(); // useTranslation hook for i18n
  const router = useRouterWithLng();
  console.log("userInfo", userInfo);
  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-black dark:text-white">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-14 w-screen justify-between px-4">
          <NavigationMenuItem className="flex font-bold">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 flex text-xl font-bold"
            >
              {/* <LogoIcon /> */}
              ShadcnUI/React
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex h-5 w-5 md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {NAV_MENU.map(({ href, label }: RouteProps) => (
                    <CSRLink
                      href={href} // Use 'Link' for routing
                      key={label}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </CSRLink>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 h-5 w-5 dark:bg-black dark:text-white" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {t(`navbar.${route.label}`)}
              </a>
            ))}
          </nav>
          <div className="hidden gap-2 md:flex">
            <Button
              onClick={() => router(ROUTES.AUTH.LOGIN)}
              variant="outline"
              className="w-full transition-colors hover:border-gray-400 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
            >
              {" "}
              Singin
            </Button>
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
