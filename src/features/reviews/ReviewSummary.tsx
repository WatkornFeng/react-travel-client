import { Box, Stack, Typography } from "@mui/material";

import ReviewBar from "./ReviewBar";

function ReviewSummary() {
  return (
    <Box sx={{ p: "0.7rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography fontSize="2rem" fontWeight="bold" sx={{ mr: "1rem" }}>
          9.6
        </Typography>
        <Stack spacing={0.1}>
          <Typography fontSize="1rem" fontWeight="bold">
            Exceptional
          </Typography>
          <Typography fontSize="0.8rem">29 reviews</Typography>
        </Stack>
      </Box>
      <ReviewBar />
      <ReviewBar />
      <ReviewBar />
      <ReviewBar />
      <ReviewBar />
    </Box>
  );
}

export default ReviewSummary;
