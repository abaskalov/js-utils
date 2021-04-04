import Decimal from "decimal.js-light";

export const getDecimalFromAny = (
  value: string | number | Decimal = 0
): Decimal => {
  try {
    return new Decimal(value);
  } catch (e) {}
  return new Decimal(0);
};
