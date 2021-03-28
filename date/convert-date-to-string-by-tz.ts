export const convertDateToStringByTz = (
  d: Date = new Date(),
  timeZone: string = "UTC"
): string => d.toLocaleString("en-US", { hour12: false, timeZone });
