export const firstWordBold = (s: string = "", strict = false): string => {
  const split = s.split(" ");
  if (split.length >= 1) {
    const start = split.splice(
      0,
      split[0].length <= 3 && split.length > 1 && !strict ? 2 : 1
    );
    return `<b>${start.join(" ")}</b> ${split.join(" ")}`;
  }
  return s;
};
