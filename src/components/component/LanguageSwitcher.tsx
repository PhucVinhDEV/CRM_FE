"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu"; // Import Radix UI components
import { LANGUAGE } from "@/constants/common";
import { useChangeLangPath } from "@/hooks/useChangeLangPath"; // Giả sử bạn đã có hook này
import { useCookies } from "react-cookie"; // Import react-cookie để sử dụng cookies
import FlagForUnitedKingdom from "../ui/FlagIcon/FlagForUnitedKingdom";
import FlagForVietnam from "../ui/FlagIcon/FlagForVietnamProps";

const LanguageSwitcher = () => {
  const { onChangeLangPath } = useChangeLangPath();
  const [cookies, setCookie] = useCookies(["i18next"]); // Đọc cookie i18next
  const [selectedLang, setSelectedLang] = useState(LANGUAGE.EN); // Default language is English

  // Kiểm tra ngôn ngữ hiện tại trong cookie khi component mount
  useEffect(() => {
    const storedLang = cookies.i18next || LANGUAGE.EN; // Lấy ngôn ngữ từ cookie nếu có, mặc định là "EN"
    setSelectedLang(storedLang);
  }, [cookies.i18next]);

  const handleLanguageChange = (newLang: LANGUAGE) => {
    if (newLang !== selectedLang) {
      setSelectedLang(newLang); // Cập nhật ngôn ngữ đã chọn
      onChangeLangPath(newLang); // Cập nhật ngôn ngữ trong đường dẫn

      // Lưu ngôn ngữ vào cookie để duy trì ngôn ngữ khi tải lại trang
      setCookie("i18next", newLang, { path: "/" });
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center rounded-lg bg-gray-200 px-4 py-2 text-black hover:bg-gray-300">
            {/* Thêm cờ và tên ngôn ngữ cùng nằm trên một hàng */}
            {selectedLang === LANGUAGE.EN ? (
              <FlagForUnitedKingdom size={16} />
            ) : (
              <FlagForVietnam size={16} />
            )}
            <span className="ml-2">
              {selectedLang === LANGUAGE.EN ? "EN" : "VI"}
            </span>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mt-2 rounded-md border border-gray-200 bg-white shadow-md">
          {/* Menu Item cho English */}
          <DropdownMenuItem
            onClick={() => handleLanguageChange(LANGUAGE.EN)}
            className="flex items-center px-4 py-2 text-black hover:bg-gray-100"
          >
            <FlagForUnitedKingdom size={16} />
            <span className="ml-2">English</span>
          </DropdownMenuItem>

          {/* Menu Item cho Vietnamese */}
          <DropdownMenuItem
            onClick={() => handleLanguageChange(LANGUAGE.VI)}
            className="flex items-center px-4 py-2 text-black hover:bg-gray-100"
          >
            <FlagForVietnam size={16} />
            <span className="ml-2">Vietnamese</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
