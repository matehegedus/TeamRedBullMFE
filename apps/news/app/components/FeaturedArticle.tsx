import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { NewsArticle } from "../data/news";
import { formatDate } from "../utils/formats";

const FeaturedArticle = ({ article }: { article: NewsArticle }) => {
  return (
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
            label={article.category}
            variant="outlined"
            size="small"
            sx={{ fontSize: "0.6rem", letterSpacing: "0.08em" }}
          />
        </Box>
        <Typography
          variant="h3"
          sx={{ textTransform: "uppercase", mb: 2, lineHeight: 1.2 }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.8 }}
        >
          {article.summary}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.9 }}
        >
          {article.content}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 3, opacity: 0.6 }}
        >
          {formatDate(article.date)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturedArticle;
