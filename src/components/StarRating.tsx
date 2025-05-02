import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function calStarRate(num: number) {
  return Array.from({ length: num }, (_, index) => index + 1);
}
interface IProps {
  stars: number;
  color: string;
  size: string;
}
function StarRating({ stars, size, color }: IProps) {
  const numOfStars = calStarRate(stars);
  return (
    <Box>
      {numOfStars.map((star) => (
        <StarIcon
          key={star}
          sx={{
            fontSize: `${size}`,
            color: `${color}`,
          }}
        />
      ))}
    </Box>
  );
}

export default StarRating;
