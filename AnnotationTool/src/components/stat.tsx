import { Box, Paper, Typography } from "@mui/material";

const Stats: React.FC = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
      gap={3}
      mb={3}
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" fontWeight={700}>
          24
        </Typography>
        <Typography>Total Projects</Typography>
        <Typography variant="body2" color="text.secondary">
          18 Active | 6 Completed
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" fontWeight={700}>
          48
        </Typography>
        <Typography>Total Users</Typography>
        <Typography variant="body2" color="text.secondary">
          5 Uploaders | 38 Annotators
        </Typography>
      </Paper>
    </Box>
  );
};

export default Stats;
