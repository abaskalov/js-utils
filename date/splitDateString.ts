import { padStart } from "../string/padStart";

export const splitDateString = (
  date: string
): {
  hours: string;
  minutes: string;
  seconds: string;
  month: string;
  day: string;
  year: string;
} => {
  const falsyValue = {
    hours: "0",
    minutes: "0",
    seconds: "0",
    month: "0",
    day: "0",
    year: "0",
  };

  const splitDate: string[] = date.split(" ");

  const time = splitDate[1];
  const hms = time.split(":");

  if (hms.length < 3) {
    return falsyValue;
  }

  let hours = padStart(hms[0]);
  hours = hours === "24" ? "00" : hours;

  const minutes = padStart(hms[1]);
  const seconds = padStart(hms[2]);

  const mdy = splitDate[0].split("/");

  if (mdy.length < 3) {
    return falsyValue;
  }

  const month = padStart(parseInt(mdy[0]).toString());
  const day = padStart(parseInt(mdy[1]).toString());
  const year = parseInt(mdy[2]).toString();

  return { hours, minutes, seconds, month, day, year };
};
