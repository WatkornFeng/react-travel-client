import { useSearchParams } from "react-router-dom";
import { Box, Checkbox, Skeleton, Typography } from "@mui/material";
import { useGetHotelTypesQuery } from "../../services/apiHotelTypeSlice";

function FilterPropertyType() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: hotelTypes, isFetching } = useGetHotelTypesQuery();
  const selectedProperty = searchParams.getAll("property");

  const handleCheckboxChange = (property: string) => {
    const currentProperty = new Set(searchParams.getAll("property"));
    if (currentProperty.has(String(property))) {
      currentProperty.delete(String(property));
    } else {
      currentProperty.add(String(property));
    }
    setSearchParams((prev) => {
      prev.delete("property");
      currentProperty.forEach((s) => prev.append("property", s));
      return prev;
    });
  };
  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Property Type
      </Typography>
      {isFetching &&
        [1, 2, 3, 4, 5].map((num) => (
          <Skeleton
            key={num}
            variant="rectangular"
            animation="wave"
            sx={{
              height: 25,
              width: "75%",
              marginBottom: 2,
            }}
          />
        ))}
      {hotelTypes &&
        hotelTypes.types.map(({ _id, name }) => (
          <Box
            key={_id}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              size="small"
              value={name}
              checked={selectedProperty.includes(name)}
              onChange={() => handleCheckboxChange(name)}
            />

            <Typography sx={{ fontSize: "0.9rem", fontWeight: "normal" }}>
              {name}
            </Typography>
          </Box>
        ))}
    </>
  );
}

export default FilterPropertyType;
