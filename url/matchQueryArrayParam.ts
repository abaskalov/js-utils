export const matchQueryArrayParam = (
  s: string = "",
  p: string = ""
): string[] => s.match(new RegExp(`(${p})(\\[(\\w+)\\])+`)) || [];
