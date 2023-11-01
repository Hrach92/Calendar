import { memo, useCallback } from "react";
import moment from "moment";
import { Box } from "@mui/material";
import { setNotesOpen } from "../../../store/reducer/sampleReducer";
import sxStyle from "./sxStyle.sx";
import { useDispatch } from "../../../hooks/redux";

type HourTypes = {
  hours?: any;
  currentDay?: any;
};
const Hours = ({ hours, currentDay }: HourTypes) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => dispatch(setNotesOpen(true)), [dispatch]);

  const hourFormat = useCallback(
    (hour: string, format: string) =>
      `${hour}` === moment().format("h") &&
      format === moment().format("A") &&
      currentDay,
    [currentDay],
  );

  return (
    <>
      {hours.map(({ hour, format, id }: any) => (
        <Box sx={sxStyle.dayRow} key={id} onClick={onClick}>
          <Box sx={sxStyle.hour}>
            {id === 0 ? "GMT+04" : `${hour}${format}`}
          </Box>
          <Box sx={sxStyle.hourNotes}>
            {hourFormat(hour, format) && <Box sx={sxStyle.redLine} />}
          </Box>
        </Box>
      ))}
    </>
  );
};
export default memo(Hours);
