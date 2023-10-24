import moment, { weekdaysShort } from "moment";

import React, { memo, useCallback, useMemo } from "react";
import { weekDays } from "../../dependencies/instance";
import { SampleData } from "../../store/reducer/sampleReducer";
import { Box, Typography } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Days from "./days";
import Hours from "./hours";

function Week(): JSX.Element {
  /*   Let newId = moment(`${state.sampleData.year}${state.sampleData.month.monthNumber}${state.sampleData.day>9?state.sampleData.day:'0'+state.sampleData.day}`).format('YYYYMMDD') */

  return (
    <Box sx={sxStyle.container}>
      <Days />
      <Hours />
    </Box>
  );
}
export default memo(Week);
