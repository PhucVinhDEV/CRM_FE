"use client";

import { CircleCheck, CircleX, Info, MessageSquare } from "lucide-react";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/Toast";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/utils";
import { TOAST_STATUS } from "@/constants/common";

const TOAST_DURATION = 2000;

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={TOAST_DURATION}>
      {toasts.map(
        ({
          id,
          title,
          description,
          action,
          status,
          isHideCloseToast,
          ...props
        }) => {
          const iconMap = {
            success: (
              <CircleCheck width={28} height={28} className="text-greenBase" />
            ),
            error: <CircleX width={28} height={28} className="text-redBase" />,
            info: <Info width={28} height={28} className="text-blueBase" />,
            message: (
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#232527]">
                <MessageSquare
                  width={20}
                  height={20}
                  className="text-whiteBase"
                />
              </div>
            ),
          };
          const icon = iconMap[status ?? "info"];

          return (
            <Toast key={id} {...props}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>
                    <div
                      className={cn(
                        status === TOAST_STATUS.MESSAGE ? "gap-6" : "gap-2",
                        "flex w-full items-center",
                      )}
                    >
                      <div className="w-7">{icon}</div>
                      <p className="w-full text-base font-semibold">
                        {description}
                      </p>
                    </div>
                  </ToastDescription>
                )}
              </div>
              {action}
              {!isHideCloseToast && (
                <ToastClose className="text-whiteBase/50 opacity-100 hover:text-whiteBase dark:text-blackBase/50 dark:hover:text-blackBase" />
              )}
            </Toast>
          );
        },
      )}
      <ToastViewport />
    </ToastProvider>
  );
}
