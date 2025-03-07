import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const checkPathExistArr = (
  path: string,
  conditionArr: Array<string>,
) => {
  const conditionSet = new Set(conditionArr);
  return conditionSet.has(path);
};

export const isProduction = process.env.NEXT_PUBLIC_DEV === "production";

export const getBgColor = (value: number) => {
  switch (true) {
    case value > 75:
      return "bg-[#FF5B42]";
    case value > 50:
      return "bg-[#F0B926]";
    case value > 25:
      return "bg-[#FCD535]";
    default:
      return "bg-[#1DC167]";
  }
};

export const generateUUID = () => {
  const timestamp = Date.now().toString(36);
  const randomValues = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 36).toString(36),
  ).join("");
  const uniquePart = Math.random().toString(36).substring(2, 8);
  return `id-${timestamp}-${randomValues}-${uniquePart}`;
};
