import { Box, Stack, Tab, Tabs } from "@mui/material";
import useScrollVisibility from "../../hooks/useScrollVisibility";
import useMatchViewPort from "../../hooks/useMatchViewPort";

import HotelReserveButton from "./HotelReserveButton";
const tabData = [
  { value: "overview", label: "Overview" },
  { value: "amenities", label: "Amenities" },
  { value: "reviews", label: "Reviews" },
];
interface IProps {
  elementId: string;
  setElementId: React.Dispatch<React.SetStateAction<string>>;
  hotelId: string;
}

function HotelDetailTab({ elementId, setElementId, hotelId }: IProps) {
  const isVisible = useScrollVisibility(0);
  const widthViewPort_760 = useMatchViewPort(760);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    const element = document.getElementById(newValue)!;
    element.scrollIntoView();
    setElementId(newValue);
  };

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-end",
        bgcolor: "white",
        position: isVisible ? "sticky" : "",
        top: isVisible ? 0 : "-50px",
        zIndex: 9999,
        transition: isVisible ? "top 0.3s" : "",
        borderBottom: "0.5px solid rgba(0,0,0,0.1)",
        height: "75px",
        pb: 0.5,
      }}
    >
      <Tabs
        value={elementId}
        onChange={handleChange}
        indicatorColor="primary"
        aria-label="Hotel Details Tabs"
        TabIndicatorProps={{
          sx: {
            bgcolor: "primary",
            height: widthViewPort_760 ? "0.2rem" : "0.3rem",
          },
        }}
      >
        {tabData.map(({ value, label }) => (
          <Tab
            key={value}
            value={value}
            label={label}
            sx={{
              fontWeight: "bold",
              fontSize: widthViewPort_760 ? "0.6rem" : "1rem",
            }}
          />
        ))}
      </Tabs>
      <Box mr={"1rem"}>
        <HotelReserveButton hotelId={hotelId} />
      </Box>
    </Stack>
  );
}

export default HotelDetailTab;
