import { Box, Grid, Stack, Typography } from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

import { IHotelImages } from "../../services/apiHotel.type";
interface IProps {
  images: IHotelImages[];
}
function HotelDetailPicture({ images }: IProps) {
  const urls = images.map((image) => image.url);
  return (
    <Grid container position="relative">
      <Grid item xs={6}>
        <Box bgcolor={"white"} height={504} sx={{ mr: 0.5 }}>
          <img style={{ width: "100%", height: "100%" }} src={urls[0]} />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Stack height={"100%"} spacing={0.5}>
          <Box height={250} sx={{ pr: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={urls[1]} />
          </Box>
          <Box height={250} sx={{ pr: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={urls[2]} />
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack height={"100%"} spacing={0.5}>
          <Box height={250} sx={{ pl: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={urls[3]} />
          </Box>
          <Box height={250} sx={{ pl: 0.25 }}>
            <img style={{ width: "100%", height: "100%" }} src={urls[4]} />
          </Box>
        </Stack>
      </Grid>
      {images.length > 5 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bgcolor: "red",
            right: 0,
            bottom: 0,
            borderRadius: "12px",
            padding: "5px",
            gap: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <PhotoLibraryIcon sx={{ color: "white" }} />
          <Typography fontWeight="bold" color="white" fontSize="0.9rem">
            {images.length - 5}+ images
          </Typography>
        </Box>
      )}
    </Grid>
  );
}

export default HotelDetailPicture;
