import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const Card = styled(Paper)({
  borderRadius: "20px",
});

interface Props {
  children: React.ReactNode;
  key?: string | number;
  elevation?: number;
  sx?: object;
}
function MainCard({ children, sx, elevation }: Props) {
  return (
    <Card elevation={elevation} sx={sx}>
      {children}
    </Card>
  );
}

export default MainCard;
