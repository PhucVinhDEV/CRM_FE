"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { z } from "zod";
import { ROUTES } from "@/routes/routes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/Sheet";
import { InputOTPForm } from "../ui/FormUI/InputOTPform";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useRouterWithLng from "@/hooks/useRouterWithLng";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { AuthService } from "@/service/authService";
import { IRequestOTPAndRegister } from "@/types/user";

// Schema xác thực cho form đăng ký
const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm({}: React.ComponentPropsWithoutRef<"form">) {
  const router = useRouterWithLng();
  const { toast } = useToast();
  // State quản lý bước đăng ký và OTP
  const [otpSheetOpen, setOtpSheetOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [registrationData, setRegistrationData] = useState<Omit<
    IRequestOTPAndRegister,
    "otp"
  > | null>(null);
  const [resendTimeout, setResendTimeout] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Xử lý submit form đăng ký
  const onRegisterSubmit = async (data: RegisterFormValues) => {
    try {
      setIsSubmitting(true);

      // Lưu thông tin đăng ký để sử dụng sau, phù hợp với interface
      setRegistrationData({
        email: data.email,
        fullName: data.name,
        password: data.password,
      });
      setUserEmail(data.email);

      // Gọi API gửi OTP
      const response = await AuthService.sendOTP(data.email);

      if (response?.success) {
        setOtpSheetOpen(true);
        startResendCountdown();

        toast({
          title: "Verification Code Sent",
          description: "Please check your email for the verification code.",
        });
      } else {
        toast({
          title: "Failed to Send Code",
          description: response?.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Xử lý xác thực OTP
  const onOtpSubmit = async (data: { pin: string }) => {
    if (!registrationData) return;

    try {
      setIsSubmitting(true);

      const requestData: IRequestOTPAndRegister = {
        ...registrationData,
        otp: data.pin, // Chuyển đổi từ pin sang otp theo interface
      };
      // Gọi API xác thực OTP và đăng ký tài khoản
      const response = await AuthService.verifyOTPAndRegister(
        requestData, // Trong InputOTPForm field là "pin"
      );

      if (response?.success) {
        setOtpSheetOpen(false);

        toast({
          title: "Registration Successful",
          description: "Your account has been created successfully!",
        });

        // Chuyển hướng đến trang đăng nhập
        router(ROUTES.HOME, undefined, true);
      } else {
        toast({
          title: "Verification Failed",
          description: response?.message || "Invalid verification code.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Xử lý gửi lại OTP
  const handleResendOTP = async () => {
    if (resendTimeout > 0 || !userEmail) return;

    try {
      setIsSubmitting(true);
      const response = await AuthService.sendOTP(userEmail);

      if (response?.success) {
        startResendCountdown();

        toast({
          title: "Verification Code Resent",
          description: "Please check your email for the new verification code.",
        });
      } else {
        toast({
          title: "Failed to Resend Code",
          description: response?.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Thiết lập đếm ngược cho nút "Gửi lại mã"
  const startResendCountdown = () => {
    setResendTimeout(120); // 60 giây

    const timer = setInterval(() => {
      setResendTimeout((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <>
      <Form {...form}>
        <form
          className="mx-auto flex max-w-md flex-col gap-5"
          onSubmit={form.handleSubmit(onRegisterSubmit)}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Start your 30-day free trial.
            </p>
          </div>
          <div className="grid gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Sign Up"}
            </Button>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background relative z-10 px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full transition-colors hover:border-gray-400 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
              onClick={() => AuthService.initiateLogin(lng)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-1.5"
              >
                <path
                  d="M21.35 11.1H12v2.8h5.35c-.4 2-2.2 3.3-4.35 3.3-2.55 0-4.65-2.1-4.65-4.65S10.45 7.9 13 7.9c1.15 0 2.2.4 3 .95l2.1-2.1C16.75 5.55 14.95 5 13 5 8.55 5 5 8.55 5 13s3.55 8 8 8c4 0 7.6-2.8 7.6-8 0-.6-.1-1.2-.25-1.9z"
                  fill="#4285F4"
                />
                <path
                  d="M6.15 9.3l2.3 1.7C9.2 9.05 10.45 8.5 12 8.5c1.15 0 2.2.4 3 .95l2.1-2.1C16.75 5.55 14.95 5 13 5c-2.85 0-5.35 1.65-6.85 4.3z"
                  fill="#34A853"
                />
                <path
                  d="M12 21c2.5 0 4.6-.85 6.15-2.25l-2.3-1.75c-.85.6-1.85.95-3 .95-1.8 0-3.35-.95-4.2-2.35L6.15 18C7.65 20.4 9.85 21 12 21z"
                  fill="#FBBC05"
                />
                <path
                  d="M21.35 11.1H12v2.8h5.35c-.2 1-1 1.95-1.95 2.5l2.35 1.8c1.65-1.5 2.7-3.55 2.7-6.3 0-.6-.1-1.2-.25-1.9z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => router(ROUTES.AUTH.LOGIN)}
              className="cursor-pointer underline underline-offset-4"
            >
              Log in
            </span>
          </div>
        </form>
      </Form>

      {/* OTP Verification Sheet */}
      <Sheet
        open={otpSheetOpen}
        onOpenChange={(open) => {
          if (!open && !isSubmitting) {
            setOtpSheetOpen(false);
          } else {
            setOtpSheetOpen(open);
          }
        }}
      >
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Verify Your Email</SheetTitle>
            <SheetDescription>
              Enter the 6-digit code sent to {userEmail}
            </SheetDescription>
          </SheetHeader>

          <div className="py-6">
            {/* Sử dụng InputOTPForm component có sẵn */}
            <div className="space-y-6">
              <InputOTPForm onSubmit={onOtpSubmit} />

              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline"
                  onClick={handleResendOTP}
                  disabled={resendTimeout > 0 || isSubmitting}
                >
                  {resendTimeout > 0
                    ? `Resend code in ${resendTimeout}s`
                    : "Didn't receive a code? Resend"}
                </button>
              </div>

              <div className="mt-2 text-center">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:underline"
                  onClick={() => setOtpSheetOpen(false)}
                >
                  Cancel and start over
                </button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
