import { DateTime } from "luxon";

export function getEventDate(startDate: string, endDate: string) {
  const startTime = DateTime.fromFormat(
    startDate,
    "yyyy-MM-dd HH:mm:ss"
  ).toFormat("MMMM dd");
  const endTime = DateTime.fromFormat(endDate, "yyyy-MM-dd HH:mm:ss").toFormat(
    "dd"
  );
  const year = endDate?.split("-")[0];

  return `${startTime} to ${endTime}, ${year}`;
}

export function getEventTime(startDate: string, endDate: string) {
  const startTime = DateTime.fromFormat(
    startDate,
    "yyyy-MM-dd HH:mm:ss"
  ).toFormat("");
}
