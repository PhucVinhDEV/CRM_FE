"use client";
import { Button } from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { THEME } from "@/constants/common";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  console.log("ModeToggle: Initial render with theme:", theme);

  const handleThemeChange = (newTheme: THEME) => {
    console.log("handleThemeChange called with:", newTheme);
    console.log("Current theme before update:", theme);

    // Cập nhật theme trực tiếp mà không cần setTimeout
    setTheme(newTheme);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ghost">
          <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            console.log("Switching to light mode");
            handleThemeChange(THEME.LIGHT);
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            console.log("Switching to dark mode");
            handleThemeChange(THEME.DARK);
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            console.log("Switching to system mode");
            handleThemeChange(THEME.SYSTEM);
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
