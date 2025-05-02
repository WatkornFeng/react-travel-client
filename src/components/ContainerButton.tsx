import { Container, styled } from "@mui/material";

const ContainerButtonStyled = styled(Container)(({ theme }) => ({
  position: "absolute",
  bottom: "-20%",
  left: "50% ",
  transform: "translate(-50%, -50%)",
  minHeight: "75px",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    bottom: "-25%",
  },
}));

function ContainerButton({ children }: { children: React.ReactNode }) {
  return <ContainerButtonStyled>{children}</ContainerButtonStyled>;
}

export default ContainerButton;
