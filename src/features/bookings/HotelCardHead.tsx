import { Box, Stack, Typography, styled } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

import useMatchViewPort from "../../hooks/useMatchViewPort";
import StarRating from "../../components/StarRating";
import Icon from "../../components/Icon";

import { IAmenities, IPropertyType } from "../../services/apiHotel.type";

interface Props {
  stars: number;
  name: string;
  amenities: IAmenities[];
  location: string;
  propertyType: IPropertyType;
}
const FacilitiesBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.light}`,
  display: "flex",
  justifyContent: "center",
  paddingInline: "0.1rem",
  borderRadius: "5px",
}));

function HotelCardHead({
  stars,
  name,
  amenities,
  location,
  propertyType,
}: Props) {
  const widthViewPort_700 = useMatchViewPort(700);
  const widthViewPort_375 = useMatchViewPort(375);

  const sliceAmenities =
    amenities.length > 3 ? amenities.slice(0, 3) : amenities;

  return (
    <Stack
      spacing={2}
      sx={{
        height: "50%",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: "1rem",
          mb: "10px",
        }}
      >
        {name}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <Stack
          sx={{
            backgroundColor: "primary.light",
            flexDirection: "row",
            borderRadius: "5px",
            paddingInline: "0.1rem",
          }}
        >
          <Icon base64Url={propertyType.svg} size="1rem" />
          <Typography sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>
            {propertyType.name}
          </Typography>
        </Stack>
        <StarRating stars={stars} size="1rem" color="primary.dark" />
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 1,
        }}
      >
        <PlaceIcon sx={{ fontSize: "24px", color: "primary.dark" }} />
        <Typography
          display="inline-block"
          sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
        >
          {location}
        </Typography>
      </Box>

      <Stack direction="row" spacing={1}>
        {sliceAmenities.length !== 0
          ? sliceAmenities.map(({ name, svg }, index) => (
              <FacilitiesBox key={index}>
                {!widthViewPort_375 ? (
                  <Typography
                    fontWeight="normal"
                    marginRight="4px"
                    color="black"
                    fontSize="0.8rem"
                  >
                    {name}
                  </Typography>
                ) : (
                  <Icon base64Url={svg} size="1rem" />
                )}
                {widthViewPort_700 ? null : (
                  <Icon base64Url={svg} size="1rem" />
                )}
              </FacilitiesBox>
            ))
          : null}
      </Stack>
    </Stack>
  );
}

export default HotelCardHead;
