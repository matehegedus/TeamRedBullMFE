import { getRequestConfig } from "next-intl/server";

// reads the i18n file depending on the locale
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "en";

  return {
    locale,
    messages: (await import(`../app/messages/${locale}.json`)).default,
  };
});
