export const trimDecimal = (v = 0, d = 2) => {
  const re = new RegExp("^-?\\d+(?:.\\d{0," + (d || -1) + "})?");
  try {
    const matched: string[] | null = v.toString().match(re);
    return matched !== null ? parseFloat(matched[0]) : 0;
  } catch (e) {
    return 0;
  }
};
