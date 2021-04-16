export const detectTz = (): string =>
  (Intl &&
    Intl.DateTimeFormat &&
    Intl.DateTimeFormat().resolvedOptions &&
    Intl.DateTimeFormat().resolvedOptions().timeZone) ||
  "UTC";
