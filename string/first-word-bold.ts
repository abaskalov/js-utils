export const firstWordBold = (s: string = ""): string => {
  const split = s.split(" ");
  if (split.length >= 1) {
    const start = split.splice(
      0,
      split[0].length <= 3 && split.length > 1 ? 2 : 1
    );
    return `<b>${start.join(" ")}</b> ${split.join(" ")}`;
  }
  return s;
};
