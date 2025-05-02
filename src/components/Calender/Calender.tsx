import { useDispatch, useSelector } from "react-redux";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { RootState } from "../../store";
import { setSelectedRange } from "../../features/search/searchSlice";
import "./Calender.css";

function Calender() {
  const dispatch = useDispatch();
  const range = useSelector((state: RootState) => state.search.selectedRange);
  const selectedRange = {
    from: range.from ? new Date(range.from) : undefined,
    to: range.to ? new Date(range.to) : undefined,
  };

  const onSetSelectedDate = (range: DateRange | undefined) => {
    dispatch(
      setSelectedRange({
        from: range?.from?.toISOString() ?? null,
        to: range?.to?.toISOString() ?? null,
      })
    );
  };

  const disabledDay: DateRange = {
    from: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
    to: new Date(0), // 1970-01-01
  };

  return (
    <DayPicker
      mode="range"
      showOutsideDays
      numberOfMonths={2}
      selected={selectedRange}
      onSelect={onSetSelectedDate}
      disabled={disabledDay}
    />
  );
}

export default Calender;
