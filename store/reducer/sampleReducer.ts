import { createSlice } from "@reduxjs/toolkit";
import {
  count,
  currentMonth,
  dayCount,
  getCurrentMonth,
  hoursOfDay,
  years,
} from "../../dependencies/instance";
import { SampleReducerTypes } from "./types";
import { RootState } from "../store";
import { Mode } from "../../dependencies/types";

const initialState: SampleReducerTypes = {
  years,
  year: new Date().getFullYear(),
  month: currentMonth,
  count,
  mode: Mode.MONTH,
  day: new Date().getDate(),
  hoursOfDay,
  dayCount,
  notes: [
    { img: "/google.png", title: "Keep", id: 1 },
    { img: "/notes.png", title: "Notes", id: 2 },
    { img: "/contact.png", title: "Contacts", id: 3 },
    { img: "/google-maps.png", title: "Maps", id: 4 },
    { img: "/button.png", title: "Add", id: 5 },
  ],
  events: {
    dayEvents: [],
    hourEvents: [],
  },
  eventsWithoutHour: false,
  eventDate: "",
  colors: [],
  color: { id: 0, color: "rgb(117, 117, 226)" },
  openNotes: false,
  time: {
    left: "",
    right: "",
    leftFormat: "",
    rightFormat: "",
    leftId: 0,
    rightId: 0,
    hour: 0,
  },
  rooms: [],
  room: "",
};

export const Features = createSlice({
  name: "features",
  initialState,
  reducers: {
    setMode: (state, { payload }) => {
      state.mode = payload;
    },
    setDate: (state, { payload: { day, month, year } = {} }) => {
      state.month = getCurrentMonth(+month);
      state.day = day;
      state.year = year;
    },
    getLocaleDate: (state) => {
      state.month = getCurrentMonth(new Date().getMonth() + 1);
      state.year = new Date().getFullYear();
      state.day = new Date().getDate();
    },
    addEvents: (state, { payload }) => {
      const dayEvents: any[] = [];
      const arr = payload.filter(
        ({ hourMode }: { hourMode: boolean }) => hourMode === false,
      );
      arr.map((v: any) => {
        const eventWithId = v.data.events.map((item: any, i: number) => {
          if (i === 0) {
            return { ...item, title: v.title, id: v.id, mainTitle: v.title };
          }
          return { ...item, title: "", id: v.id, mainTitle: v.title };
        });
        dayEvents.push(...eventWithId);
      });
      const hourEvents: any[] = payload.filter(
        ({ hourMode }: { hourMode: boolean }) => hourMode === true,
      );
      state.events = {
        dayEvents: arr.length > 0 ? [...dayEvents] : [],
        hourEvents: hourEvents.length > 0 ? [...hourEvents] : [],
      };
    },
    getEventDate: (state, { payload }) => {
      state.eventDate = payload;
    },
    setNotesOpen: (state, { payload }) => {
      state.openNotes = payload;
    },
    setTimeRange: (state, { payload }) => {
      state.time = payload;
    },
    setColor: (state, { payload }) => {
      state.color = payload;
    },
    setColors: (state, { payload }) => {
      state.colors = payload;
    },
    setHourMode: (state, { payload }) => {
      state.eventsWithoutHour = payload;
    },
  },
});
export const {
  setMode,
  setDate,
  getLocaleDate,
  addEvents,
  getEventDate,
  setNotesOpen,
  setTimeRange,
  setColor,
  setColors,
  setHourMode,
} = Features.actions;
export const SampleData = (state: RootState) => state.sampleData;
export default Features.reducer;
/* const sampleReducer = (state = initialState, action) => {
    switch (type) {
        case SET_MONTH:
            return {
                ...state,
                // month: {...state.months.find(v=>v.id===id)}
                month: { ...state.months.find(v => v.id === id) }
            }

        default:
            return state;
    }
}

export default sampleReducer */
