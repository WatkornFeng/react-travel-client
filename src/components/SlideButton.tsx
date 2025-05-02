import { IconButton } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}
function SlideButton({ children }: IProps) {
  return (
    <IconButton
      sx={{
        position: "absolute",
        color: "primary.main",
        bgcolor: "white",
        top: "50%",
        transform: "translate(0,-50%)",
        boxShadow: "0 12px 24px rgba(0,0,0,2)",
        right: 0,
        "&:hover": {
          bgcolor: "primary.main",
          color: "white",
        },
      }}
    >
      {children}
    </IconButton>
  );
}

export default SlideButton;
