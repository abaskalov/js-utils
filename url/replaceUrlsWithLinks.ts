export const replaceUrlsWithLinks = (content: string = ""): string =>
  content.replace(
    /([^\S]|^)(((https?:\/\/)|(www\.))(\S+))/gi,
    function (match, space, url) {
      let hyperlink = url;
      if (!hyperlink.match("^https?://")) {
        hyperlink = "http://" + hyperlink;
      }
      return (
        space + '<a target="_blank" href="' + hyperlink + '">' + url + "</a>"
      );
    }
  );
