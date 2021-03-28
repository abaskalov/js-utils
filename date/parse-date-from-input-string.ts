// 01.12.2020 15:10
export const parseDateFromInputString = (s: string = ""): Date => {
  const b = s.split(/\D+/);
  const [date = "0", month = "0", year = "0", hours = "0", minutes = "0"] = b;
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(date),
    Number(hours),
    Number(minutes)
  );
};
