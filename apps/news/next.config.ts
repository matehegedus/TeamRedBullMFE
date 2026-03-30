import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Tells next-intl where to find the server-side i18n config (i18n/request.ts)
const withNextIntl = createNextIntlPlugin();

/**
 * NEWS ZONE — Independent Next.js app (port 3002)
 */
const nextConfig: NextConfig = {
  transpilePackages: ["@redbull/shared"],
  basePath: "/news", // I live at /news
  assetPrefix:
    process.env.NODE_ENV === "production" ? undefined : "http://localhost:3002", // "fetch my JS from port 3002"
};

export default withNextIntl(nextConfig);
