export const arrayToObject = (
  array: any[] = [],
  { key = "id", vKey, fn }: { key?: string; vKey?: string; fn?: Function } = {}
): { [key: string]: any } =>
  Array.isArray(array)
    ? array
        .filter((el) => typeof el === "object" && el !== null)
        .reduce((acc, curr) => {
          acc[curr[key]] = vKey ? (fn ? fn(curr[vKey]) : curr[vKey]) : curr;
          return acc;
        }, {})
    : array;
