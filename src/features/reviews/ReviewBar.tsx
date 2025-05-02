import { Box, LinearProgress, Typography } from "@mui/material";

function ReviewBar() {
  return (
    <Box sx={{ width: "100%", pt: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "0.5rem",
        }}
      >
        <Typography fontSize="1rem" fontWeight="bold">
          10 - Excellent
        </Typography>
        <Typography fontSize="1rem" fontWeight="bold">
          23
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={10}
        sx={{
          height: "1rem",
          borderRadius: "20px",
        }}
      />
    </Box>
  );
}

export default ReviewBar;
