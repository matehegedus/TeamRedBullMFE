import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import { articles } from "./data/news";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const [featured, ...rest] = articles;

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
            Zone: News · port 3002
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ textTransform: "uppercase", mb: 1 }}>
          Latest News
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 480 }}
        >
          Race results, team announcements, and stories from Team Red Bull.
        </Typography>

        <Divider sx={{ mb: 6, borderColor: "divider" }} />

        {/* Featured article */}
        <Card
          sx={{
            mb: 4,
            transition: "border-color 0.2s",
            "&:hover": { borderColor: "primary.main" },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Chip
                label="Featured"
                color="primary"
                size="small"
                sx={{ fontSize: "0.6rem", letterSpacing: "0.1em" }}
              />
              <Chip
                label={featured.category}
                variant="outlined"
                size="small"
                sx={{ fontSize: "0.6rem", letterSpacing: "0.08em" }}
              />
            </Box>
            <Typography
              variant="h3"
              sx={{ textTransform: "uppercase", mb: 2, lineHeight: 1.2 }}
            >
              {featured.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              {featured.summary}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.9 }}
            >
              {featured.content}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 3, opacity: 0.6 }}
            >
              {formatDate(featured.date)}
            </Typography>
          </CardContent>
        </Card>

        {/* Remaining articles */}
        <Grid2 container spacing={2}>
          {rest.map((article) => (
            <Grid2 key={article.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chip
                    label={article.category}
                    variant="outlined"
                    size="small"
                    sx={{
                      mb: 2,
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      alignSelf: "flex-start",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: "uppercase",
                      mb: 1.5,
                      lineHeight: 1.3,
                      fontSize: "0.9rem",
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7, flexGrow: 1 }}
                  >
                    {article.summary}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block", mt: 2, opacity: 0.5 }}
                  >
                    {formatDate(article.date)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
