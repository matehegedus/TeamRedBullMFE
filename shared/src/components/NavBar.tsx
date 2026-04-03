"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MenuItem, Select, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type NavType = "Home" | "Riders" | "News";

const navItems: { label: NavType; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Riders", href: "/riders" },
  { label: "News", href: "/news" },
];

const languages = [
  { id: "en", label: "🇬🇧 EN" },
  { id: "de", label: "🇩🇪 DE" },
];

export default function NavBar({ active }: { active?: NavType }) {
  const pathname = usePathname();

  const segments = useMemo(() => pathname.split("/"), [pathname]);
  const currentLocale = segments[1] ?? "en";

  function handleLocaleChange(newLocale: string) {
    // Build the new path by swapping the locale segment
    const newSegments = [...segments];
    newSegments[1] = newLocale;
    const newPath = newSegments.join("/") || "/";
    // Full page navigation — required so server re-renders with new locale translations
    window.location.href = newPath;
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#0D0D0D",
        borderBottom: "2px solid #E30613",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 4 }}>
          <Box
            sx={{
              width: 8,
              height: 28,
              bgcolor: "primary.main",
              flexShrink: 0,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            Team Red Bull
          </Typography>
        </Box>

        <Stack flex={1} direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component="a"
                href={item.href}
                color={active === item.label ? "primary" : "inherit"}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  borderBottom:
                    active === item.label
                      ? "2px solid #E30613"
                      : "2px solid transparent",
                  borderRadius: 0,
                  pb: "2px",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <Select
            size="small"
            value={currentLocale}
            onChange={(e) => handleLocaleChange(e.target.value)}
          >
            {languages.map((lang) => (
              <MenuItem key={lang.id} value={lang.id}>
                {lang.label}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
