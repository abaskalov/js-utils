import { DateFormatOptionsInterface } from "./DateFormatOptionsInterface";
import { parseDateFromIsoString } from "./parseDateFromIsoString";
import { formatDateForRenderFromObject } from "./formatDateForRenderFromObject";

export const formatDateForRenderFromString = (
  date: string,
  { tz, format }: DateFormatOptionsInterface = {}
): string => {
  if (!date) {
    return "Invalid Date";
  }

  return formatDateForRenderFromObject(parseDateFromIsoString(date), {
    tz,
    format,
  });
};
