import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ErrorPage({
  message,
  textBtn,
  backbtn,
}: {
  message: string;
  textBtn: string;
  backbtn?: boolean;
}) {
  const naviagte = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 3,
        px: 2,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 100, color: "error.main" }} />

      <Typography variant="h4" color="text.primary">
        Oops! Something went wrong.
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: "400px" }}
      >
        {message}
      </Typography>
      <Box
        sx={{
          display: "flex", // <- make it flexbox
          justifyContent: "center", // <- center horizontally
          alignItems: "center", // <- center vertically (optional)
          gap: 2, // <- MUI spacing (theme-based, like 16px)
          mt: 2, // <- optional margin top
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()}
        >
          {textBtn}
        </Button>
        {backbtn && (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => naviagte(-1)}
          >
            Back
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default ErrorPage;
