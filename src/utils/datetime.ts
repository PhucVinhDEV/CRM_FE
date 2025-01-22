import {
  LLL_DD_Y,
  YYYY_MM_DD,
  YYYY_MM_DD_HH_MM_SS,
} from "@/constants/datetime";
import { format } from "date-fns";
import dayjs from "dayjs";

// GET CURRENT DATE TIME
export const CURRENT_DATE_TIME = dayjs();

// GET CURRENT DATE TIME FORMAT 2024-07-18 12:00:00
export const CURRENT_DATE_TIME_FORMAT = dayjs().format(YYYY_MM_DD_HH_MM_SS);

// GET PREVIOUS 1 DAY
export const GET_PREVIOUS_DATE = CURRENT_DATE_TIME.subtract(2, "day").format(
  YYYY_MM_DD_HH_MM_SS,
);

export const formatDateTimelllddy = (date: Date) => {
  return format(date, LLL_DD_Y);
};

export const formatDateTimeToUnix = (date: string | undefined) => {
  return dayjs(date).unix();
};

export const convertUnixTimeToNewDate = (unix: number) => {
  return new Date(unix * 1000);
};

export const convertUnixTimeToYYYYMMDD = (date: number | undefined) => {
  if (!date) return;
  const datetime = dayjs.unix(date);
  return datetime.format(YYYY_MM_DD);
};

export const formatDateByType = (date: string, typeFormat: string) => {
  return dayjs(date).format(typeFormat);
};
