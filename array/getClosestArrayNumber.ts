export const getClosestArrayNumber = (arr: number[], num: number): number => {
  return (
    arr.reduce((acc, val) => {
      if (Math.abs(val - num) < Math.abs(acc)) {
        return val - num;
      } else {
        return acc;
      }
    }, Infinity) + num
  );
};
