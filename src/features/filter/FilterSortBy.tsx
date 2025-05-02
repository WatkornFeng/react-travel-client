import { useSearchParams } from "react-router-dom";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import useMatchViewPort from "../../hooks/useMatchViewPort";

const ALLOWED_SORT_VALUES = [
  "RATING_HIGH_TO_LOW",
  "PRICE_HIGH_TO_LOW",
  "RATING_LOW_TO_HIGH",
  "PRICE_LOW_TO_HIGH",
];

function FilterSortBy() {
  const widthViewPort_670 = useMatchViewPort(670);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectChange = (event: SelectChangeEvent) => {
    const selectedSort = event.target.value;

    // Update URL (only one sort value allowed)
    setSearchParams((prev) => {
      prev.set("sort", selectedSort); // replaces existing "sort"
      return prev;
    });
  };
  const currentSort = searchParams.get("sort");
  const validatedSort = ALLOWED_SORT_VALUES.includes(currentSort || "")
    ? currentSort
    : "PRICE_LOW_TO_HIGH";
  return (
    <FormControl sx={{ m: 1, minWidth: widthViewPort_670 ? "100%" : 300 }}>
      <Select
        value={validatedSort || "PRICE_LOW_TO_HIGH"}
        onChange={handleSelectChange}
        displayEmpty
        sx={{ bgcolor: "white" }}
        MenuProps={{ disableScrollLock: true }}
      >
        <MenuItem value={"RATING_HIGH_TO_LOW"}>
          <Typography variant="subtitle2">Highest Rating </Typography>
        </MenuItem>
        <MenuItem value={"PRICE_HIGH_TO_LOW"}>
          <Typography variant="subtitle2">Highest Price</Typography>
        </MenuItem>
        <MenuItem value={"RATING_LOW_TO_HIGH"}>
          <Typography variant="subtitle2">Lowest Rating </Typography>
        </MenuItem>
        <MenuItem value={"PRICE_LOW_TO_HIGH"}>
          <Typography variant="subtitle2">Lowest Price (Default)</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterSortBy;
