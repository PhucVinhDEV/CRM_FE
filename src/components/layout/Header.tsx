"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useTranslation } from "@/i18n/client";
import LanguageSwitcher from "../component/LanguageSwitcher";
import useRouterWithLng from "@/hooks/useRouterWithLng";
import { ROUTES } from "@/routes/routes";
import { Navbar } from "../landingpage/Navbar";
const Header = () => {
  const push = useRouterWithLng();

  return (
    <header className="top-0 w-full bg-white shadow">
      <Navbar />
    </header>
  );
};

export default Header;
