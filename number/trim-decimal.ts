export const trimDecimal = (v = 0, d = 2) => {
  const a: any = ((v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
  return a * 1;
};
