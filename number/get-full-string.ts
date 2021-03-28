import Decimal from "decimal.js-light";
import { trimEnd } from "../string/trim-end";

export const getFullString = (number: number = 0): string => {
  const toStringVal = number.toString();
  return /-/.test(toStringVal)
    ? trimEnd(new Decimal(toStringVal).toFixed(20).toString(), "0.,")
    : toStringVal;
};
