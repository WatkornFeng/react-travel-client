import { useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import useMatchViewPort from "../../hooks/useMatchViewPort";

import StarRating from "../../components/StarRating";
import HeadSection from "../../components/HeadSection";
import ImageSilder from "../../components/ImageSilder";
import BouncingDotsLoader from "../../components/BouncingDotsLoader";
import ErrorMessage from "../../components/ErrorMessage";
import MainCard from "../../components/MainCard";
import HotelDetailNavigate from "./HotelDetailNavigate";
import HotelRateReview from "./HotelCardReview";
import HotelDetailPicture from "./HotelDetailPicture";
import HotelDetailMap from "./HotelDetailMap";
import HotelDetailHost from "./HotelDetailHost";

import { getLocationFromLatLng } from "../../services/getLocation";
import {
  IHotelImages,
  ILocation,
  IOwnerProperty,
} from "../../services/apiHotel.type";

interface IProps {
  description: string;
}
const overviewStyle = {
  padding: "1rem",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
};
const bottomBorderStyled = {
  boxShadow: "0px 10px 3px -10px grey",
  paddingBottom: "16px",
};

interface IProps {
  hotelId: string;
  images: IHotelImages[];
  ratingsAverage: number;
  ratingsQuantity: number;
  description: string;
  name: string;
  location: ILocation;
  ownerProperty: IOwnerProperty;
  bedsQuantity: number;
  guestsQuantity: number;
}
function HotelDetailDescription({
  hotelId,
  name,
  images,
  ratingsAverage,
  ratingsQuantity,
  description,
  location,
  ownerProperty,
  bedsQuantity,
  guestsQuantity,
}: IProps) {
  const widthViewPort_1000 = useMatchViewPort(1000);

  const [locString, setLocString] = useState<string | null>(null);
  const [isLoadLocStr, setIsloadLocStr] = useState<boolean>(false);
  const [isErrorLoadLocStr, setIsErrorLoadLocStr] = useState<boolean>(false);

  const guests = guestsQuantity > 1 ? "guests" : "guest";
  const beds = bedsQuantity > 1 ? "beds" : "bed";
  useEffect(() => {
    const covertLocation = async () => {
      try {
        setIsloadLocStr(true);
        const [lng, lat] = location.coordinates;
        const { display_name } = await getLocationFromLatLng(lat, lng);

        setLocString(display_name);
        setIsloadLocStr(false);
      } catch (err) {
        setIsloadLocStr(false);
        setIsErrorLoadLocStr(false);
      }
    };
    covertLocation();
  }, [location.coordinates]);
  return (
    <Stack>
      <Paper elevation={10}>
        <HotelDetailNavigate hotelId={hotelId} />
        {widthViewPort_1000 ? (
          <ImageSilder images={images} />
        ) : (
          <HotelDetailPicture images={images} />
        )}
      </Paper>
      <MainCard elevation={2} sx={overviewStyle}>
        <Stack
          spacing={2}
          direction={widthViewPort_1000 ? "column" : "row"}
          justifyContent={"space-between"}
        >
          <Stack spacing={2} width={widthViewPort_1000 ? "100%" : "50%"}>
            <HeadSection>{name}</HeadSection>

            <Box>
              <StarRating stars={3} size="1.4rem" color="primary.dark" />
            </Box>
            <Box sx={bottomBorderStyled}>
              <HotelRateReview
                ratingsAverage={ratingsAverage}
                ratingsQuantity={ratingsQuantity}
              />
            </Box>
            <Box sx={bottomBorderStyled}>
              <Stack spacing={1} direction="row">
                <Typography>
                  {guestsQuantity} {guests}
                </Typography>
                <Typography>&middot;</Typography>
                <Typography>
                  {bedsQuantity} {beds}
                </Typography>
              </Stack>
            </Box>
            <Box sx={bottomBorderStyled}>
              <HotelDetailHost ownerProperty={ownerProperty} />
            </Box>
            <Typography fontWeight="bold">{description}</Typography>
          </Stack>
          <Box width={widthViewPort_1000 ? "100%" : "50%"} p={"0.5rem"}>
            <MainCard
              elevation={2}
              sx={{ overflow: "hidden", marginBottom: "1rem" }}
            >
              <HotelDetailMap
                lat={location.coordinates[1]}
                lng={location.coordinates[0]}
              />
            </MainCard>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {isLoadLocStr && <BouncingDotsLoader size="small" />}
              {isErrorLoadLocStr && (
                <ErrorMessage text="Cannot load location" size="1rem" />
              )}
              {locString && (
                <>
                  <PlaceIcon color="primary" />
                  <Typography fontWeight={500}>{locString}</Typography>
                </>
              )}
            </Box>
          </Box>
        </Stack>
      </MainCard>
    </Stack>
  );
}

export default HotelDetailDescription;
