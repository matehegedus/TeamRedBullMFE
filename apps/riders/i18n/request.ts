import { getRequestConfig } from "next-intl/server";

// This file is picked up by next-intl to load messages on the server.
// It reads the locale that was set by setRequestLocale() in the layout.
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "en";

  return {
    locale,
    messages: (await import(`../app/messages/${locale}.json`)).default,
  };
});
