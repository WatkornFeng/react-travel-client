import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Box, Container } from "@mui/material";

import { useGetHotelByIdQuery } from "../services/apiHotelSlice";

import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPage";
import Spinner from "../components/Spinner";
import HotelDetailAmentities from "../features/bookings/HotelDetailAmentities";
import HotelDetailDescription from "../features/bookings/HotelDetailDescription";
import HotelDetailTab from "../features/bookings/HotelDetailTab";
import HotelNotFound from "../features/bookings/HotelNotFound";
import HotelDetailReviews from "../features/reviews/HotelDetailReviews";

//****valid MongoDB ObjectID which is always:Exactly 24 characters,Only hex characters (0-9, a-f)
function extractMongoIdFromPath(pathname: string): string | null {
  const slug = pathname.split("/").pop();
  const match = slug?.match(/[a-f\d]{24}$/);
  return match?.[0] || null;
}
function HotelDetail() {
  const navigate = useNavigate();
  const { placeParam, nameHotel } = useParams();
  const { pathname } = useLocation();
  const mongoID = extractMongoIdFromPath(pathname);

  const {
    data: getHotel,
    error: getHotelError,
    isFetching,
  } = useGetHotelByIdQuery(
    { mongoID: mongoID!, placeParam: placeParam! },
    {
      skip: !mongoID || !placeParam, // Only fetch if both values are valid
    }
  );

  const hotel = getHotel?.data ? getHotel.data.hotel : null;

  const [elementId, setElementId] = useState("overview");
  const [refOverview, inViewOverview] = useInView({
    threshold: 0.2,
  });

  const [refAmenities, inViewAmenities] = useInView({
    threshold: 0.2,
  });

  const [refReviews, inViewReviews] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewOverview) {
      setElementId("overview");
      return;
    }

    if (inViewAmenities) {
      setElementId("amenities");
      return;
    }
    if (inViewReviews) {
      setElementId("reviews");
      return;
    }
  }, [inViewOverview, inViewAmenities, inViewReviews]);
  if (!placeParam || !nameHotel) navigate(-1);

  return (
    <>
      <Container>
        {isFetching && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <Spinner size="2rem" color="primary.main" />
          </Box>
        )}
        {getHotelError && (
          <ErrorPage
            message="Please try again later."
            textBtn="TRY AGAIN"
            backbtn={true}
          />
        )}
        {!isFetching && !hotel && !getHotelError && <HotelNotFound />}
        {hotel && (
          <>
            <HotelDetailTab
              elementId={elementId}
              setElementId={setElementId}
              hotelId={hotel._id}
            />
            <Box
              component="section"
              id="overview"
              ref={refOverview}
              sx={{ mb: 2 }}
            >
              <HotelDetailDescription
                hotelId={hotel._id}
                ownerProperty={hotel.ownerProperty}
                name={hotel.name}
                images={hotel.images}
                ratingsAverage={hotel.ratingsAverage}
                ratingsQuantity={hotel.ratingsQuantity}
                description={hotel.description}
                location={hotel.location}
                bedsQuantity={hotel.bedsQuantity}
                guestsQuantity={hotel.guestsQuantity}
              />
            </Box>
            <Box
              component="section"
              id="amenities"
              ref={refAmenities}
              sx={{ mb: 2, pt: "50px" }}
            >
              <HotelDetailAmentities amenities={hotel.amenities} />
            </Box>

            <Box
              component="section"
              id="reviews"
              ref={refReviews}
              sx={{ mb: 2, pt: "50px" }}
            >
              <HotelDetailReviews reviews={hotel.reviews} />
            </Box>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default HotelDetail;
