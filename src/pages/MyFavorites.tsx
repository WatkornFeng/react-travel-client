import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import { useGetMyFavoriteQuery } from "../services/apiFavoriteSlice";

import MyFavoritesCard from "../features/user/MyFavoritesCard";
import Spinner from "../components/Spinner";
import ErrorPage from "../components/ErrorPage";
import MainCard from "../components/MainCard";

function MyFavorites() {
  const navigate = useNavigate();

  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);
  const {
    data: myFavorites,
    isFetching,
    isError,
  } = useGetMyFavoriteQuery(token!, {
    skip: !token, // <-- skip until token ready
  });
  console.log(myFavorites);

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getAccessTokenSilently();

      setToken(accessToken);
    };

    fetchToken();
  }, [getAccessTokenSilently]);

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

        {myFavorites && myFavorites.data.length === 0 && (
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
                No Favorites yet!
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Looks like you haven't bookmark any amazing hotels yet.
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

        {myFavorites && myFavorites.data.length > 0 && (
          <Stack spacing={2}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              paddingTop={5}
            >
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                MY FAVORITES
              </Typography>
              <LibraryBooksIcon />
            </Stack>
            <Stack direction="column" spacing={4}>
              {myFavorites.data.map((favorite, index) => (
                <Box key={index}>
                  <MyFavoritesCard favorite={favorite} />
                </Box>
              ))}
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
}

export default MyFavorites;
