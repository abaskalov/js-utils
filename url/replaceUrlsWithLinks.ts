import { stripTags } from "../string/stripTags";

export const replaceUrlsWithLinks = (content: string = ""): string =>
  content.replace(
    /([^\S]|^|<b>|<i>|<strong>)(((https?:\/\/)|(www\.))(\S+|<\/b>|<\/i>|<\/strong>))/gi,
    function (match, space, url) {
      let hyperlink = stripTags(url);
      if (!hyperlink.match("^https?://")) {
        hyperlink = "https://" + hyperlink;
      }
      return (
        space + '<a target="_blank" href="' + hyperlink + '">' + url + "</a>"
      );
    }
  );
