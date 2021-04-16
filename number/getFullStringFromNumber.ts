import Decimal from "decimal.js-light";
import { trimEnd } from "../string/trimEnd";

export const getFullStringFromNumber = (number: number = 0): string => {
  const toStringVal = number.toString();
  return /-/.test(toStringVal)
    ? trimEnd(new Decimal(toStringVal).toFixed(20).toString(), "0.,")
    : toStringVal;
};
