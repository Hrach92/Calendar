import { Box } from "@mui/material";
import { weekdaysShort } from "moment";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import Trans from "../../trans";

const WeekDays = () => {
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
};
export default memo(WeekDays);
