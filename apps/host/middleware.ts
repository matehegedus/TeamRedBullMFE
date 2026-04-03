import createMiddleware from "next-intl/middleware";
export default createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

// without this middleware would run on JS bundles and would inject /en (localization) before the path
// so we would not get the JS -> no hydration
export const config = {
  // Only run middleware on page routes, skip Next.js internals and static files
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
