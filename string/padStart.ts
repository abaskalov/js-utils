export const padStart = (
  string: string = "",
  width: number = 2,
  padding: string = "0"
): string =>
  width <= string.length ? string : padStart(padding + string, width, padding);
