import Home from "@/app/[lng]/page";
import Login from "@/app/[lng]/auth/login/page"; // Nếu Login là một trang riêng
import forgotPassword from "@/app/[lng]/auth/forgot/page";
import { RouteType } from "../types/routes.type";
import register from "@/app/[lng]/auth/register/page";
import { ROUTES } from "./routes";
const publicRoutes: RouteType[] = [
  { path: ROUTES.HOME, component: Home, exact: true },
  { path: ROUTES.AUTH.LOGIN, component: Login, exact: true },
  { path: ROUTES.AUTH.FORGOT, component: forgotPassword, exact: true }, // Sửa lại đường dẫn
  { path: ROUTES.AUTH.REGISTER, component: register, exact: true },
];

export default publicRoutes;
