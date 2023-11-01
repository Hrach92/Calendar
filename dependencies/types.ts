export enum Mode {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

export type Target = { target: { value: string } };
export type Lang = {
  locale: string;
  locales: string[];
  defaultLocale: string;
};

export enum Months {
  January = "january",
  February = "february",
  March = "march",
  April = "april",
  May = "may",
  June = "june",
  July = "july",
  August = "august",
  September = "september",
  October = "october",
  November = "november",
  December = "december",
}

export enum Days {
  Sun = "Sun",
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
}

export type Options = {
  [key: string]: string;
};

export type HourTypes = {
  hour: string;
  format: string;
  day: string;
  id: number;
};

export type DayTypes = {
  dayNumber: number;
  id: string;
  month: any;
  monthId: string;
  year: string;
};
