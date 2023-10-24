import { memo, useCallback, useMemo } from "react";
import { setNotesOpen } from "../../../store/reducer/sampleReducer";
import { BarOpen } from "../../../store/reducer/menuReducer";
import moment from "moment";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../../hooks/redux";

type HourTypes = {
  hours?: any;
  currentDay?: any;
};
function Hours({ hours, currentDay }: HourTypes) {
  const dispatch = useDispatch();
  const { leftBarOpen } = useSelector(BarOpen);

  const style = useMemo(
    () => (leftBarOpen ? sxStyle.hourNotesWithBarOpen : sxStyle.hourNotes),
    [leftBarOpen]
  );

  const onClick = useCallback(
    () => dispatch(setNotesOpen(true)),
    [setNotesOpen]
  );

  const hourFormat = useCallback(
    (hour: string, format: string) => {
      return (
        `${hour}` === moment().format("h") &&
        format === moment().format("A") &&
        currentDay
      );
    },
    [currentDay]
  );

  return (
    <>
      {hours.map(({ hour, format, id }: any) => (
        <Box sx={sxStyle.dayRow} key={id} onClick={onClick}>
          <Box sx={sxStyle.hour}>
            {id === 0 ? "GMT+04" : `${hour}${format}`}
          </Box>
          <Box sx={style}>
            {hourFormat(hour, format) && (
              <Box
                sx={sxStyle.redLine}
                style={{
                  width: `${leftBarOpen ? 900 : 1135}px`,
                }}
              ></Box>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
}
export default memo(Hours);
