import { CircularProgress } from "@mui/material";

interface IProps {
  size: string;
  color: string;
}
function Spinner({ size, color }: IProps) {
  return (
    <CircularProgress
      size={size === "small" ? 20 : 50}
      thickness={size === "small" ? 10 : 10}
      sx={{
        color: `${color}`,
      }}
    />
  );
}

export default Spinner;
