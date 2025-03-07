import publicRoutes from "./publicroutes";
import privateRoutes from "./privateroutes";

const routes = [...publicRoutes, ...privateRoutes];

export default routes;
