export const isSymbolGoesAfter = (currency: string): boolean =>
  !["USD", "BRL"].includes(currency);
