// File: DashboardPanelLayout.tsx

"use client";

import { ThemeProvider } from "next-themes";
import { THEME, THEME_LOCAL_STORAGE_KEY } from "@/constants/common";

import Footer from "../layout/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/reduxs/store";
import { cn } from "@/utils";
import Sidebar from "../layout/dashboard/SideBar";

const DashboardPanelLayout = ({
  children,
  forcedTheme,
}: {
  children: React.ReactNode;
  forcedTheme?: THEME | undefined;
}) => {
  const { isOpen, settings } = useSelector((state: RootState) => state.sidebar);

  return (
    <ThemeProvider
      storageKey={THEME_LOCAL_STORAGE_KEY}
      attribute="class"
      forcedTheme={forcedTheme}
      enableSystem={false}
    >
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900",
          !settings.disabled && (!isOpen ? "lg:ml-[90px]" : "lg:ml-72"),
        )}
      >
        {children} {/* Truyền một phần tử con duy nhất */}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] duration-300 ease-in-out",
          !settings.disabled && (!isOpen ? "lg:ml-[90px]" : "lg:ml-72"),
        )}
      >
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default DashboardPanelLayout;
