import { Card, CardContent, Chip, Grid2, Typography } from "@mui/material";
import { NewsArticle } from "../data/news";
import { formatDate } from "../utils/formats";

const NormalArticle = ({ articles }: { articles: NewsArticle[] }) => {
  return (
    <Grid2 container spacing={2}>
      {articles.map((article) => (
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
  );
};

export default NormalArticle;
