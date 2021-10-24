export const isSymbolGoesAfter = (currency: string): boolean =>
  !["USD", "USDT", "BRL"].includes(currency);
