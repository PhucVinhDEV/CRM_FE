import { toast } from "@/components/ui/use-toast";
import i18next from "../i18n/client";
import { ALLOWED_IMAGE_EXTENSIONS, MAX_SIZE_IMAGE } from "@/constants/common";

export const convertFileName = (formatFile: string, fileName: string) => {
  const extension = fileName.split(".").pop();
  const uuid = new Date().valueOf();

  return formatFile + "-" + uuid + "." + extension;
};

export const checkUploadImage = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const files = event.target.files ? Array.from(event.target.files) : [];
  const filesAccepted = files.filter((file) => {
    const fileExtension = file.name.split(".")?.pop()?.toLowerCase() || "";
    if (!ALLOWED_IMAGE_EXTENSIONS.includes(fileExtension)) {
      toast({
        description: i18next.t("validations.validFormatTypeUpload", {
          format: ALLOWED_IMAGE_EXTENSIONS.join(", "),
        }),
        status: "error",
      });
      return;
    }

    if (file.size > MAX_SIZE_IMAGE) {
      toast({
        description: i18next.t("validations.validSizeUpload", {
          size: `${MAX_SIZE_IMAGE / 1024 / 1000} MB`,
        }),
        status: "error",
      });
      return;
    }
    return file;
  });
  return filesAccepted;
};

export const convertImageFileToBase64 = (file: File): Promise<string> => {
  if (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string) || "");
      reader.onerror = (error) => reject(error);
    });
  }

  return new Promise(() => "");
};

export const dataUrlToFile = async (
  dataUrl: string,
  fileName: string,
): Promise<File> => {
  const res: Response = await fetch(dataUrl);
  const blob: Blob = await res.blob();
  return new File([blob], fileName, { type: "image/png" });
};
