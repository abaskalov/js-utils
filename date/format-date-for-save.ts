import { convertDateToStringByTz } from "./convert-date-to-string-by-tz";
import { splitDateString } from "./split-date-string";
import { parseDateFromInputString } from "./parse-date-from-input-string";
import { changeTz } from "./change-tz";

export const formatDateForSave = (date: string, tz: string): string => {
  const dateObject = parseDateFromInputString(date);
  const dateObjectTz = changeTz(dateObject, tz);
  const dateStringTz = convertDateToStringByTz(dateObjectTz);
  const { hours, minutes, seconds, month, day, year } = splitDateString(
    dateStringTz
  );

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.000 +0000 UTC`;
};
