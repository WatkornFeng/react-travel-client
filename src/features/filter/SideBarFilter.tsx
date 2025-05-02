import { Box, Stack, Typography } from "@mui/material";

import MainCard from "../../components/MainCard";
import FilterStars from "./FilterStars";
import FilterGuestRating from "./FilterGuestRating";
import FilterPropertyType from "./FilterPropertyType";

const bottomBorderStyled = {
  paddingBottom: "20px",
  boxShadow: "0px 24px 3px -24px grey",
  padding: "20px",
};

function SideBarFilter() {
  return (
    <Stack gap={2} display={{ xs: "none", md: "block" }}>
      <Typography variant="h6">Filter</Typography>
      <MainCard elevation={2}>
        <Box sx={bottomBorderStyled}>
          <FilterStars />
        </Box>
        <Box sx={bottomBorderStyled}>
          <FilterGuestRating />
        </Box>
        <Box sx={bottomBorderStyled}>
          <FilterPropertyType />
        </Box>
      </MainCard>
    </Stack>
  );
}

export default SideBarFilter;
