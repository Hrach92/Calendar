import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { weekdaysMin, weekdaysShort } from "moment";
import { memo } from "react";
import Trans from "../../trans";

function WeekDays() {
  const dayShort = weekdaysShort();

  return (
    <Box sx={sxStyle.container}>
      {dayShort.map((day) => (
        <Box key={day} sx={sxStyle.item}>
          <Trans word={`days.${day}`} />
        </Box>
      ))}
    </Box>
  );
}
export default memo(WeekDays);
