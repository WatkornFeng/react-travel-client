import { useState } from "react";
import { Box, Container, styled } from "@mui/material";

import useMatchViewPort from "../hooks/useMatchViewPort";
import useScrollVisibility from "../hooks/useScrollVisibility";

import Footer from "../components/Footer";
import MainNavBar from "../components/MainNavBar";
import HeroMessage from "../components/HeroMessage";
import MainCard from "../components/MainCard";
import RecommendHotels from "../features/recommend/RecommendHotels";
import RecommendProd from "../features/recommend/RecommendProd";
import CategoryTabList from "../features/search/CategoryTabList";
import SearchActivities from "../features/search/SearchActivities";
import SearchHotels from "../features/search/SearchHotels";
import SearchHotelsBar from "../features/search/SearchHotelsBar";

import cover from "../assets/images/country/mountain.jpg";

const HomeBackground = styled("div")({
  width: "100%",
  maxHeight: "500px",
  backgroundImage: `url(${cover})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const CardStyle = {
  position: "relative",
  paddingTop: "40px",
  minHeight: "325px",
  marginBottom: "75px",
};
const CardStyleSmall = {
  position: "relative",
  paddingTop: "40px",
  marginBottom: "75px",
  minHeight: "350px",
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
export interface IGetRandomSixProps {
  name: string;
  pictureCover: { url: string };
}

function Home() {
  const matchesMedium = useMatchViewPort(1000);
  const [value, setValue] = useState(0);
  const isVisible = useScrollVisibility(600);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {isVisible ? <SearchHotelsBar /> : null}
      <MainNavBar />
      <HomeBackground>
        <Container>
          <Box sx={{ paddingTop: "75px", marginBottom: "100px" }}>
            <HeroMessage />
          </Box>

          <MainCard
            elevation={10}
            sx={matchesMedium ? CardStyleSmall : CardStyle}
          >
            <CategoryTabList handleChange={handleChange} value={value} />
            <CustomTabPanel value={value} index={0}>
              <SearchHotels />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <SearchActivities />
            </CustomTabPanel>
          </MainCard>

          <RecommendProd />

          <RecommendHotels />
        </Container>
        <Footer />
      </HomeBackground>
    </>
  );
}

export default Home;
