import sxStyle from "./sxStyle.sx";
import { Box } from "@mui/material";
import { weekdaysShort } from "moment";
import { memo } from "react";
import Trans from "../../trans";

function WeekDaysShort() {
  const days = weekdaysShort();

  return (
    <Box sx={sxStyle.weekdays}>
      {days.map((day: string) => (
        <Box key={day} sx={sxStyle.weekday}>
          <Trans word={`days.${day}`} />
        </Box>
      ))}
    </Box>
  );
}
export default memo(WeekDaysShort);
