import { useAuth0 } from "@auth0/auth0-react";
import { Button, styled } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const StyledButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "14px",
  height: "3rem",
  padding: "1rem",
}));
function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledButton
      variant="contained"
      startIcon={<PersonIcon />}
      onClick={() =>
        loginWithRedirect({
          appState: {
            returnTo: window.location.pathname + window.location.search,
          },
        })
      }
    >
      Login
    </StyledButton>
  );
}

export default LoginButton;
