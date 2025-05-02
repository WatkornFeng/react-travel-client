import { styled } from "@mui/system";
import { Box, Stack, Typography } from "@mui/material";
import { numberToOneDecimal } from "../../utils/formatNumber";

const ScoreBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.dark}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  padding: "0.6rem",
  borderRadius: "10px",
}));

interface IProps {
  ratingsAverage: number;
  ratingsQuantity: number;
}

function HotelRateReview({ ratingsQuantity, ratingsAverage }: IProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <ScoreBox>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          {numberToOneDecimal(ratingsAverage)}
        </Typography>
      </ScoreBox>
      <Box>
        {ratingsQuantity === 0 && <p>&ensp;</p>}
        {ratingsQuantity !== 0 && (
          <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            cal culate rating
          </Typography>
        )}
        <Stack direction={"row"}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: "normal",
              paddingRight: "5px",
            }}
          >
            {ratingsQuantity}
          </Typography>

          <Typography sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>
            reviews
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default HotelRateReview;
