import { useSearchParams } from "react-router-dom";
import { Box, Checkbox, Rating, Typography } from "@mui/material";

function FilterStars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedStars = searchParams.getAll("star").map((e) => Number(e));

  const handleCheckboxChange = (starNumber: number) => {
    const currentStars = new Set(searchParams.getAll("star"));
    if (currentStars.has(String(starNumber))) {
      currentStars.delete(String(starNumber));
    } else {
      currentStars.add(String(starNumber));
    }
    setSearchParams((prev) => {
      prev.delete("star");
      currentStars.forEach((s) => prev.append("star", s));
      return prev;
    });
  };
  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Property stars
      </Typography>

      {[5, 4, 3, 2, 1].map((star) => (
        <Box key={star} sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            value={star}
            checked={selectedStars.includes(star)}
            onChange={() => handleCheckboxChange(star)}
            size="small"
          />
          <Rating
            name="read-only"
            value={star}
            readOnly
            sx={{ fontSize: "1rem" }}
          />
        </Box>
      ))}
    </>
  );
}

export default FilterStars;
