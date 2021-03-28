export const isRelativeUrl = (u: string): boolean =>
  Boolean(
    u &&
      u.length &&
      /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u)
  );
