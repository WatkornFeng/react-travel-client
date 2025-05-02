import { Box, styled, Tab, Tabs } from "@mui/material";
import HikingIcon from "@mui/icons-material/Hiking";
import HotelIcon from "@mui/icons-material/Hotel";

const CategoryTabContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate(-50%, -50%)",

  backgroundColor: "#fff",
  boxShadow:
    "0px 0px 10px 4px rgba(0,0,0,0.14),0px 5px 5px 0px rgba(0,0,0,0.22)",
  borderRadius: "14px",
  paddingInline: "20px",
});
const CategoryTab = styled(Tab)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: `${theme.palette.primary.light}`,
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface TabProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}
function CategoryTabList({ value, handleChange }: TabProps) {
  return (
    <CategoryTabContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="activityTabs"
        TabIndicatorProps={{
          sx: {
            bgcolor: "primary",
            height: "5px",
          },
        }}
        centered
      >
        <CategoryTab
          label="hotels"
          icon={<HotelIcon />}
          iconPosition="start"
          {...a11yProps(0)}
        />
        <CategoryTab
          label="activities"
          icon={<HikingIcon />}
          iconPosition="start"
          {...a11yProps(1)}
        />
      </Tabs>
    </CategoryTabContainer>
  );
}

export default CategoryTabList;
