export const parseDateFromIsoString = (s: string = ""): Date => {
  const b = s.split(/\D+/);
  const [
    year = "0",
    month = "0",
    date = "0",
    hours = "0",
    minutes = "0",
    seconds = "0",
    ms = "0",
  ] = b;
  return new Date(
    Date.UTC(
      Number(year),
      Number(month) - 1,
      Number(date),
      Number(hours),
      Number(minutes),
      Number(seconds),
      Number(ms)
    )
  );
};
