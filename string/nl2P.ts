export const nl2P = (s: string = ""): string =>
  "<p>" +
  s.replace(/\n{2}/g, "&nbsp;</p><p>").replace(/\n/g, "&nbsp;<br />") +
  "</p>";
