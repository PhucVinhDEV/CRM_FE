/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.greensoftware.asia", "localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.greensoftware.asia",
        port: "",
        pathname: "/weex/**",
      },
    ],
    loader: "custom",
    loaderFile: "./src/utils/loaderImage.ts",
  },
};

export default nextConfig;
