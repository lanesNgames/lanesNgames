import type { DayHours, Weekday } from "@/data/siteConfig";

const weekdayOrder: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

function normalizeWeekday(weekday: string): Weekday {
  const w = weekday.toLowerCase();
  switch (w) {
    case "monday":
    case "mon":
      return "monday";
    case "tuesday":
    case "tue":
    case "tues":
      return "tuesday";
    case "wednesday":
    case "wed":
      return "wednesday";
    case "thursday":
    case "thu":
    case "thur":
    case "thurs":
      return "thursday";
    case "friday":
    case "fri":
      return "friday";
    case "saturday":
    case "sat":
      return "saturday";
    case "sunday":
    case "sun":
      return "sunday";
    default:
      return "monday";
  }
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map((x) => Number(x));
  return h * 60 + m;
}

export function formatHours(hours: DayHours) {
  if (hours.closed) return "Closed";
  return `${hours.open}–${hours.close}`;
}

export function getCafeNow(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Monday";
  const hour = parts.find((p) => p.type === "hour")?.value ?? "00";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "00";

  return {
    weekday: normalizeWeekday(weekday),
    minutes: toMinutes(`${hour}:${minute}`)
  };
}

export function getTodayHours<T extends Record<Weekday, DayHours>>(
  allHours: T,
  weekday: Weekday
) {
  return allHours[weekday];
}

export function isOpenNow<T extends Record<Weekday, DayHours>>(
  allHours: T,
  weekday: Weekday,
  minutes: number
) {
  const hours = allHours[weekday];
  if (hours.closed) return false;
  const open = toMinutes(hours.open);
  const close = toMinutes(hours.close);
  return minutes >= open && minutes < close;
}

export function getHoursRows<T extends Record<Weekday, DayHours>>(allHours: T) {
  return weekdayOrder.map((day) => ({
    day,
    label: day.slice(0, 1).toUpperCase() + day.slice(1),
    hours: allHours[day]
  }));
}

