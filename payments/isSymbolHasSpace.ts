export const isSymbolHasSpace = (currency: string): boolean =>
  !["USD", "BRL"].includes(currency);
