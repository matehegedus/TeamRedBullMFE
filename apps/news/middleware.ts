import createMiddleware from "next-intl/middleware";
export default createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

export const config = {
  // Only run middleware on page routes, skip Next.js internals and static files
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
