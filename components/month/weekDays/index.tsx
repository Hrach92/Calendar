import sxStyle from "./sxStyle.sx";
import { Box } from "@mui/material";
import { weekdaysShort } from "moment";
import { memo } from "react";

function WeekDaysShort() {
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
