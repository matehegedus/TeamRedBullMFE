import type { Metadata } from "next";
import { NavBar, ThemeRegistry } from "@redbull/shared";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "News — Team Red Bull Cycling",
  description: "Latest news from Team Red Bull professional cycling team.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeRegistry>
            <NavBar active="News" />
            {children}
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
