import dayjs from "dayjs";

export function getRemaning(timestampMs) {
    const timestamoDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    return {
        seconds: getRemaningSeconds(nowDayjs, timestamoDayjs),
        minutes: getRemaningMinutes(nowDayjs, timestamoDayjs),
        hours: getRemaningHours(nowDayjs, timestamoDayjs),
        days: getRemaningDays(nowDayjs, timestamoDayjs),
    }
}

function getRemaningSeconds(nowDayjs, timestamoDayjs) {
const seconds = timestamoDayjs.diff(nowDayjs, 'seconds') % 60;
return padWithZeros(seconds, 2)
}

function getRemaningMinutes(nowDayjs, timestamoDayjs) {
    const minutes = timestamoDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes,2)
}

function getRemaningHours(nowDayjs, timestamoDayjs) {
    const hours = timestamoDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2)
}

function getRemaningDays(nowDayjs, timestamoDayjs) {
    const days = timestamoDayjs.diff(nowDayjs, 'days');
    return days.toString()
}

function padWithZeros(number, minLength){
    const numberString = number.toString()
    if(numberString.length >= minLength) return numberString
    return "0".repeat(minLength - numberString.length) + numberString
}










