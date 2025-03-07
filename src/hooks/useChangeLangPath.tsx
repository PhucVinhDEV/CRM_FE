"use client";

import { LANGUAGE } from "@/constants/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useChangeLangPath = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleParsePath = (value: LANGUAGE) => {
    const pathnameArr = pathname.split("/") || [];
    if (!pathnameArr[1]) return "";
    pathnameArr[1] = value;
    return pathnameArr.join("/");
  };

  const onChangeLangPath = (value: LANGUAGE) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const parsePath = handleParsePath(value);
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${parsePath}${query}`);
  };
  return {
    onChangeLangPath,
  };
};
