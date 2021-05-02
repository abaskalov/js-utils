export const convertDateToStringByTz = (
  d: Date = new Date(),
  timeZone: string = "UTC"
): string => {
  try {
    return d.toLocaleString("en-US", { hour12: false, timeZone });
  } catch (e) {
    return "";
  }
};
