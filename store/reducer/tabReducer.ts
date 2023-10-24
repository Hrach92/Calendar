import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  description: false,
  color: false,
  create: false,
  small: false,
};
export const TabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    descriptionOpen: (state, action) => {
      state.description = action.payload;
    },
    closeColor: (state, action) => {
      state.color = action.payload;
    },
    closeCreate: (state, action) => {
      state.create = action.payload;
    },
    closeSmall: (state, action) => {
      state.small = action.payload;
    },
  },
});
export const { descriptionOpen, closeColor, closeCreate, closeSmall } =
  TabSlice.actions;
export const Tabs = (state: RootState) => state.tabs;
export default TabSlice.reducer;
