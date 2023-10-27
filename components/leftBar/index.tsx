import React, { memo } from "react";

import { Box, Button, Typography } from "@mui/material";
import SmallCalendar from "../smallCalendar";
import Languages from "../../features/lang";
import Calendars from "./calendars";
import Trans from "../trans";
import Settings from "../header/settings";
import Support from "../header/support";
import sxStyle from "./sxStyle.sx";

function LeftBar() {
  return (
    <Box sx={sxStyle.container}>
      <Button sx={sxStyle.create}>
        <Trans word="create" />
      </Button>
      <SmallCalendar sx={sxStyle.calendar} />
      <Calendars />
      <Box sx={sxStyle.options}>
        <Box sx={sxStyle.lang}>
          <Typography sx={sxStyle.text}>
            <Trans word="language" />
          </Typography>
          <Languages />
        </Box>
        <Support />
        <Settings />
      </Box>
    </Box>
  );
}
export default memo(LeftBar);
