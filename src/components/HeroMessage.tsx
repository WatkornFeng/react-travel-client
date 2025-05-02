import { Grow, Typography, styled } from "@mui/material";

const HeadTypography = styled(Typography)({
  textAlign: "center",
  color: "#fff",
  fontWeight: "bold",
});
function HeroMessage() {
  return (
    <Grow in={true} style={{ transformOrigin: "-1 0 0" }} timeout={2000}>
      <HeadTypography variant="h5">
        Discover THAILAND and Uncover Stories
      </HeadTypography>
    </Grow>
  );
}

export default HeroMessage;
