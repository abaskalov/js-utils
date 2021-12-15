export const addDays = (days: number, date?: Date) => {
  date = date || new Date();
  date.setDate(date.getDate() + days);
  return date;
};
