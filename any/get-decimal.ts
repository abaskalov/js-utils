import Decimal from "decimal.js-light";

export const getDecimal = (value: string | number | Decimal = 0): number => {
  try {
    return new Decimal(value).abs().toNumber();
  } catch (e) {}
  return 0;
};
