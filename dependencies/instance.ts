import axios from "axios";
import moment from "moment";
import { MonthTypes } from "../store/reducer/types";
import { Mode, Months } from "./types";

export const years = [
  ...Array(100)
    .fill(1950)
    .map((i, index) => i + index),
];

export const dayCount = Array(35)
  .fill({})
  .map((item, i) => {
    item.day = i + 1;
    item.id = i;
    return { ...item };
  });

export const hoursOfDay = [
  ...Array(24)
    .fill({})
    .map((item, i) => {
      if (i === 0) {
        item.id = i;
        item.hour = 12;
        item.format = "AM";
        return { ...item };
      }
      if (i === 12) {
        item.hour = `${i}`;
        item.format = "PM";
        item.id = i;
        return { ...item };
      }
      if (i > 12) {
        item.hour = `${i - 12}`;
        item.format = "PM";
        item.id = i;
        return { ...item };
      }
      item.hour = `${i}`;
      item.format = "AM";
      item.id = i;
      return { ...item };
    }),
];
export const count = {
  day: [
    ...Array(24)
      .fill("")
      .map((item, i) => {
        if (i > 12) {
          item = `${i}:AM`;
        } else if (i > 0) {
          item = `${i} PM`;
        }
        item = i;
        return item;
      }),
  ],
  month: [
    ...Array(35)
      .fill({})
      .map((item, i) => {
        item.day = i + 1;
        item.id = i;
        return { ...item };
      }),
  ],
};
export const host = axios.create({
  baseURL: "http://localhost:3001",
});
export function dayList(year: number, month: string): any {
  const startDay = moment(`${year}${month}`)
    .startOf(Mode.MONTH)
    .startOf(Mode.WEEK);
  const endDay = moment(`${year}${month}`).endOf(Mode.MONTH).endOf(Mode.WEEK);
  const arr = [];
  while (!startDay.isAfter(endDay)) {
    arr.push({
      dayNumber: startDay.date(),
      id: startDay.format("YYYYMMDD"),
      month: moment(startDay.format("YYYYMMDD")).format("MMM"),
      monthNumber: moment(startDay.format("YYYYMMDD")).format("MM"),
      monthId: moment(startDay.format("YYYYMMDD")).format("M"),
      year: startDay.date(startDay.date()).format("YYYY"),
      nameOfDay: startDay.date(startDay.date()).format("ddd"),
    });
    startDay.add(1, Mode.DAY);
  }
  return arr;
}
export function weekDays(year: number, month: number, day: number): any {
  let format = "";
  let hour = "";
  const dayHours = Array(192)
    .fill({})
    .map((item, i) => {
      if (i > 95 && i % 8 === 0) {
        if (i === 96) {
          item.hour = 12;
          hour = `${item.hour}`;
          item.format = "PM";
          format = item.format;
          item.day = "";
          item.id = i;
          return { ...item };
        }

        item.hour = (i - 96) / 8;
        hour = `${item.hour}`;
        item.format = "PM";
        format = item.format;
        item.day = "";
        item.id = i;
        return { ...item };
      }
      if (i % 8 === 0) {
        item.hour = i / 8;
        if (i === 0) {
          item.hour = 12;
        }
        hour = `${item.hour}`;
        item.format = "AM";
        format = item.format;
        item.day = "";
        item.id = i;
        return { ...item };
      }

      item.hour = hour;
      item.format = format;
      item.day = moment(`${year}${month}${day > 9 ? day : `0${day}`}`)
        .startOf(Mode.WEEK)
        .add((i % 8) - 1, Mode.DAY)
        .format("YYYYMMDD");
      item.id = i;
      return { ...item };
    });
  return dayHours;
}

export const dateConverter = (
  year: number,
  monthNumber: string,
  day: number,
): { newId: string; currentDay: boolean; days: any } => {
  const newId = moment(
    `${year}${monthNumber}${day > 9 ? day : `0${day}`}`,
  ).format("YYYYMMDD");
  const currentDay =
    moment(newId).format("YYYYMMDD") === moment().format("YYYYMMDD");
  const days = dayList(year, `${monthNumber}`);

  return { newId, currentDay, days };
};

export const margin = `${parseInt(moment().format("mm"), 10) * 0.8}px`;

export const currentDay = (id: string): boolean =>
  moment(`${id}`).format("YYYYMMDD") === moment().format("YYYYMMDD");

export const prev = (
  month: any,
  year: any,
): { year: string; month: string } => ({
  year: month === "01" ? year - 1 : year,
  month:
    month === "01" ? "12" : `${+month - 1 > 9 ? +month - 1 : `0${+month - 1}`}`,
});

export const next = (
  month: string,
  year: string,
): { year: string; month: string } => ({
  year: month === "12" ? year + 1 : year,
  month:
    month === "12" ? "01" : `${+month + 1 > 9 ? +month + 1 : `0${+month + 1}`}`,
});

export const months = [
  { title: Months.January, dayCount: 35, monthNumber: "01", id: 1 },
  { title: Months.February, dayCount: 35, monthNumber: "02", id: 2 },
  { title: Months.March, dayCount: 35, monthNumber: "03", id: 3 },
  { title: Months.April, dayCount: 35, monthNumber: "04", id: 4 },
  { title: Months.May, dayCount: 35, monthNumber: "05", id: 5 },
  { title: Months.June, dayCount: 35, monthNumber: "06", id: 6 },
  { title: Months.July, dayCount: 35, monthNumber: "07", id: 7 },
  { title: Months.August, dayCount: 35, monthNumber: "08", id: 8 },
  { title: Months.September, dayCount: 35, monthNumber: "09", id: 9 },
  { title: Months.October, dayCount: 35, monthNumber: "10", id: 10 },
  { title: Months.November, dayCount: 35, monthNumber: "11", id: 11 },
  { title: Months.December, dayCount: 35, monthNumber: "12", id: 12 },
];

export const currentMonth = (months.find(
  ({ id }) => id === new Date().getMonth() + 1,
) || {}) as MonthTypes;

export const getCurrentMonth = (monthId: number): MonthTypes =>
  months.find(({ id }) => id === monthId) || currentMonth;
