import type { NextConfig } from "next";

/**
 * HOST ZONE — Multi-Zone entry point (port 3000) this is the shell
 *
 * This app serves "/" (home) and proxies /riders/* → port 3001
 * and /news → port 3002 via Next.js rewrites. (it is like a reverse proxy)
 *
 * In production, an upstream reverse-proxy (e.g. Nginx / Vercel)
 * would handle this routing instead.
 */
const nextConfig: NextConfig = {
  transpilePackages: ["@redbull/shared"],
  // no basepath + assetPrefix needed since it is the origin and owns the root /
  async rewrites() {
    return [
      {
        source: "/:locale/riders",
        destination: "http://localhost:3001/riders/:locale",
      },
      {
        source: "/:locale/riders/:path*",
        destination: "http://localhost:3001/riders/:locale/:path*",
      },
      {
        source: "/:locale/news",
        destination: "http://localhost:3002/news/:locale",
      },
      {
        source: "/:locale/news/:path*",
        destination: "http://localhost:3002/news/:locale/:path*",
      },
    ];
  },
};

export default nextConfig;
