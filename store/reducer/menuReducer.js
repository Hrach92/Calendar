import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rightBarOpen: false,
  leftBarOpen: false,
};

export const BarReducer = createSlice({
  name: "bars",
  initialState,
  reducers: {
    leftMenuBarOpen: (state, action) => {
      console.log(action.payload, 455);
      state.leftBarOpen = action.payload;
    },
    rightMenuBarOpen: (state, action) => {
      state.rightBarOpen = action.payload;
    },
  },
});
export const { leftMenuBarOpen, rightMenuBarOpen } = BarReducer.actions;
export const BarOpen = (state) => state.openBar;
export default BarReducer;
