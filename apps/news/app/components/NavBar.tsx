"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

/**
 * Cross-zone navigation uses plain <a> tags.
 *
 * This zone has basePath="/news", so Next.js <Link href="/">
 * would resolve to /news — not the intended root.
 * Plain anchor tags bypass basePath and navigate to the correct zone.
 */
const navItems = [
  { label: "Home", href: "/" },
  { label: "Riders", href: "/riders" },
  { label: "News", href: "/news" },
];

export default function NavBar({ active }: { active?: string }) {
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

        <Box sx={{ display: "flex", gap: 0.5 }}>
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
        </Box>

        <Box sx={{ ml: "auto" }}>
          <Chip
            label="ZONE: NEWS"
            size="small"
            variant="outlined"
            color="secondary"
            sx={{ fontSize: "0.6rem", letterSpacing: "0.1em", opacity: 0.6 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
