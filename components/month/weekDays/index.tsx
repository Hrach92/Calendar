import { Box } from "@mui/material";
import { weekdaysShort } from "moment";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import Trans from "../../trans";

const WeekDaysShort = () => {
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
};
export default memo(WeekDaysShort);
