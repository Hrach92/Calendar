import React, { memo } from "react";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Days from "./days";
import Hours from "./hours";

const Week = (): JSX.Element => (
  /*   Let newId = moment(`${state.sampleData.year}${state.sampleData.month.monthNumber}${state.sampleData.day>9?state.sampleData.day:'0'+state.sampleData.day}`).format('YYYYMMDD') */

  <Box sx={sxStyle.container}>
    <Days />
    <Hours />
  </Box>
);

export default memo(Week);
