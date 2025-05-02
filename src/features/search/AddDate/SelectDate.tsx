import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Box, Fade, Popper, styled } from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { setSelectedRange } from "../searchSlice";

import Calender from "../../../components/Calender/Calender";
import SearchBox from "../SearchBox";
import { formatDateToPlaceholder } from "../../../utils/formatDate";

const ContainerCalender = styled(Box)({
  border: "1px solid #d4cccc",
  borderRadius: "3px",
  backgroundColor: "white",
  padding: "15px",
});

type DateRange = {
  from?: Date;
  to?: Date;
};

function SelectDate() {
  const dispatch = useDispatch();
  const range = useSelector((state: RootState) => state.search.selectedRange);

  const selectedRange: DateRange | undefined =
    range.from || range.to
      ? {
          from: range.from ? new Date(range.from) : undefined,
          to: range.to ? new Date(range.to) : undefined,
        }
      : undefined;

  const datePlaceholder = formatDateToPlaceholder(selectedRange);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAway = () => {
    const today = new Date();
    const oneDayMs = 24 * 60 * 60 * 1000;

    const fromDate = range.from ? new Date(range.from) : null;
    const toDate = range.to ? new Date(range.to) : null;
    // Case 1: No dates selected
    if (!fromDate && !toDate) {
      dispatch(
        setSelectedRange({
          from: today.toISOString(),
          to: new Date(today.getTime() + oneDayMs).toISOString(),
        })
      );
    }
    // Case 2: Only from date is selected
    else if (fromDate && !toDate) {
      dispatch(
        setSelectedRange({
          from: range.from!,
          to: new Date(fromDate.getTime() + oneDayMs).toISOString(),
        })
      );
    }
    // Case 3: Only to date is selected
    else if (!fromDate && toDate) {
      dispatch(
        setSelectedRange({
          from: today.toISOString(),
          to: range.to!,
        })
      );
    }
    // Case 4: from === to
    else if (fromDate && toDate && range.from === range.to) {
      dispatch(
        setSelectedRange({
          from: range.from!,
          to: new Date(fromDate.getTime() + oneDayMs).toISOString(),
        })
      );
    }

    setAnchorEl(null);
  };

  return (
    <>
      <SearchBox
        id="Calender-popper"
        handleClick={handleClick}
        placeHolder={datePlaceholder}
        startIcon={<CalendarMonthIcon />}
        label="Date Check in and out"
      />
      <Popper
        id="Calender-popper"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        sx={{ zIndex: 999 }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <ContainerCalender>
                <Calender />
              </ContainerCalender>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}
export default SelectDate;
