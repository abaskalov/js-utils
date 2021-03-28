export const getHostname = (s: string = ""): string =>
  s.replace(/(http(s)?:)?\/\//, "").split(/[/?#]/)[0];
