import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import BouncingDotsLoader from "../../components/BouncingDotsLoader";

function AuthCallbackHandler() {
  const { isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const returnTo =
        window.history.state?.returnTo ||
        window.location.pathname + window.location.search;

      navigate(returnTo, { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <BouncingDotsLoader size="large" />
    </Box>
  );
}

export default AuthCallbackHandler;
