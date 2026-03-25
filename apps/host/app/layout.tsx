import { NavBar, ThemeRegistry } from "@redbull/shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Red Bull Cycling",
  description: "Official website of Team Red Bull — professional cycling team.",
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
          <NavBar active="Home" />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
