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
  navigateFn?: () => void;
}
function MainCard({ children, sx, elevation, navigateFn }: Props) {
  return (
    <Card elevation={elevation} sx={sx} onClick={navigateFn}>
      {children}
    </Card>
  );
}

export default MainCard;
