import { Typography } from "@mui/material";
interface IProps {
  children: React.ReactNode;
}
function HeadSection({ children }: IProps) {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: "2rem",
      }}
    >
      {children}
    </Typography>
  );
}

export default HeadSection;
