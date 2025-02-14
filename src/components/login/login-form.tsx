"use client";

import { cn } from "@/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useState } from "react";
import { AuthService } from "@/service/authService";

import { setUserProps } from "@/reduxs/UserSlice";
import { IUserInfo } from "@/types/user";
import { useToast } from "@/components/ui/use-toast"; // Import useToast
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/reduxs/store";
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const dispatch = useDispatch<AppDispatch>();
  // const { userInfo, loading } = useSelector((state: RootState) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // setError(""); // Clear previous error
    try {
      const response = await AuthService.login(email, password);
      // Fake example response matching IUserInfo
      console.log("response", response);
      const userData: IUserInfo = {
        id: "123123", // Fake ID
        email: email, // Use current email
      };
      if (response.success == true) {
        // Fake example response for setUserProps
        dispatch(setUserProps({ userInfo: userData, loading: false }));
        toast({
          title: "Login Successful",
          description: response.message,
          status: "success",
        });
        console.log("Login success");
      } else {
        toast({
          title: "Login Failed",
          description: response.message,
          status: "error",
        });
        // setError("Invalid email or password");
      }
    } catch (err: unknown) {
      console.error("Login failed:", err);

      let errorMessage = "Something went wrong. Please try again.";

      if (err instanceof Error) {
        errorMessage = err.message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
      });
    }
  };
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-balance text-sm">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
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
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
