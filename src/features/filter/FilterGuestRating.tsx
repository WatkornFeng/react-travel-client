import { useSearchParams } from "react-router-dom";
import { Typography, Box, Radio } from "@mui/material";

const RATINGS = [
  { grade: "Any", value: "" },
  { grade: "Outstanding", value: 9 },
  { grade: "Very Good", value: 8 },
  { grade: "Good", value: 7 },
  { grade: "Satisfactory", value: 6 },
] as const;

const VALID_GRADES = RATINGS.map((r) => r.grade);
type Grade = "Any" | "Outstanding" | "Very Good" | "Good" | "Satisfactory";
function FilterGuestRating() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentRating = searchParams.get("rating");

  const validatedRating = VALID_GRADES.includes((currentRating as Grade) || "")
    ? currentRating
    : "Any";

  const handleChange = (selectedGrade: string) => {
    setSearchParams((prev) => {
      prev.set("rating", selectedGrade);
      return prev;
    });
  };

  return (
    <>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        Guest Rating
      </Typography>

      {RATINGS.map(({ grade, value }) => (
        <Box key={grade} sx={{ display: "flex", alignItems: "center" }}>
          <Radio
            size="small"
            checked={validatedRating === grade}
            onChange={() => handleChange(grade)}
            value={grade}
            name="guest-rating"
            inputProps={{ "aria-label": grade }}
          />
          <Typography sx={{ fontSize: "0.9rem", fontWeight: "normal" }}>
            {grade} {value ? value : ""} {value ? "+" : ""}
          </Typography>
        </Box>
      ))}
    </>
  );
}

export default FilterGuestRating;
