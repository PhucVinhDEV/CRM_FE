import { ThemeProvider } from "next-themes";
import { THEME, THEME_LOCAL_STORAGE_KEY } from "@/constants/common";
import MainFooter from "../footers/MainFooter";
import MainHeader from "../headers/layouts/MainHeader";

const MainContentLayout = ({
  children,
  forcedTheme,
}: {
  children: React.ReactNode;
  forcedTheme?: THEME | undefined;
}) => {
  return (
    <ThemeProvider
      storageKey={THEME_LOCAL_STORAGE_KEY}
      attribute="class"
      forcedTheme={forcedTheme}
      enableSystem={false}
    >
      <MainHeader />
      {children}
      <MainFooter />
    </ThemeProvider>
  );
};

export default MainContentLayout;
