import HikingIcon from "@mui/icons-material/Hiking";
import SearchIcon from "@mui/icons-material/Search";

import SearchBox from "../SearchBox";

function SelectActivity() {
  return (
    <SearchBox
      id="SelectActivity-poppe"
      placeHolder="Discover activities for your upcoming weekend..."
      startIcon={<HikingIcon />}
      endIcon={<SearchIcon />}
    />
  );
}

export default SelectActivity;
