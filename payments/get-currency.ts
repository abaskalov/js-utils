const systems: { [key: string]: string } = {
  PR: "USD",
  PM: "USD",
};

export const getCurrency = (ps: string): string => systems[ps] || ps;
