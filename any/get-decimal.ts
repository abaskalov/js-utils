import Decimal from "decimal.js-light";

export const getDecimal = (value: string | number | Decimal = 0): number =>
  new Decimal(value).abs().toNumber();
