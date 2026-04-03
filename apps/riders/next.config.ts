import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Tells next-intl where to find the server-side i18n config (i18n/request.ts)
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  transpilePackages: ["@redbull/shared"],
  basePath: "/riders", // "I live at /riders"
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? undefined
      : "http://localhost:3001/riders", // "fetch my JS from port 3001"
};

export default withNextIntl(nextConfig);
