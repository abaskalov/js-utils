import { convertDateToStringByTz } from "./convertDateToStringByTz";
import { splitDateString } from "./splitDateString";
import { parseDateFromInputString } from "./parseDateFromInputString";
import { changeTz } from "./changeTz";

export const formatDateForSave = (date: string, tz: string): string => {
  const dateObject = parseDateFromInputString(date);
  const dateObjectTz = changeTz(dateObject, tz);
  const dateStringTz = convertDateToStringByTz(dateObjectTz);
  const { hours, minutes, seconds, month, day, year } = splitDateString(
    dateStringTz
  );

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.000 +0000 UTC`;
};
