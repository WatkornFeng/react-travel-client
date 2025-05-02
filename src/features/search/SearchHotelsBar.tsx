import { useState } from "react";
import { Box, Fade, IconButton, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import useMatchViewPort from "../../hooks/useMatchViewPort";

import Logo from "../../components/Logo";
import SelectDate from "./AddDate/SelectDate";
import SelectGuest from "./AddGuest/SelectGuest";
import SelectPlace from "./AddPlace/SelectPlace";
import SearchButton from "./SearchButton";

function SearchHotelsBar() {
  const matches_1120 = useMatchViewPort(1120);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(true);

  return (
    <Fade in={true} timeout={500}>
      <Stack
        direction={matches_1120 ? "column" : "row"}
        color="primary"
        sx={{
          position: "fixed",
          p: 2,
          top: 0,
          zIndex: 100,
          paddingRight: 4,
          gap: 2,
          width: "100vw",
          bgcolor: "primary.light",
        }}
      >
        {matches_1120 && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Logo />
              {!isSearchBarOpen && (
                <>
                  <IconButton
                    onClick={() => setIsSearchBarOpen((prev) => !prev)}
                  >
                    <ArrowDropDownIcon fontSize="large" color="primary" />
                  </IconButton>
                </>
              )}
              {isSearchBarOpen && (
                <>
                  <IconButton
                    onClick={() => setIsSearchBarOpen((prev) => !prev)}
                  >
                    <ArrowDropUpIcon fontSize="large" color="primary" />
                  </IconButton>
                </>
              )}
            </Box>
          </>
        )}
        {(isSearchBarOpen || !matches_1120) && (
          <>
            <SelectPlace />
            <SelectDate />
            <SelectGuest />
            <Box sx={{ minWidth: "200px" }}>
              <SearchButton nameBtn="search" />
            </Box>
          </>
        )}
      </Stack>
    </Fade>
  );
}

export default SearchHotelsBar;
