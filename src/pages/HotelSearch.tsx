import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  Link,
} from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useGetProvinceQuery } from "../services/apiProvinceSlice";
import { useGetHotelsQuery } from "../services/apiHotelSlice";

//CustomHook
import useMatchViewPort from "../hooks/useMatchViewPort";
import useScrollVisibility from "../hooks/useScrollVisibility";

// shared components
import BackgroundPicture from "../components/BackgroundPicture";
import Footer from "../components/Footer";
import Empty from "../components/Empty";
import CustomModal from "../components/CustomModal";
import MainCard from "../components/MainCard";

// Features
import HotelCard from "../features/bookings/HotelCard";
import FilterModal from "../features/filter/FilterModal";
import FilterSortBy from "../features/filter/FilterSortBy";
import SideBarFilter from "../features/filter/SideBarFilter";
import HotelCardSkeleton from "../features/bookings/HotelCardSkeleton";
import SearchHotels from "../features/search/SearchHotels";
import SearchHotelsBar from "../features/search/SearchHotelsBar";

const HeroTypography = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bold",
});

const searchHotelCardStyled = {
  marginBottom: "75px",
  paddingTop: "40px",
  minHeight: "250px",
  padding: "20px",
};

function HotelSearch() {
  const widthViewPort_670 = useMatchViewPort(670);
  const widthViewPort_1000 = useMatchViewPort(1000);
  const isVisible = useScrollVisibility(600);
  const { placeParam } = useParams();

  const queryString = location.search.slice(1);

  const { data: getHotels, isFetching: fetchingHotels } = useGetHotelsQuery({
    queryString,
    placeParam: placeParam || "",
  });

  const { data: getProvince } = useGetProvinceQuery({
    provinceName: placeParam?.trim() || "",
  });

  const [_, isOpenWarningModal] = useState(false);
  const hotels = getHotels?.data?.hotels ?? [];

  const isEmpty = hotels.length === 0;
  const breadcrumbs = [
    <Link
      key="1"
      to="/"
      component={RouterLink}
      sx={{
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "0.7rem",
        padding: "10px",
        color: "darkgreen",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      HOME
    </Link>,
    <Button
      key="2"
      sx={{
        fontWeight: "bold",
        fontSize: "0.7rem",
        padding: "10px",
        color: "darkgreen",
        cursor: "default",
      }}
    >
      HOTELS
    </Button>,
  ];

  return (
    <>
      {getProvince && !getProvince.province && (
        <CustomModal
          toggled={true}
          setToggled={isOpenWarningModal}
          content={{
            topic: "No Place/Province Found!",
            details: "Please select Province in Thailand",
          }}
          isNavigated={true}
        />
      )}

      {isVisible ? <SearchHotelsBar /> : null}

      <BackgroundPicture
        src={getProvince?.province ? getProvince.province.pictureCover.url : ""}
      >
        <Container>
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              bgcolor: "white",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  fontSize="small"
                  sx={{ color: "darkgreen" }}
                />
              }
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "100px",
              marginBottom: "100px",
            }}
          >
            <HeroTypography
              variant="h1"
              sx={{
                fontSize: `${
                  widthViewPort_670
                    ? "1.5rem"
                    : widthViewPort_1000
                    ? "2rem"
                    : "3rem"
                }`,
              }}
              color="White"
            >
              Hotels in {getProvince?.province ? getProvince.province.name : ""}
            </HeroTypography>
            {getHotels && (
              <Typography color="White">
                {getHotels.length} {getHotels.length > 1 ? "hotels" : "hotel"}{" "}
                avaliable
              </Typography>
            )}
          </Box>

          <MainCard elevation={10} sx={searchHotelCardStyled}>
            <SearchHotels />
          </MainCard>

          <Grid container spacing={2}>
            <Grid item xs={0} md={3}>
              <SideBarFilter />
              <FilterModal />
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack
                direction={widthViewPort_670 ? "column" : "row"}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "25px",
                }}
              >
                {fetchingHotels ? (
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Searching . . .
                  </Typography>
                ) : (
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {getHotels?.length} properties found
                  </Typography>
                )}

                <FilterSortBy />
              </Stack>
              {fetchingHotels ? (
                <Stack spacing={2}>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <HotelCardSkeleton key={index} />
                  ))}
                </Stack>
              ) : isEmpty ? (
                <Empty resourceName="hotels" />
              ) : (
                <Stack spacing={2}>
                  {hotels.map(
                    ({
                      _id,
                      name,
                      amenities,
                      images,
                      price,
                      province,
                      stars,
                      ratingsAverage,
                      ratingsQuantity,
                      slug,
                      propertyType,
                    }) => (
                      <HotelCard
                        key={_id}
                        id={_id}
                        slug={slug}
                        name={name}
                        stars={stars}
                        propertyType={propertyType}
                        ratingsAverage={ratingsAverage}
                        ratingsQuantity={ratingsQuantity}
                        price={price}
                        amenities={amenities}
                        province={province?.name}
                        images={images}
                      />
                    )
                  )}
                </Stack>
              )}
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </BackgroundPicture>
    </>
  );
}

export default HotelSearch;
