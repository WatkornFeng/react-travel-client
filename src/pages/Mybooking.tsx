import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import { useGetMyBookingsQuery } from "../services/apiBookingSlice";

import MyBookingCard from "../features/bookings/MyBookingCard";
import ErrorPage from "../components/ErrorPage";
import MainCard from "../components/MainCard";
import Spinner from "../components/Spinner";

function Mybooking() {
  const navigate = useNavigate();

  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getAccessTokenSilently();

      setToken(accessToken);
    };

    fetchToken();
  }, [getAccessTokenSilently]);

  const {
    data: myBooking,
    isFetching,
    isError,
  } = useGetMyBookingsQuery(token!, {
    skip: !token, // <-- skip until token ready
  });

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
        {isError && (
          <ErrorPage
            textBtn="Try again"
            message=" We couldn't complete your request. Please try again or come back later."
            backbtn={true}
          />
        )}

        {myBooking && myBooking.data.length === 0 && (
          <MainCard
            elevation={2}
            sx={{
              mt: "50px",
              minHeight: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack spacing={4} textAlign="center">
              <Box textAlign="center">
                <SentimentDissatisfiedIcon
                  sx={{ fontSize: 80, color: "warning.main" }}
                />
              </Box>

              <Typography variant="h5" fontWeight="bold" color="text.secondary">
                No bookings yet!
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Looks like you haven't booked any amazing trips yet.
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Start your journey and explore wonderful hotels!
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<TravelExploreIcon />}
                endIcon={<PanToolAltIcon sx={{ fontSize: 100 }} />}
                sx={{ mt: 2, px: 4, py: 1.5, borderRadius: 3 }}
                onClick={() => navigate("/")}
              >
                Start Explore !!!
              </Button>
            </Stack>
          </MainCard>
        )}

        {myBooking && myBooking.data.length > 0 && (
          <Stack spacing={2}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              paddingTop={5}
            >
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                MY BOOKING
              </Typography>
              <LibraryBooksIcon />
            </Stack>
            <Stack direction="column" spacing={4}>
              {myBooking.data.map((booking, index) => (
                <Box key={index}>
                  <MyBookingCard booking={booking} />
                </Box>
              ))}
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
}

export default Mybooking;
