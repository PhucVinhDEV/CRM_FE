"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

import { selectUserInfo } from "@/reduxs/UserSelector";
import { useRouter } from "next/navigation"; // ✅ Đúng cho App Router
import { useAppSelector } from "@/hooks/store";

const Header = () => {
  const user = useAppSelector(selectUserInfo);
  const router = useRouter();
  useEffect(() => {
    console.log("User sau khi REHYDRATE:", user);
  }, [user]);

  console.log("User sau", user);
  const handleLogin = () => {
    router.push("/login"); // ✅ Chuyển hướng đến trang login
  };
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-1 text-center hover:text-gray-600">
              Home
            </Link>
            <Link
              href="/about"
              className="flex-1 text-center hover:text-gray-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex-1 text-center hover:text-gray-600"
            >
              Contact
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-center"
              onClick={handleLogin}
            >
              Signin
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
