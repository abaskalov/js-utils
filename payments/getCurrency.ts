const systems: { [key: string]: string } = {
  PR: "USD",
  PM: "USD",
  USDTOmni: "USDT",
  USDTERC20: "USDT",
};

export const getCurrency = (ps: string): string => systems[ps] || ps;
