import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import Spinner from "./Spinner";
import MainNavBar from "./MainNavBar";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <>
        <MainNavBar />
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
      </>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <MainNavBar />
      {children}
    </>
  );
}
