import {
  count,
  currentMonth,
  dayCount,
  getCurrentMonth,
  hoursOfDay,
  months,
  years,
} from "../../dependencies/instance";
import { createSlice } from "@reduxjs/toolkit";
import { SampleReducerTypes } from "./types";
import { RootState } from "../store";
import { Mode } from "../../dependencies/types";

const initialState: SampleReducerTypes = {
  years: years,
  year: new Date().getFullYear(),
  month: currentMonth,
  count: count,
  mode: Mode.MONTH,
  day: new Date().getDate(),
  hoursOfDay: hoursOfDay,
  dayCount: dayCount,
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
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setDate: (state, action) => {
      const { day, month, year } = action.payload;
      console.log(action.payload);

      state.month = getCurrentMonth(+month);
      state.day = day;
      state.year = year;
    },
    getLocaleDate: (state) => {
      state.month = getCurrentMonth(new Date().getMonth() + 1);
      state.year = new Date().getFullYear();
      state.day = new Date().getDate();
    },
    addEvents: (state, action) => {
      let dayEvents: any[] = [];
      let arr = action.payload.filter(
        ({ hour_mode }: { hour_mode: boolean }) => hour_mode === false
      );
      arr.map((v: any) => {
        let eventWithId = v.data.events.map((item: any, i: number) => {
          if (i === 0) {
            return { ...item, title: v.title, id: v.id, mainTitle: v.title };
          }
          return { ...item, title: "", id: v.id, mainTitle: v.title };
        });
        dayEvents.push(...eventWithId);
      });
      let hourEvents: any[] = action.payload.filter(
        ({ hour_mode }: { hour_mode: boolean }) => hour_mode === true
      );
      state.events = {
        dayEvents: arr.length > 0 ? [...dayEvents] : [],
        hourEvents: hourEvents.length > 0 ? [...hourEvents] : [],
      };
    },
    getEventDate: (state, action) => {
      state.eventDate = action.payload;
    },
    setNotesOpen: (state, action) => {
      state.openNotes = action.payload;
    },
    setTimeRange: (state, action) => {
      state.time = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    setHourMode: (state, action) => {
      state.eventsWithoutHour = action.payload;
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
    switch (action.type) {
        case SET_MONTH:
            return {
                ...state,
                // month: {...state.months.find(v=>v.id===action.id)}
                month: { ...state.months.find(v => v.id === action.id) }
            }

        default:
            return state;
    }
}

export default sampleReducer */
