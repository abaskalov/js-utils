import { getCurrency } from "./getCurrency";

export const isUsd = (ps: string): boolean => getCurrency(ps) === "USD";
