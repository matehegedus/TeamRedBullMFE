import { NavBar, ThemeRegistry } from "@redbull/shared";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

// for SEO, previews etc..
export const metadata: Metadata = {
  title: "Team Red Bull Cycling",
  description: "Official website of Team Red Bull — professional cycling team.",
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
            <NavBar active="Home" />
            {children}
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
