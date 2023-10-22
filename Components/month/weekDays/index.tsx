import { useSelector } from "react-redux";
import { BarOpen } from "../../../store/reducer/menuReducer";
import sxStyle from "./sxStyle.sx";
import { Box } from "@mui/material";
import { weekdaysShort } from "moment";
import { memo, useMemo } from "react";

function WeekDaysShort() {
  const { leftBarOpen } = useSelector(BarOpen);
  const days = weekdaysShort();

  return (
    <Box sx={sxStyle.weekdays}>
      {days.map((day: string) => (
        <Box key={day} sx={sxStyle.weekday}>
          {day}
        </Box>
      ))}
    </Box>
  );
}
export default memo(WeekDaysShort);
