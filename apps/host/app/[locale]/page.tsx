import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const zones = [
    {
      label: "Riders",
      href: "/riders",
      description: t("ridersDescription"),
      zone: "ZONE: RIDERS  ·  port 3001",
    },
    {
      label: "News",
      href: "/news",
      description: t("newsDescription"),
      zone: "ZONE: NEWS  ·  port 3002",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: 8,
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative red stripe */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          bgcolor: "primary.main",
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: "0.3em", fontSize: "0.7rem" }}
          >
            {t("badge")}
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "5rem" },
            lineHeight: 1,
            mb: 3,
            textTransform: "uppercase",
          }}
        >
          Team
          <br />
          <Box component="span" color="primary.main">
            Red Bull
          </Box>
          <br />
          Cycling
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 480, mb: 6, fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          {t("description")}
        </Typography>

        <Divider sx={{ mb: 6, borderColor: "divider", maxWidth: 480 }} />

        {/* Zone cards */}
        <Grid2 container spacing={2} sx={{ maxWidth: 700 }}>
          {zones.map((zone) => (
            <Grid2 key={zone.label} size={{ xs: 12, sm: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <CardActionArea href={zone.href} sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        display: "block",
                        mb: 1,
                      }}
                    >
                      {zone.zone}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ mb: 1, textTransform: "uppercase" }}
                    >
                      {zone.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {zone.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Architecture note */}
        <Box
          sx={{
            mt: 8,
            p: 3,
            border: "1px solid rgba(255,255,255,0.08)",
            maxWidth: 700,
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="overline"
            color="primary"
            sx={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              display: "block",
              mb: 2,
            }}
          >
            {t("archTitle")}
          </Typography>
          {[
            {
              zone: "HOST",
              port: "3000",
              path: "/",
              note: t("hostNote"),
            },
            {
              zone: "RIDERS",
              port: "3001",
              path: "/riders/*",
              note: t("zoneNote"),
            },
            {
              zone: "NEWS",
              port: "3002",
              path: "/news/*",
              note: t("zoneNote"),
            },
          ].map((row) => (
            <Box
              key={row.zone}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                py: 0.75,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                "&:last-child": { borderBottom: "none" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  color: "primary.main",
                  minWidth: 60,
                  fontWeight: 700,
                }}
              >
                {row.zone}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  color: "text.secondary",
                  minWidth: 50,
                }}
              >
                :{row.port}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  color: "text.primary",
                  minWidth: 100,
                }}
              >
                {row.path}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", color: "text.secondary" }}>
                {row.note}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
