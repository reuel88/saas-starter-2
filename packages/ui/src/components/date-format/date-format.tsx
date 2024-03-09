import { isValid, format, parseISO } from "date-fns";
import { FC } from "react";

type DateFormatProps = {
  dateString: string;
};

export const DateFormat: FC<DateFormatProps> = ({ dateString }) => {
  const date = parseISO(dateString);

  if (isValid(date)) {
    return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
  }
  return null;
};
