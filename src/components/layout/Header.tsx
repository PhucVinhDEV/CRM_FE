"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { selectUserInfo } from "@/reduxs/UserSelector";
import { useRouter } from "next/navigation"; // ✅ Đúng cho App Router
import { useAppSelector } from "@/hooks/store";
import { useTranslation } from "@/i18n/client";
import LanguageSwitcher from "../component/LanguageSwitcher";
import useRouterWithLng from "@/hooks/useRouterWithLng";
import { ROUTES } from "@/routes/routes";
const Header = () => {
  const { t } = useTranslation();
  const user = useAppSelector(selectUserInfo);
  const push = useRouterWithLng();

  const handleLogin = () => {
    push(ROUTES.AUTH.LOGIN, undefined, false, true); // ✅ Chuyển hướng đến trang login
  };
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            {t("header.logo")} {/* Lấy logo từ tài nguyên dịch */}
          </Link>

          <div className="flex items-center gap-8">
            {/* Liên kết "Trang chủ" */}
            <Link href="/" className="flex-1 text-center hover:text-gray-600">
              {t("header.home")} {/* Lấy "Trang chủ" từ tài nguyên dịch */}
            </Link>
            {/* Liên kết "Giới thiệu" */}
            <Link
              href="/about"
              className="flex-1 text-center hover:text-gray-600"
            >
              {t("header.about")} {/* Lấy "Giới thiệu" từ tài nguyên dịch */}
            </Link>
            {/* Liên kết "Liên hệ" */}
            <Link
              href="/contact"
              className="flex-1 text-center hover:text-gray-600"
            >
              {t("header.contact")} {/* Lấy "Liên hệ" từ tài nguyên dịch */}
            </Link>
            {/* Nút "Đăng nhập" */}
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-center"
              onClick={handleLogin}
            >
              {t("header.signin")} {/* Lấy "Đăng nhập" từ tài nguyên dịch */}
            </Button>
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
