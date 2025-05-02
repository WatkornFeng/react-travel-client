import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "14px",
  height: "3rem",
  padding: "1rem",
}));
function LogoutButton() {
  const { logout } = useAuth0();
  const handleLogout = () => {
    const currentPath = window.location.pathname + window.location.search;

    logout({
      logoutParams: {
        returnTo: `${
          window.location.origin
        }/logout-callback?returnTo=${encodeURIComponent(currentPath)}`,
      },
    });
  };

  return (
    <StyledButton
      variant="contained"
      color="primary"
      startIcon={<LogoutIcon />}
      onClick={handleLogout}
    >
      Sign Out
    </StyledButton>
  );
}

export default LogoutButton;
