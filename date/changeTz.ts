export const changeTz = (date: Date, timeZone: string) => {
  const invalidDate = new Date(
    date.toLocaleString("en-US", {
      timeZone,
    })
  );
  const diff = date.getTime() - invalidDate.getTime();
  return new Date(date.getTime() + diff);
};
