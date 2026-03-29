import type { Metadata } from "next";
import { NavBar, ThemeRegistry } from "@redbull/shared";

export const metadata: Metadata = {
  title: "News — Team Red Bull Cycling",
  description: "Latest news from Team Red Bull professional cycling team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NavBar active="News" />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
