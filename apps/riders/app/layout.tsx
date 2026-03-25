import type { Metadata } from "next";
import { NavBar, ThemeRegistry } from "@redbull/shared";

export const metadata: Metadata = {
  title: "Riders — Team Red Bull Cycling",
  description: "Meet the riders of Team Red Bull professional cycling team.",
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
          <NavBar active="Riders" />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
