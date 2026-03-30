import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { articles } from "../data/news";
import NormalArticle from "../components/NormalArticle";
import FeaturedArticle from "../components/FeaturedArticle";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NewsPage({ params }: PageProps) {
  const [featured, ...rest] = articles;

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("News");

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
          {t("latestNews")}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 480 }}
        >
          {t("description")}
        </Typography>

        <Divider sx={{ mb: 6, borderColor: "divider" }} />

        <FeaturedArticle article={featured} />
        <NormalArticle articles={rest} />
      </Container>
    </Box>
  );
}
