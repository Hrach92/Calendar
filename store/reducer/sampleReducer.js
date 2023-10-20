import {
  count,
  dayCount,
  hoursOfDay,
  months,
  years,
} from "../../Components/instance";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  years: years,
  year: new Date().getFullYear(),
  months: months,
  month: { ...months.find((v) => v.id === new Date().getMonth() + 1) },
  count: count,
  mode: "month",
  day: new Date().getDate(),
  hoursOfDay: hoursOfDay,
  dayCount: dayCount,
  notes: [
    { img: "/google.png", title: "Keep", id: 1 },
    { img: "/notes.png", title: "Notes", id: 2 },
    { img: "/contact.png", title: "Contacts", id: 3 },
    { img: "/google-maps.png", title: "Maps", id: 4 },
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
    setMonth: (state, action) => {
      state.month = { ...state.months.find((v) => v.id === action.payload) };
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setDay: (state, action) => {
      state.day = action.payload;
    },
    addEvents: (state, action) => {
      let dayEvents = [];
      let arr = action.payload.filter(({ hour_mode }) => hour_mode === false);
      arr.map((v) => {
        let eventWithId = v.data.events.map((item, i) => {
          if (i === 0) {
            return { ...item, title: v.title, id: v.id, mainTitle: v.title };
          }
          return { ...item, title: "", id: v.id, mainTitle: v.title };
        });
        dayEvents.push(...eventWithId);
      });
      let hourEvents = action.payload.filter(
        ({ hour_mode }) => hour_mode === true
      );
      state.events = {
        dayEvents: arr.length > 0 ? [...dayEvents] : [],
        hourEvents: hourEvents.length > 0 ? [...hourEvents] : [],
      };
    },
    getLocaleDate: (state, action) => {
      state.month = {
        ...state.months.find((v) => v.id === new Date().getMonth() + 1),
      };
      state.year = new Date().getFullYear();
      state.day = new Date().getDate();
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
  setMonth,
  setMode,
  setYear,
  setDay,
  addEvents,
  getLocaleDate,
  getEventDate,
  setNotesOpen,
  setTimeRange,
  setColor,
  setColors,
  setHourMode,
} = Features.actions;
export const SampleData = (state) => state.sampleData;
export default Features;
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
