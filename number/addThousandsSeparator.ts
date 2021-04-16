export const addThousandsSeparator = (
  number: number = 0,
  separator: string = " "
): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
