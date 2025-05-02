import { Box, Input, Typography, styled } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const StyledInputBox = styled(Box)(({ theme }) => ({
  border: "2px solid #d4cccc",
  backgroundColor: "white",
  borderRadius: "3px",
  width: "100%",
  display: "flex",
  color: "rgba(0, 0, 0, 0.26)",
  alignItems: "center",
  height: "74px",
  padding: "8px",

  "&:hover": {
    cursor: "pointer",
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

const InputBoxStyled = styled(Input)({
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

interface Props {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  id?: string;
  input: string | undefined;
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function InputBox({ handleClick, id, input, setInput }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <StyledInputBox aria-describedby={id} onClick={handleClick}>
      <PlaceIcon />
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <LabelText>City or destination</LabelText>
        <InputBoxStyled
          required
          disableUnderline={true}
          placeholder="Where are you going?"
          onChange={handleChange}
          value={input}
        />
      </Box>
    </StyledInputBox>
  );
}

export default InputBox;
