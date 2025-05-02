import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

function HotelNotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "#f9f9f9",
        px: 2,
      }}
    >
      <SentimentDissatisfiedIcon
        sx={{ fontSize: 80, color: "#9e9e9e", mb: 2 }}
      />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        We couldn't find your hotel
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Please check the URL or try searching again.
      </Typography>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back to Hotel Listings
      </Button>
    </Box>
  );
}

export default HotelNotFound;
