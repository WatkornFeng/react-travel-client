import { Box } from "@mui/material";
import HotelCardReview from "./HotelCardReview";
import HotelCardPrice from "./HotelCardPrice";

interface Props {
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
}

function HotelCardContent({ ratingsAverage, ratingsQuantity, price }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        height: "50%",
      }}
    >
      <Box
        sx={{
          height: "50%",
          width: "50%",
          display: "flex",
          gap: "8px",
          alignItems: "flex-end",
        }}
      >
        <HotelCardReview
          ratingsAverage={ratingsAverage}
          ratingsQuantity={ratingsQuantity}
        />
      </Box>
      <Box
        sx={{
          height: "75%",
          width: "50%",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <HotelCardPrice price={price} />
      </Box>
    </Box>
  );
}

export default HotelCardContent;
