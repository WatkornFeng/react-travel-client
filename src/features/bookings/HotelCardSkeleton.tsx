import { Skeleton, Stack, Box } from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";
import MainCard from "../../components/MainCard";

function HotelCardSkeleton() {
  const widthViewPort_650 = useMatchViewPort(650);

  return (
    <MainCard elevation={2} sx={{ overflow: "hidden" }}>
      <Box
        display="grid"
        gridTemplateColumns={widthViewPort_650 ? "1fr" : "0.4fr 0.6fr"}
        gridTemplateRows={widthViewPort_650 ? "300px 300px" : "320px"}
      >
        <Box
          sx={{
            width: "auto",
            height: "auto",
            position: "relative",
          }}
        >
          <Skeleton
            variant="circular"
            animation="wave"
            width={50}
            height={50}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
            }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              height: "100%",
            }}
          />
        </Box>

        <Stack
          spacing={2}
          sx={{
            padding: 2,
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: "auto",
              height: "50%",
            }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                height: "30%",
              }}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                height: "70%",
              }}
            />
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "auto",
              height: "50%",

              alignItems: "flex-end",
            }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                height: "50%",
                width: "50%",
              }}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                height: "80%",
                width: "40%",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </MainCard>
  );
}

export default HotelCardSkeleton;
