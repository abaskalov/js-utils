export const symbols: { [key: string]: string } = {
  USD: "$",
  RUB: "₽",
  KZT: "₸",
  PLN: "zł",
  EUR: "€",
  CZK: "Kč",
  BRL: "R$",
  USDT: "₮",
};
export const getSymbol = (currency: string = ""): string =>
  symbols[currency] || currency;
