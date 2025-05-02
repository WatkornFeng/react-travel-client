import { Box, Stack } from "@mui/material";

import SelectDate from "./AddDate/SelectDate";
import SelectGuest from "./AddGuest/SelectGuest";
import SelectPlace from "./AddPlace/SelectPlace";
import SearchButton from "./SearchButton";

function SearchHotels() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" gap={2}>
        <SelectPlace />
        <Stack direction={{ xs: "column", md: "row" }} gap={2}>
          <SelectDate />
          <SelectGuest />
        </Stack>

        <SearchButton nameBtn="Search" textBtn="hotels" />
      </Stack>
    </Box>
  );
}

export default SearchHotels;
