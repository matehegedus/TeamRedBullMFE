import type { NextConfig } from "next";

/**
 * NEWS ZONE — Independent Next.js app (port 3002)
 */
const nextConfig: NextConfig = {
  basePath: "/news", // I live at /news
  assetPrefix:
    process.env.NODE_ENV === "production" ? undefined : "http://localhost:3002", // "fetch my JS from port 3002"
};

export default nextConfig;
