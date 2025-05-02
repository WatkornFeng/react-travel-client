import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { selectPlace } from "../searchSlice";
import {
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { useGetProvincesQuery } from "../../../services/apiProvinceSlice";

const StyledAutocompleteBox = {
  bgcolor: "white",
  border: "1px solid transparent",
  height: "100%",
  "&:hover": {
    border: "1px solid primary.main",
  },

  "& .MuiInputBase-input": {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
  },
};
const StyledDropDownList = {
  p: 2,
  display: "flex",
  alignItems: "center",
  color: "primary.main",
  width: "100%",
  height: "100%",
  "&:hover": {
    bgcolor: "primary.main",
    color: "white",
    cursor: "pointer",
  },
};

interface ProvinceItem {
  name: string;
}
function SelectPlaceNEW() {
  const dispatch = useDispatch();
  const { data, isFetching, isError } = useGetProvincesQuery();
  const provinces: ProvinceItem[] = data?.provinces || [];
  const { placeParam } = useParams();
  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    place: ProvinceItem | null
  ) => {
    dispatch(selectPlace(place));
  };
  const place = useSelector((state: RootState) => state.search.place);

  const inputProvince: ProvinceItem | null = place
    ? place
    : placeParam
    ? { name: placeParam?.trim() }
    : null;

  return (
    <>
      <Autocomplete
        disablePortal
        id="provincesList"
        fullWidth
        disabled={isError}
        loading={isFetching}
        loadingText="Loading provinces..."
        onChange={handleChange}
        options={provinces}
        value={inputProvince}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) =>
          option.name.toLowerCase() !== value.name.toLowerCase()
        }
        sx={StyledAutocompleteBox}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={
              !isError
                ? "Where are you going ?"
                : "⚠️ Error! Something went wrong."
            }
            InputProps={{
              ...params.InputProps,

              startAdornment: (
                <InputAdornment position="end">
                  <PlaceIcon
                    sx={{
                      color: "rgba(0, 0, 0, 0.26)",
                      marginLeft: -1,
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <>
                  {isFetching && <CircularProgress size={20} />}
                  {!isFetching && params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderOption={(props, option: ProvinceItem) => {
          const { ...prop } = props;
          if (!option.name) return;
          return (
            <Box {...prop} component="li" key={option.name}>
              <Box sx={StyledDropDownList}>
                <PlaceIcon
                  sx={{
                    color: "red",
                    mr: 2,
                  }}
                />

                <Typography fontWeight="bold"> {option.name}</Typography>
              </Box>
            </Box>
          );
        }}
      />
    </>
  );
}

export default SelectPlaceNEW;
