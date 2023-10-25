import { Box, Typography } from "@mui/material";
import { memo, useCallback } from "react";
import sxStyle from "./sxStyle.sx";
import moment, { weekdaysShort } from "moment";

import { SampleData } from "../../../store/reducer/sampleReducer";
import { useSelector } from "../../../hooks/redux";
import { Mode } from "../../../dependencies/types";

function Days() {
  const { year, day, month } = useSelector(SampleData);

  const current = useCallback(
    (i: number) => {
      const dayShort = moment(
        `${year}${month.monthNumber}${day > 9 ? day : `0${day}`}`
      )
        .startOf(Mode.WEEK)
        .add(i, Mode.DAY)
        .date();

      const number = moment(
        `${year}${month.monthNumber}${dayShort > 9 ? dayShort : `0${dayShort}`}`
      ).format("YYYYMMDD");
      return {
        currentDay: number === moment().format("YYYYMMDD"),
        day: dayShort,
      };
    },
    [day, year, month]
  );

  const days = weekdaysShort();

  return (
    <Box sx={sxStyle.container}>
      {days.map((weekday: string, i: number) => {
        const isCurrent = current(i);

        return (
          <Box
            key={weekday}
            sx={[sxStyle.day, isCurrent.currentDay && sxStyle.current]}
          >
            <Typography sx={sxStyle.name}>{weekday}</Typography>
            <Typography>{isCurrent.day}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
export default memo(Days);
