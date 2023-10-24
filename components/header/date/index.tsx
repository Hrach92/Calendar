import { Box, Typography } from "@mui/material";
import { SampleData } from "../../../store/reducer/sampleReducer";

import sxStyle from "./sxStyle.sx";
import { memo } from "react";
import { useSelector } from "../../../hooks/redux";

type CalendarTypes = {
  onOpen?: () => void;
};
function VisibleDate({ onOpen = () => {} }: CalendarTypes) {
  const { day, month, year } = useSelector(SampleData);

  return (
    <Box sx={sxStyle.showDate} onClick={onOpen}>
      <Typography>{month.title as string}</Typography>
      <Typography>{day},</Typography>
      <Typography>{year}</Typography>
    </Box>
  );
}
export default memo(VisibleDate);
