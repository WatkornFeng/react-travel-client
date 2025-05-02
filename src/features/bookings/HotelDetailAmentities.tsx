import { Box, Typography } from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import HeadSection from "../../components/HeadSection";
import MainCard from "../../components/MainCard";
import CustomAccordion from "../../components/CustomAccordion";
import HotelDetailAmentityList from "./HotelDetailAmentityList";

import { IAmenities } from "../../services/apiHotel.type";

interface IProps {
  amenities: IAmenities[];
}
function HotelDetailAmentities({ amenities }: IProps) {
  const widthViewPort_1000 = useMatchViewPort(1000);
  const widthViewPort_700 = useMatchViewPort(700);

  return (
    <>
      <HeadSection>Amentities</HeadSection>

      {amenities ? (
        <MainCard elevation={2}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: widthViewPort_700
                ? "repeat(1,1fr)"
                : widthViewPort_1000
                ? "repeat(2,1fr)"
                : "repeat(3,1fr)",
            }}
          >
            {widthViewPort_700 ? (
              <CustomAccordion summary="Services" amenities={amenities} />
            ) : (
              <HotelDetailAmentityList amenities={amenities} />
            )}
          </Box>
        </MainCard>
      ) : (
        <MainCard
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontWeight="bold">
            This Property has no amenity.
          </Typography>
        </MainCard>
      )}
    </>
  );
}

export default HotelDetailAmentities;
