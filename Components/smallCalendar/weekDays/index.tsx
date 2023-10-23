import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { weekdaysMin } from "moment";
import { memo } from "react";

function WeekDays() {
  const dayShort = weekdaysMin();

  return (
    <Box sx={sxStyle.container}>
      {dayShort.map((day) => (
        <Box key={day} sx={sxStyle.item}>
          {day}
        </Box>
      ))}
    </Box>
  );
}
export default memo(WeekDays);
