import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteButton from "../../components/FavoriteButton";

interface IProps {
  hotelId: string;
}

function HotelDetailNavigate({ hotelId }: IProps) {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            onClick={() => navigate(-1)}
            sx={{
              borderBottom: "5px solid white",
              borderRadius: 0,
              "&:hover": {
                borderBottom: "5px solid black",
              },
            }}
          >
            <Stack spacing={2} direction="row">
              <KeyboardBackspaceIcon />
              <Typography fontWeight="bold" color="primary.dark">
                See all properties
              </Typography>
            </Stack>
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <FavoriteButton position="relative" hotelId={hotelId} />
          <Typography fontWeight="bold">Save</Typography>
        </Box>
      </Box>
    </>
  );
}

export default HotelDetailNavigate;
