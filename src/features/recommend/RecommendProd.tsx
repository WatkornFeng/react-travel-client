import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grow,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RecommendProdContent from "./RecommendProdContent";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const contents = [
  {
    keyword: "Endless options",
    content: "Ensuring you book the perfect choice for your dream getaway.",
    icon: <BurstModeIcon />,
  },
  {
    keyword: "Safely payment",
    content:
      "Easily and securely payment make your travel plans are convenient.",
    icon: <LockIcon />,
  },
  {
    keyword: "Be your travel muse",
    content: "Many inspiration make your trip an unforgettable journey.",
    icon: <TravelExploreIcon />,
  },
];
const HomeProdContainer = styled(Container)({
  minHeight: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "75px",
});
const ArrowDownButtonStyle = styled(Box)({
  animation: "unfoldEffect 2s infinite",
  "@keyframes unfoldEffect": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-20%)",
    },
    "100%": {
      transform: "translateY(20%)",
    },
  },
});

const ArrowDownButton = () => {
  return (
    <ArrowDownButtonStyle>
      <ArrowDropDownIcon sx={{ scale: "1.5" }} />
    </ArrowDownButtonStyle>
  );
};
function RecommendProd() {
  const [unfold, setUnfold] = useState(false);

  return (
    <HomeProdContainer>
      <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={2000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Why book with SmileTravel?
          </Typography>
          <Button
            sx={{ width: "20px" }}
            onClick={() => setUnfold((prev) => !prev)}
          >
            {unfold ? (
              <ArrowDropUpIcon sx={{ scale: "1.5" }} />
            ) : (
              <ArrowDownButton />
            )}
          </Button>
        </Box>
      </Grow>
      {unfold && (
        <Stack direction={{ sm: "column", md: "row" }} gap={{ xs: 2, md: 5 }}>
          {contents.map((content) => (
            <RecommendProdContent
              key={content.keyword}
              keyword={content.keyword}
              content={content.content}
              icon={content.icon}
            />
          ))}
        </Stack>
      )}
    </HomeProdContainer>
  );
}

export default RecommendProd;
