import { Box, Typography, styled } from "@mui/material";

import { Link } from "react-router-dom";
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  padding: "15px",
  color: `${theme.palette.primary.main}`,
  "&:hover": {
    backgroundColor: `${theme.palette.primary.main}`,
    color: "white",
  },
}));
function AccountLink() {
  return (
    <StyledLink to="#">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography fontWeight="bold">Account Setting</Typography>
      </Box>
    </StyledLink>
  );
}

export default AccountLink;
