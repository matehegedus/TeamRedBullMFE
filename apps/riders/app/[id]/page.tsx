import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";
import NavBar from "../components/NavBar";
import { getRiderById, riders } from "../data/riders";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Static generation for all known rider IDs
export function generateStaticParams() {
  return riders.map((r: { id: string }) => ({ id: r.id }));
}

export default async function RiderDetailPage({ params }: PageProps) {
  const { id } = await params;
  const rider = getRiderById(id);

  if (!rider) notFound();

  const statItems = [
    { value: rider.stats.grandTourWins, label: "Grand Tour Wins" },
    { value: rider.stats.classicWins, label: "Monument Wins" },
    { value: rider.stats.stageWins, label: "Stage Wins" },
    { value: rider.stats.yearsWithTeam, label: "Years with Team" },
  ];

  return (
    <>
      <NavBar active="Riders" />

      <Box
        sx={{
          pt: 12,
          pb: 8,
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          {/* Back link — uses basePath-aware Link */}
          <Button
            component={Link}
            href="/"
            color="inherit"
            size="small"
            sx={{
              mb: 4,
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              opacity: 0.6,
            }}
          >
            ← Back to Riders
          </Button>

          <Grid2 container spacing={6}>
            {/* Left: primary info */}
            <Grid2 size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                color="primary"
                sx={{
                  letterSpacing: "0.3em",
                  fontSize: "0.7rem",
                  display: "block",
                  mb: 1,
                }}
              >
                {rider.nationalityFlag} {rider.nationality}
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  textTransform: "uppercase",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                {rider.name}
              </Typography>

              <Chip
                label={rider.role}
                color="primary"
                sx={{ mb: 3, letterSpacing: "0.08em", fontSize: "0.75rem" }}
              />

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.9, mb: 4, maxWidth: 520 }}
              >
                {rider.bio}
              </Typography>

              <Divider sx={{ borderColor: "divider", mb: 4 }} />

              <Typography variant="body2" color="text.secondary">
                Age:{" "}
                <Box component="span" color="text.primary">
                  {rider.age}
                </Box>
                &nbsp;&nbsp;·&nbsp;&nbsp; Nationality:{" "}
                <Box component="span" color="text.primary">
                  {rider.nationality}
                </Box>
              </Typography>
            </Grid2>

            {/* Right: stats */}
            <Grid2 size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  bgcolor: "background.paper",
                  p: 4,
                }}
              >
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{
                    letterSpacing: "0.2em",
                    fontSize: "0.65rem",
                    display: "block",
                    mb: 3,
                  }}
                >
                  Career Stats
                </Typography>

                <Grid2 container spacing={0}>
                  {statItems.map((stat, i) => (
                    <Grid2 key={stat.label} size={6}>
                      <Box
                        sx={{
                          p: 2,
                          borderRight:
                            i % 2 === 0
                              ? "1px solid rgba(255,255,255,0.06)"
                              : "none",
                          borderBottom:
                            i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                        }}
                      >
                        <Typography
                          variant="h3"
                          color="primary"
                          sx={{ lineHeight: 1, mb: 0.5 }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: "0.65rem" }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
}
