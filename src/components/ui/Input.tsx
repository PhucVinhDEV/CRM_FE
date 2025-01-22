"use client";

import * as React from "react";
import { Eye, EyeOff, Search } from "lucide-react";

import { cn } from "@/utils";
import { Label } from "./Label";
import { INPUT_TYPE } from "@/constants/common";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  label?: React.ReactNode;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, labelClassName, error, label, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div>
        {label && (
          <Label
            className={cn(
              "mb-2 inline-block font-normal text-grayBlue400",
              error && "text-redBase",
              labelClassName,
            )}
          >
            {label}
          </Label>
        )}
        <div className="relative">
          <input
            min={0}
            onWheel={(e) => (e.target as HTMLElement).blur()}
            ref={ref}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            className={cn(
              "flex h-[48px] w-full rounded-xl border border-slate-200 px-4 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-blackBase/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-blackBase",
              className,
              type === "password" && "pr-10",
              error
                ? "border-redBase hover:border-redBase focus:border-redBase dark:border-redBase dark:hover:border-redBase dark:focus:border-redBase"
                : "border-transparent hover:border-blackBase focus:border-blackBase dark:border-transparent dark:hover:border-whiteBase dark:focus:border-whiteBase",
            )}
            {...props}
          />

          {type === INPUT_TYPE.password ? (
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer opacity-50 dark:text-whiteBase lg:dark:text-blackBase"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </span>
          ) : null}

          {type === INPUT_TYPE.search ? (
            <span className="absolute left-4 top-1/2 translate-y-[-50%] cursor-pointer opacity-50 dark:text-whiteBase lg:dark:text-blackBase">
              <Search width={20} height={20} />
            </span>
          ) : null}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
