import { useAuth0 } from "@auth0/auth0-react";
import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AccountLink from "../features/user/AccountLink";
import Username from "../features/user/Username";
import AuthButtons from "../features/user/AuthButtons";
import Spinner from "./Spinner";

const NavMobileStyles = styled(Box)(() => ({
  position: "absolute",
  backgroundColor: "rgba(252, 251, 251, 0.95)",
  top: 0,
  left: 0,
  width: "100%",
  height: "20rem",
  zIndex: 1,
  boxShadow: "3px 26px 32px -9px rgba(0,0,0,0.75)",
}));

interface IProps {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainNavMobile({ setMobileOpen }: IProps) {
  const { user, isLoading } = useAuth0();
  return (
    <NavMobileStyles>
      <IconButton onClick={() => setMobileOpen((prevState) => !prevState)}>
        <CloseIcon
          fontSize="large"
          sx={{
            color: "primary.main",
            zIndex: 9999,
          }}
        />
      </IconButton>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          paddingInline: 10,
        }}
      >
        {user && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography color="primary" fontWeight="bold">
                WELCOME
              </Typography>

              <Username />
            </Box>
            <AccountLink />
          </>
        )}
        {!user && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography color="primary" fontWeight="bold" variant="h5">
                WELCOME TO
              </Typography>
              <Typography color="primary" fontWeight="bold" variant="h6">
                SMILE TRAVEL
              </Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  color="primary"
                  fontWeight="normal"
                  variant="subtitle1"
                >
                  <strong>Sign in</strong>
                  {"  "}
                  <em>to get special offers </em>
                  <strong style={{ color: "red" }}>!</strong>
                </Typography>
              </Box>
            </Box>
          </>
        )}

        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Spinner size="2rem" color="primary" />
          </Box>
        ) : (
          <AuthButtons />
        )}
      </Stack>
    </NavMobileStyles>
  );
}

export default MainNavMobile;
