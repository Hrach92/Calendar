export type ObjectTypes = {
  [key: string]: string | number | object | undefined;
};

export type MonthTypes = {
  title: string;
  dayCount: number;
  monthNumber: string;
  id: number;
};
export type SampleReducerTypes = {
  years: any[];
  year: number;
  month: MonthTypes;
  count: ObjectTypes;
  mode: string;
  day: number;
  hoursOfDay: any[];
  dayCount: any[];
  notes: ObjectTypes[];
  events: {
    dayEvents: any[];
    hourEvents: any[];
  };
  eventsWithoutHour: boolean;
  eventDate: string;
  colors: any[];
  color: ObjectTypes;
  openNotes: boolean;
  time: ObjectTypes;
  rooms: any[];
  room: string;
};
