import { Box, Typography } from "@mui/material";

interface Props {
  price: number;
}
function HotelCardPrice({ price }: Props) {
  return (
    <>
      <Box sx={{ fontSize: "0.5rem" }}>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          ${price}
        </Typography>
      </Box>
    </>
  );
}

export default HotelCardPrice;
