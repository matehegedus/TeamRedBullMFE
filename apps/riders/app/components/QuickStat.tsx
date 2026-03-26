import { Box, Typography } from "@mui/material";

const QuickStat = ({ value, label }: { value: number; label: string }) => {
  return (
    <Box>
      <Typography variant="h6" color="primary" sx={{ lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
};

export default QuickStat;
