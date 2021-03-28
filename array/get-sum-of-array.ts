export const getSumOfArray = (a: any[] = [], prop: string): number =>
  a.reduce((a, b) => a + b[prop], 0);
