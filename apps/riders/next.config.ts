import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@redbull/shared"],
  basePath: "/riders", // "I live at /riders"
  assetPrefix:
    process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001", // "fetch my JS from port 3001"
};

export default nextConfig;
