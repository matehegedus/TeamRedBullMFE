import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { riders } from "../data/riders";
import QuickStat from "../components/QuickStat";
import { getTranslations, setRequestLocale } from "next-intl/server";

// next.js calls this at build time to resolve the dynamic [locale] folder and receives ["en", "de"]
// by default next.js doesnt know what [locale] can be, it can be anything.
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function RidersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Riders");
  return (
    <Box
      sx={{
        pt: 12,
        pb: 8,
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: "0.3em", fontSize: "0.7rem" }}
          >
            Zone: Riders · port 3001
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ textTransform: "uppercase", mb: 1 }}>
          {t("ourRiders")}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 480 }}
        >
          {t("ourRidersDesc")}
        </Typography>

        <Divider sx={{ mb: 6, borderColor: "divider" }} />

        <Grid2 container spacing={2}>
          {riders.map((rider) => (
            <Grid2 key={rider.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                {/* basePath="/riders" — so Link href="/alex-stenmark" → /riders/alex-stenmark */}
                <CardActionArea
                  component={Link}
                  href={`/${rider.id}`}
                  sx={{ height: "100%" }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Role chip */}
                    <Chip
                      label={rider.role}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{
                        mb: 2,
                        fontSize: "0.6rem",
                        letterSpacing: "0.08em",
                      }}
                    />

                    {/* Name */}
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 0.5,
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                      }}
                    >
                      {rider.name}
                    </Typography>

                    {/* Nationality */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {rider.nationalityFlag} {rider.nationality} · Age{" "}
                      {rider.age}
                    </Typography>

                    <Divider sx={{ mb: 2, borderColor: "divider" }} />

                    {/* Quick stats */}
                    <Box sx={{ display: "flex", gap: 3 }}>
                      <QuickStat value={rider.stats.stageWins} label="Stages" />
                      <QuickStat
                        value={rider.stats.classicWins}
                        label="Classics"
                      />
                      <QuickStat
                        value={rider.stats.grandTourWins}
                        label="GT Wins"
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
