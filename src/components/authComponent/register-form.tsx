"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useForm } from "react-hook-form";
import { AuthService } from "@/service/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "@/components/ui/use-toast"; // Import useToast
import { AppDispatch } from "@/reduxs/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // ✅ Đúng cho App Router
import { ROUTES } from "@/routes/routes";
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  businessType: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export function RegisterForm({
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  // const { userInfo, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); // ✅ Đúng cho App Router
  const { toast } = useToast();
  // ✅ `useForm()` phải được khai báo ở đây, không được đặt trong `handleSubmit`
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema), // ✅ Kết nối `yup` vào `react-hook-form`
  });

  // ✅ Xử lý submit
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await AuthService.login(
        data.email,
        data.password,
        dispatch,
      );

      if (response?.success) {
        toast({
          title: "🎉 Login Successful",
          description: "Welcome back!",
          variant: "default",
        });
        router.replace(ROUTES.HOME);
      } else {
        toast({
          title: "❌ Login Failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "⚠️ Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Start your 30-day free trial.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Name</Label>
          <Input
            id="email"
            type="email"
            placeholder="John example"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Phone</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <span
              onClick={() => router.push(ROUTES.AUTH.FORGOT)}
              className="ml-auto cursor-pointer text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </span>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="*******"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="*******"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="businessType">Your Business Type</Label>
          <RadioGroup
            {...register("businessType")}
            defaultValue=""
            aria-labelledby="businessType"
          >
            <div className="flex items-center gap-4">
              <div>
                <RadioGroupItem
                  id="sole-proprietor"
                  value="sole-proprietor"
                  label="Sole Proprietor"
                />{" "}
                Customer
              </div>
              <div>
                <RadioGroupItem
                  id="business"
                  value="business"
                  label="Business"
                />{" "}
                Company
              </div>
            </div>
          </RadioGroup>
          {errors.businessType && (
            <p className="text-sm text-red-500">
              {errors.businessType.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background relative z-10 px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full transition-colors hover:border-gray-400 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
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
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        You have an account?{" "}
        <span
          onClick={() => router.push(ROUTES.AUTH.LOGIN)}
          className="cursor-pointer underline underline-offset-4"
        >
          Sign up
        </span>
      </div>
    </form>
  );
}
