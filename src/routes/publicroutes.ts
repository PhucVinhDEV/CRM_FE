import Home from "@/app/[lng]/page";
import Login from "@/app/[lng]/login/page"; // Nếu Login là một trang riêng
import { RouteType } from "../types/routes.type";

const publicRoutes: RouteType[] = [
  { path: "/", component: Home, exact: true },
  { path: "/login", component: Login, exact: true },
];

export default publicRoutes;
