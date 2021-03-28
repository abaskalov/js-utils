import { DateFormatEnum } from "./DateFormatEnum";
import { DateFormatOptionsInterface } from "./DateFormatOptionsInterface";
import { parseDateFromIsoString } from "./parse-date-from-iso-string";
import { convertDateToStringByTz } from "./convert-date-to-string-by-tz";
import { splitDateString } from "./split-date-string";

export const formatDateForRender = (
  date: string,
  { tz, format }: DateFormatOptionsInterface = {}
): string => {
  if (!date) {
    return "Invalid Date";
  }

  const dateObject = parseDateFromIsoString(date);
  const dateStringTz = convertDateToStringByTz(dateObject, tz);
  const { hours, minutes, month, day, year } = splitDateString(dateStringTz);

  switch (format) {
    case DateFormatEnum.Short:
      return `${day}.${month} ${hours}:${minutes}`;
    case DateFormatEnum.Date:
      return `${day}.${month}.${year}`;
    default:
      return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
};
