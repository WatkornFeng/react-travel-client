import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button, Stack } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";

function ThankYouPage() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={4} textAlign="center">
        <Box textAlign="center">
          <CheckCircleOutlineIcon
            sx={{ fontSize: 100, color: "success.main" }}
          />
        </Box>

        <Typography variant="h4" fontWeight="bold">
          Thank You!
        </Typography>

        <Typography variant="h5" color="text.secondary">
          Your booking has been confirmed.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<HomeIcon />}
          sx={{ mt: 2, px: 4, py: 1.5, borderRadius: 3 }}
          onClick={() => navigate("/users/my-bookings", { replace: true })}
        >
          BACK TO MY BOOKING
        </Button>
      </Stack>
    </Container>
  );
}

export default ThankYouPage;
