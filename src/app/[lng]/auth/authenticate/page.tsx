"use client";

import { useEffect } from "react";
import useRouterWithLng from "@/hooks/useRouterWithLng";
import { ROUTES } from "@/routes/routes";
import Loading from "@/components/ui/Loading";
import { useParams } from "next/navigation";
import { AuthService } from "@/service/authService";

const Authenticate = () => {
  const router = useRouterWithLng();
  const { lng } = useParams();
  const callbackUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI ?? "/auth/callback";
  const RedirectURL = `${process.env.NEXT_PUBLIC_STATIC_URL}${lng}${callbackUrl}`;
  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);

      const code = urlParams.get("code");
      const error = urlParams.get("error");

      if (error) {
        console.error("Authorization Error:", error);
        router(ROUTES.AUTH.LOGIN); // Quay lại trang login nếu có lỗi
        return;
      }

      if (code) {
        try {
          // Gửi mã `code` lên backend để đổi lấy access token
          const response = await AuthService.outboundGoogle(code, RedirectURL);

          if (!response.message) {
            throw new Error("Failed to exchange code for token");
          }

          router(ROUTES.HOME, undefined, true);
        } catch (err) {
          console.error("Error exchanging code:", err);
          router(ROUTES.AUTH.LOGIN);
        }
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default Authenticate;
