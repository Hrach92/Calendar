import { Box, Typography } from "@mui/material";
import { memo, useCallback } from "react";
import sxStyle from "./sxStyle.sx";
import moment, { weekdaysShort } from "moment";
import { useSelector } from "react-redux";
import { SampleData } from "../../../store/reducer/sampleReducer";

function Days() {
  const { year, day, month } = useSelector(SampleData);

  const current = useCallback(
    (year: number, month: any, day: number, i: number) => {
      const dayShort = moment(
        `${year}${month.monthNumber}${day > 9 ? day : `0${day}`}`
      )
        .startOf("week")
        .add(i, "day")
        .date();
      const number = moment(
        `${year}${month.monthNumber}${dayShort > 9 ? dayShort : `0${dayShort}`}`
      ).format("YYYYMMDD");
      return number === moment().format("YYYYMMDD");
    },
    []
  );

  const days = weekdaysShort();

  return (
    <Box sx={sxStyle.container}>
      {days.map((weekday: string, i: number) => {
        const isCurrent = current(year, month.monthNumber, day, i);
        return (
          <Box key={weekday} sx={sxStyle.day}>
            <Typography sx={sxStyle.name}>{weekday}</Typography>
            <Typography>{day}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
export default memo(Days);
