import { Box, Typography } from "@mui/material";
import { SampleData } from "../../../store/reducer/sampleReducer";
import { useSelector } from "react-redux";
import sxStyle from "./sxStyle.sx";
import { memo } from "react";

type CalendarTypes = {
  onOpen?: () => void;
};
function VisibleDate({ onOpen = () => {} }: CalendarTypes) {
  const { day, month, year } = useSelector(SampleData);

  return (
    <Box sx={sxStyle.showDate} onClick={onOpen}>
      <Typography>{month.title}</Typography> <Typography>{day},</Typography>
      <Typography>{year}</Typography>
    </Box>
  );
}
export default memo(VisibleDate);
