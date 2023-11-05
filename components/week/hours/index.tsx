import { Box } from "@mui/material";
import { memo, useCallback, useMemo } from "react";
import moment from "moment";
import sxStyle from "./sxStyle.sx";

import { SampleData } from "../../../store/reducer/sampleReducer";
import { weekDays } from "../../../dependencies/instance";
import { useSelector } from "../../../hooks/redux";
import { HourTypes } from "../../../dependencies/types";

const Hours = () => {
  const { year, day, month } = useSelector(SampleData);

  const hours = useMemo(
    () => weekDays(year, +month.monthNumber, day),
    [year, month.monthNumber, day],
  );

  const dayTime = useCallback(
    (hour: string, format: string, currentDay: string) =>
      hour === moment().format("h") &&
      format === moment().format("A") &&
      currentDay === moment().format("YYYYMMDD"),
    [],
  );

  const title = moment().format("hh:mm");

  return (
    <Box sx={sxStyle.container}>
      {hours.map(({ hour, format, day: currentDay, id }: HourTypes) => {
        const current = dayTime(hour, format, currentDay);
        return (
          <Box key={id}>
            {current && <Box title={title} sx={sxStyle.current} />}
            <Box sx={sxStyle.hour}>
              {id % 8 === 0 &&
                `${id === 0 ? "GMT+04" : hour}${id === 0 ? "" : format}`}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default memo(Hours);
