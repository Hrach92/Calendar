import sxStyle from "./sxStyle.sx";
import { Box } from "@mui/material";
import { weekdaysShort } from "moment";
import { memo, useEffect, useState } from "react";
import Trans from "../../trans";

function WeekDaysShort() {
  const days = weekdaysShort();

  const [x, setX] = useState(0);

  useEffect(() => {
    setX(x + 1);
  }, [setX]);

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
