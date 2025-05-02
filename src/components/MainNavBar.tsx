import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Box, Container, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import useMatchViewPort from "../hooks/useMatchViewPort";
import { useAddUserMutation } from "../services/apiUserSlice";

import AuthButtons from "../features/user/AuthButtons";
import Username from "../features/user/Username";
import MainNavMobile from "./MainNavMobile";
import LinkLogo from "./LinkLogo";
import Spinner from "./Spinner";
const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90x",
}));

const MainNavContainer = styled(Container)({
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const MainNavButton = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 20,
});

function MainNavBar() {
  const { isLoading, user, getAccessTokenSilently } = useAuth0();
  const [mobileOpen, setMobileOpen] = useState(false);
  const matches_700 = useMatchViewPort(700);
  const isModalOpen = mobileOpen && matches_700 ? true : false;

  const [addUser] = useAddUserMutation();

  useEffect(() => {
    if (!user) return;
    const callAPI = async () => {
      try {
        const token = await getAccessTokenSilently();

        addUser({ user, token });
      } catch (err) {
        console.error(err);
      }
    };
    callAPI();
  }, [user, addUser, getAccessTokenSilently]);

  return (
    <>
      <StyledAppBar position="relative" elevation={2}>
        <MainNavContainer>
          <LinkLogo />

          <MainNavButton>
            {user && <Username />}
            {!matches_700 ? (
              isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Spinner size="2rem" color="primary" />
                </Box>
              ) : (
                <AuthButtons />
              )
            ) : null}

            <IconButton
              sx={{
                display: matches_700 ? "inline-flex" : "none",
              }}
              onClick={() => setMobileOpen((prevState) => !prevState)}
            >
              <MenuIcon
                fontSize={"large"}
                sx={{
                  color: "primary.main",
                }}
              />
            </IconButton>
          </MainNavButton>
          {isModalOpen && <MainNavMobile setMobileOpen={setMobileOpen} />}
        </MainNavContainer>
      </StyledAppBar>
    </>
  );
}

export default MainNavBar;
