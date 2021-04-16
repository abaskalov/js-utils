export const replaceUrlsWithLinks = (content: string = ""): string => {
  content = content.replace(/<a\b[^>]*>/gi, "").replace(/<\/a>/gi, "");

  const expMatch = /(\b(https?|):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
  return content.replace(expMatch, "<a target='_blank' href='$1'>$1</a>");
};
