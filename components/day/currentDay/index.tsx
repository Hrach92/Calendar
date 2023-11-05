import { Box } from "@mui/material";
import { memo, useMemo } from "react";
import moment from "moment";
import sxStyle from "./sxStyle.sx";

import { SampleData } from "../../../store/reducer/sampleReducer";
import { useSelector } from "../../../hooks/redux";
import Trans from "../../trans";

type DayTypes = {
  currentDay?: boolean;
  newId?: string;
};
const CurrentDay = ({ currentDay, newId }: DayTypes) => {
  const { day } = useSelector(SampleData);

  const style = useMemo(
    () => ({ ...sxStyle.day, ...(currentDay && sxStyle.current) }),
    [currentDay],
  );

  const dayName = useMemo(() => moment(newId).format("ddd"), [newId]);

  return (
    <Box sx={style}>
      <Box sx={sxStyle.dayName}>
        <Trans word={`days.${dayName}`} />
      </Box>
      <Box>{day}</Box>
    </Box>
  );
};
export default memo(CurrentDay);
