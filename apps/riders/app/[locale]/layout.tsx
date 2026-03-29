import type { Metadata } from "next";
import { NavBar, ThemeRegistry } from "@redbull/shared";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Riders — Team Red Bull Cycling",
  description: "Meet the riders of Team Red Bull professional cycling team.",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Required for next-intl static rendering support
  setRequestLocale(locale);

  // Load the messages for this locale — passed to the client provider
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        {/* NextIntlClientProvider makes translations available to Client Components */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeRegistry>
            <NavBar active="Riders" />
            {children}
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
