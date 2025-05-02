import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

function Statement({
  statement,
  icon,
  color,
  textColor,
}: {
  statement: string;
  color: string;
  textColor: string;
  icon: ReactElement;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: 1,
        backgroundColor: `${color}`,
        padding: "4px 8px",
        borderRadius: "20px",
        boxShadow: 3,
      }}
    >
      {icon}
      <Typography variant="subtitle2" fontWeight="bold" color={textColor}>
        {statement}
      </Typography>
    </Box>
  );
}

export default Statement;
