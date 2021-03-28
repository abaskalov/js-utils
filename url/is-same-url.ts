export const isSameUrl = (a: string, b: string): boolean =>
  a.split("?")[0].replace(/\/+$/, "") === b.split("?")[0].replace(/\/+$/, "");
