import { Box } from "@mui/material";
import { memo, useMemo } from "react";
import sxStyle from "./sxStyle.sx";

import { BarOpen } from "../../../store/reducer/menuReducer";
import moment from "moment";
import { SampleData } from "../../../store/reducer/sampleReducer";
import { useSelector } from "../../../hooks/redux";

type DayTypes = {
  currentDay?: boolean;
  newId?: string;
};
function CurrentDay({ currentDay, newId }: DayTypes) {
  const { leftBarOpen } = useSelector(BarOpen);
  const { day } = useSelector(SampleData);

  const color = useMemo(() => (currentDay ? sxStyle.background : {}), []);

  const style = useMemo(() => {
    return leftBarOpen
      ? [sxStyle.currentWithBarOpen, color]
      : [sxStyle.current, color];
  }, []);

  const dayName = useMemo(() => moment(newId).format("ddd"), []);

  return (
    <Box sx={style}>
      <Box sx={sxStyle.dayName}>{dayName}</Box>
      <Box>{day}</Box>
    </Box>
  );
}
export default memo(CurrentDay);
