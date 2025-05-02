import { format, getDate } from "date-fns";

import { enUS } from "date-fns/locale";

function dateToString(from: Date, to?: Date): string {
  const fromDateString = `${from.toLocaleString("en-US", {
    weekday: "short",
  })} ${from.getDate()} ${from.toLocaleString("en-US", { month: "short" })}`;

  if (!to) {
    return `${fromDateString} ― Check-out date`;
  }
  const toDateString = `${to.toLocaleString("en-US", {
    weekday: "short",
  })} ${to.getDate()} ${to.toLocaleString("en-US", { month: "short" })}`;
  return `${fromDateString} ― ${toDateString}`;
}

export function timestampToFormatDate(timestamp: number) {
  const formattedDate = format(new Date(timestamp), "yyyy-MM-dd");

  return formattedDate;
}

type DateRange = {
  from?: Date;
  to?: Date;
};
export function formatDateToPlaceholder(selectedDay: DateRange | undefined) {
  const { from, to } = { ...selectedDay };

  let placeholder = "";
  if (from === undefined) {
    placeholder = "Please select date";
  } else if (to === undefined || getDate(from) === getDate(to!)) {
    placeholder = dateToString(from);
  } else {
    placeholder = dateToString(from, to);
  }

  return placeholder;
}

export function formatISOToDate(ISODate: string) {
  const normalDateFormat = format(ISODate, "eee-dd-MMMM-yyyy", {
    locale: enUS,
  });

  return normalDateFormat;
}
