import { ThemeProvider } from "next-themes";
import { THEME, THEME_LOCAL_STORAGE_KEY } from "@/constants/common";
import MainHeader from "../headers/layouts/MainHeader";

const NoFooterContentLayout = ({
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
    </ThemeProvider>
  );
};

export default NoFooterContentLayout;
