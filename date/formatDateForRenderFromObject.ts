import { DateFormatEnum } from "./DateFormatEnum";
import { DateFormatOptionsInterface } from "./DateFormatOptionsInterface";
import { convertDateToStringByTz } from "./convertDateToStringByTz";
import { splitDateString } from "./splitDateString";

export const formatDateForRenderFromObject = (
  date: Date,
  { tz, format }: DateFormatOptionsInterface = {}
): string => {
  if (!date || !(date instanceof Date)) {
    return "Invalid Date";
  }

  const dateStringTz = convertDateToStringByTz(date, tz);
  const { hours, minutes, month, day, year } = splitDateString(dateStringTz);

  switch (format) {
    case DateFormatEnum.Short:
      return `${day}.${month} ${hours}:${minutes}`;
    case DateFormatEnum.Date:
      return `${day}.${month}.${year}`;
    case DateFormatEnum.Time:
      return `${hours}:${minutes}`;
    default:
      return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
};
