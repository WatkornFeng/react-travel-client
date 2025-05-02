import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, styled } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import { useGetSixProvincesQuery } from "../../services/apiProvinceSlice";

import Flag from "../../components/Flag";
import ErrorPage from "../../components/ErrorPage";
import Spinner from "../../components/Spinner";

const BoxContent = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  padding: "24px",
  borderRadius: "20px",
  zIndex: 2,

  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, " +
    "rgba(0, 0, 0, 0.2) 20%, rgba(0,0,0,0.0) 30%)",
  "&:hover": {
    cursor: "pointer",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, " +
      "rgba(0, 0, 0, 0.4) 70%, rgba(0,0,0,0.2) 100%)",
  },
});
const HeadContent = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "white",
});

const ResponsiveGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(3),

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

function HomeRecommendHotels() {
  const navigate = useNavigate();
  const { data, isFetching, isError } = useGetSixProvincesQuery();

  function handleClickLocation(name: string) {
    navigate(`/hotels/${name}?sort=PRICE_LOW_TO_HIGH&rating=Any`);
  }

  return (
    <Stack direction="column" sx={{ mb: "100px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "",
          marginBottom: "20px",
        }}
      >
        <AccessibilityNewIcon
          color="primary"
          sx={{ marginRight: "15px", scale: "1.1", alignSelf: "flex-start" }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">
            Find your place among the vast wonders of the{" "}
            <strong>Thailand </strong>
            <Flag countryCode="TH" />
          </Typography>
        </Box>
      </Box>
      {/* SHOW SPINNER WHILE FETCHING */}
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
      {/* HANDLING ERROR */}
      {isError && (
        <ErrorPage
          textBtn="Try again"
          message=" Can't fetch places. Please try again or come back later"
        />
      )}

      {/* IMAGES */}
      {!isFetching && !isError && data && (
        <ResponsiveGrid>
          {data.provinces.map(({ name, picture: { url } }) => (
            <Box
              key={name}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                height: 300,
              }}
            >
              <img
                srcSet={`${url}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                src={`${url}?w=300&h=300&fit=crop&auto=format`}
                alt={name.toLowerCase()}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                onClick={() => handleClickLocation(name)}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  zIndex: 3,
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                }}
              />

              {/* Overlay Content */}
              <BoxContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <HeadContent>{name}</HeadContent>
                </Box>
              </BoxContent>
            </Box>
          ))}
        </ResponsiveGrid>
      )}
    </Stack>
  );
}
const MemoizedHomeRecommendHotels = React.memo(HomeRecommendHotels);

export default MemoizedHomeRecommendHotels;
