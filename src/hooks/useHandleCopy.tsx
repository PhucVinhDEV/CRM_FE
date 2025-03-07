"use client";

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "@/i18n/client";
import { isProduction } from "@/utils";

export const useHandleCopy = (): [(text: string) => void, boolean] => {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          toast({
            status: "success",
            duration: 2000,
            description: t("toasts.copiedSuccess"),
          });
        })
        .catch((error) => {
          if (!isProduction)
            console.error("Lỗi khi sao chép vào clipboard:", error);
          toast({
            title: t("toasts.error"),
            variant: "destructive",
            duration: 2000,
            description: t("toasts.copyFailed"),
          });
        })
        .finally(() => {
          setIsCopied(false);
        });
    } else {
      if (!isProduction) console.warn("Trình duyệt không hỗ trợ Clipboard API");
      toast({
        title: t("toasts.warning"),
        duration: 2000,
        description: t("toasts.clipboardNotSupported"),
      });
    }
  };

  return [handleCopy, isCopied];
};
