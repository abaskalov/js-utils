export const trimEnd = (s: string, characters: string): string => {
  while (characters.includes(s.slice(-1))) {
    s = s.slice(0, -1);
  }
  return s;
};
