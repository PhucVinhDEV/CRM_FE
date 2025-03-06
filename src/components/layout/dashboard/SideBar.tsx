"use client";
import { Menu } from "./Menu";
import { SidebarToggle } from "./SidebarToggle";
import { Button } from "@/components/ui/Button";
import { useDispatch, useSelector } from "react-redux";

import { toggleOpen, setIsHover } from "@/reduxs/sidebarSlice";
import { cn } from "@/utils";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { RootState } from "@/reduxs/store";

export function Sidebar() {
  const dispatch = useDispatch();
  const { isOpen, settings } = useSelector((state: RootState) => state.sidebar);
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0",
        !isOpen ? "w-[90px]" : "w-72",
        settings.disabled && "hidden",
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
      <div
        onMouseEnter={() => dispatch(setIsHover(true))}
        onMouseLeave={() => dispatch(setIsHover(false))}
        className="relative flex h-full flex-col overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800"
      >
        <Button
          className={cn(
            "mb-1 transition-transform duration-300 ease-in-out",
            !isOpen ? "translate-x-1" : "translate-x-0",
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <PanelsTopLeft className="mr-1 h-6 w-6" />
            <h1
              className={cn(
                "whitespace-nowrap text-lg font-bold transition-[transform,opacity,display] duration-300 ease-in-out",
                !isOpen
                  ? "hidden -translate-x-96 opacity-0"
                  : "translate-x-0 opacity-100",
              )}
            >
              Brand
            </h1>
          </Link>
        </Button>
        <Menu isOpen={isOpen} />
      </div>
    </aside>
  );
}
