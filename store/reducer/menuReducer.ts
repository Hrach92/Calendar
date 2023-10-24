import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  rightBarOpen: false,
  leftBarOpen: false,
};

export const BarReducer = createSlice({
  name: "bars",
  initialState,
  reducers: {
    leftMenuBarOpen: (state, action) => {
      state.leftBarOpen = action.payload;
    },
    rightMenuBarOpen: (state, action) => {
      state.rightBarOpen = action.payload;
    },
  },
});
export const { leftMenuBarOpen, rightMenuBarOpen } = BarReducer.actions;
export const BarOpen = (state: RootState) => state.openBar;
export default BarReducer.reducer;
