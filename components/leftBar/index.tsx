import React, { memo } from "react";

import { Box, Button } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import SmallCalendar from "../smallCalendar";
import Calendars from "./calendars";

function LeftBar() {
  return (
    <Box sx={sxStyle.container}>
      <Button sx={sxStyle.create}>Create</Button>
      <SmallCalendar sx={sxStyle.calendar} />
      <Calendars />
    </Box>
  );
}
export default memo(LeftBar);
