import { Box, Stack, Typography } from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";

import HeadSection from "../../components/HeadSection";
import MainCard from "../../components/MainCard";
import ReviewByGuest from "./ReviewByGuest";
import ReviewSummary from "./ReviewSummary";

import { IReview } from "../../services/apiHotel.type";

interface IProps {
  reviews: IReview[];
}

function HotelDetailReviews({ reviews }: IProps) {
  const widthViewPort_900 = useMatchViewPort(900);
  return (
    <>
      <HeadSection>Reviews</HeadSection>
      {reviews.length === 0 ? (
        <MainCard
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 500,
          }}
        >
          <Typography fontWeight="bold">
            This Property has no reviews.
          </Typography>
        </MainCard>
      ) : (
        <MainCard elevation={2}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: widthViewPort_900 ? "1fr" : "0.4fr 0.6fr",
            }}
          >
            <ReviewSummary />
            <Stack sx={{ p: "0.7rem" }} spacing={1}>
              <ReviewByGuest />
              <ReviewByGuest />
              <ReviewByGuest />
              <ReviewByGuest />
              <ReviewByGuest />
            </Stack>
          </Box>
        </MainCard>
      )}
    </>
  );
}

export default HotelDetailReviews;
