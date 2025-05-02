import { Box, Stack, Typography, Zoom } from "@mui/material";

import SelectActivity from "./AddActivity/SelectActivity";

function SearchActivities() {
  return (
    <Box sx={{ width: "100%" }}>
      <Zoom in={true} timeout={500}>
        <Stack gap={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" color="primary" sx={{}}>
              Looking for things to do? Search your favorite activities, and
              we'll find the perfect attractions for you.
            </Typography>
          </Box>
          <Stack
            direction="column"
            gap={1}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "green",
            }}
          >
            <SelectActivity />
          </Stack>
        </Stack>
      </Zoom>
    </Box>
  );
}

export default SearchActivities;
