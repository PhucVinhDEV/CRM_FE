import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import StoreProvider from "@/providers/StoreProvider";
import { useRouter } from "next/router";

import { useEffect } from "react";
import routes from "@/routes";

import "../styles/index.scss";
const isAuthenticated = () => {
  return (
    typeof window !== "undefined" &&
    localStorage.getItem("access_token") !== null
  );
};
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const route = routes.find((r) => r.path === router.pathname);
    if (route?.protected && !isAuthenticated()) {
      router.push("/login");
    }
  }, [router.pathname]);
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
