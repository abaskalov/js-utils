export const range = ({
  start = 1,
  end,
  step = 1,
  reverse = false,
}: {
  start?: number;
  end: number;
  step?: number;
  reverse?: boolean;
}): number[] => {
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return reverse ? arr.reverse() : arr;
};
