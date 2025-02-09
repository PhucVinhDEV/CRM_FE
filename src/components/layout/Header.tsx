import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

const Header = () => {
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
            <Button variant="ghost" size="sm" className="flex-1 text-center">
              Signin
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
