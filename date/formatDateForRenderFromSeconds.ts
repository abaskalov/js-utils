import { DateFormatOptionsInterface } from "./DateFormatOptionsInterface";
import { formatDateForRenderFromObject } from "./formatDateForRenderFromObject";

export const formatDateForRenderFromSeconds = (
  seconds: number = 0,
  { tz, format }: DateFormatOptionsInterface = {}
): string => {
  if (!seconds) {
    return "Invalid Date";
  }

  return formatDateForRenderFromObject(new Date(seconds * 1000), {
    tz,
    format,
  });
};
