import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { Box, Button, ListItem, ListItemText, Typography } from "@mui/material";
import { decrementGuest, IGuest, incrementGuest } from "../searchSlice";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function checkBtnDisabled(list: string, number: number) {
  if (list === "adult" || list === "room") {
    if (number === 1) return true;
    return false;
  } else {
    if (number === 0) return true;
    return false;
  }
}
function createListText(age: string, numguest: number) {
  if (age === "child") {
    if (numguest > 1) {
      return "children";
    } else {
      return "child";
    }
  }
  if (age === "adult") {
    if (numguest > 1) {
      return "adults";
    } else {
      return "adult";
    }
  }
  if (age === "room") {
    if (numguest > 1) {
      return "rooms";
    } else {
      return "room";
    }
  }
}

interface IProps {
  list: string;
}
function GuestList({ list }: IProps) {
  const guest = useSelector((state: RootState) => state.search.guest);
  const dispatch = useAppDispatch();

  const numberOfValue = guest[list as keyof IGuest];
  const listText = createListText(list, numberOfValue);
  const isDisabled = checkBtnDisabled(list, numberOfValue);
  const adultEqualRoom = guest.adult === guest.room;
  const decBtnIsDisabled =
    list === "adult" ? (adultEqualRoom ? true : false) : isDisabled;
  const increment = () => {
    dispatch(incrementGuest(list));
  };
  const decrement = () => {
    dispatch(decrementGuest(list));
  };
  return (
    <ListItem
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <ListItemText primary={listText} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button onClick={() => decrement()} disabled={decBtnIsDisabled}>
          <RemoveCircleIcon
            sx={{
              color: decBtnIsDisabled ? "primary.light" : "primary.dark",
            }}
          />
        </Button>
        <Box
          sx={{
            display: "flex",
            width: "24px",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {numberOfValue}
          </Typography>
        </Box>
        <Button onClick={() => increment()} disabled={numberOfValue === 12}>
          <AddCircleIcon
            sx={{
              color: numberOfValue === 12 ? "primary.light" : "primary.dark",
            }}
          />
        </Button>
      </Box>
    </ListItem>
  );
}

export default GuestList;
