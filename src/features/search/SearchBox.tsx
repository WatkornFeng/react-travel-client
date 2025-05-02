import { Box, Typography, styled } from "@mui/material";
const StyledBox = styled(Box)(({ theme }) => ({
  border: "2px solid #d4cccc",
  backgroundColor: "white",
  borderRadius: "3px",
  width: "100%",
  display: "flex",
  color: "rgba(0, 0, 0, 0.26)",

  alignItems: "center",
  padding: "8px",
  "&:hover": {
    cursor: "pointer",
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));
const PlaceHolderText = styled(Typography)({
  color: "black",
  fontSize: "0.75rem",
  fontWeight: "bold",
  marginLeft: "12px",
});
const LabelText = styled(Typography)({
  color: "grey",
  fontSize: "0.75rem",
  fontWeight: "lighter",

  marginLeft: "12px",
});
interface ISearchBox {
  id?: string;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  placeHolder?: string;
  label?: string;
  startIcon: JSX.Element;
  endIcon?: JSX.Element;
}
function SearchBox({
  id,
  handleClick,
  placeHolder,
  startIcon,
  endIcon,
  label,
}: ISearchBox) {
  return (
    <StyledBox aria-describedby={id} onClick={handleClick}>
      {startIcon}
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <LabelText>{label}</LabelText>
        <PlaceHolderText>{placeHolder}</PlaceHolderText>
      </Box>
      {endIcon}
    </StyledBox>
  );
}
export default SearchBox;
