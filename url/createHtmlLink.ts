import { getHostname } from "../string/getHostname";

export const createHtmlLink = ({
  url,
  inner,
  domain = false,
  blank = true,
  noopener = true,
  email = false,
  phone = false,
}: {
  url: string;
  inner: string;
  domain?: boolean;
  blank?: boolean;
  noopener?: boolean;
  email?: boolean;
  phone?: boolean;
}): string => {
  const prefix = email ? "mailto:" : phone ? "tel:" : "";
  return `<a ${noopener ? 'rel="noopener"' : ""} target="${
    blank ? "_blank" : "_self"
  }" href="${prefix}${url}">${domain ? getHostname(url) : inner || url}</a>`;
};
