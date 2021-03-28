import { getCurrency } from "./get-currency";

export const isUsd = (ps: string): boolean => getCurrency(ps) === "USD";
