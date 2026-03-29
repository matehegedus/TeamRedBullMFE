import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { articles } from "../data/news";
import NormalArticle from "../components/NormalArticle";
import FeaturedArticle from "../components/FeaturedArticle";

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

        <FeaturedArticle article={featured} />
        <NormalArticle articles={rest} />
      </Container>
    </Box>
  );
}
