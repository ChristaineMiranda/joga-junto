import { DateTime } from "luxon";

export default function timeConverter(dateTime) {
    const brasiliaDate = DateTime.fromISO(dateTime, { zone: 'utc' }).setZone('America/Sao_Paulo');
    const day = brasiliaDate.c.day;
    const month = brasiliaDate.c.month;
    const hour = brasiliaDate.c.hour;
    const minute = brasiliaDate.c.minute;
    const dateFormat = day + '/' + month;
    let timeFormat = hour + "h" + minute;
    if(!minute) timeFormat = timeFormat + "0";
    return { dateFormat, timeFormat };
}