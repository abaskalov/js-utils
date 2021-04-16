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

    let hours = hms[0].padStart(2, "0");
    hours = hours === "24" ? "00" : hours;

    const minutes = hms[1].padStart(2, "0");
    const seconds = hms[2].padStart(2, "0");

    const mdy = splitDate[0].split("/");

    if (mdy.length < 3) {
        return falsyValue;
    }

    const month = parseInt(mdy[0]).toString().padStart(2, "0");
    const day = parseInt(mdy[1]).toString().padStart(2, "0");
    const year = parseInt(mdy[2]).toString();

    return { hours, minutes, seconds, month, day, year };
};
