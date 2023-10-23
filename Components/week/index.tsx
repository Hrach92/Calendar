import moment, { weekdaysShort } from "moment";
import { useSelector } from "react-redux";
import React, { memo, useCallback, useMemo } from "react";
import { weekDays } from "../instance";
import { SampleData } from "../../store/reducer/sampleReducer";
import { Box, Typography } from "@mui/material";
import sxStyle from "./sxStyle.sx";

function Week(): JSX.Element {
  const { year, day, month } = useSelector(SampleData);
  /*   Let newId = moment(`${state.sampleData.year}${state.sampleData.month.monthNumber}${state.sampleData.day>9?state.sampleData.day:'0'+state.sampleData.day}`).format('YYYYMMDD') */
  const weekDay = useMemo(() => {
    return weekDays(year, month.monthNumber, day);
  }, [year, month.monthNumber, day]);

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

  const hours = useCallback((hour: string, format: string, day: string) => {
    return (
      hour === moment().format("h") &&
      format === moment().format("A") &&
      day === moment().format("YYYYMMDD")
    );
  }, []);

  const title = moment().format("hh:mm");

  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.dayNames}>
        {days.map((weekday, i) => {
          const isCurrent = current(year, month.monthNumber, day, i);
          return (
            <Box key={weekday} sx={sxStyle.day}>
              <Typography sx={sxStyle.name}>{weekday}</Typography>
              <Typography>{day}</Typography>
            </Box>
          );
        })}
      </Box>

      <Box sx={sxStyle.dayContainer}>
        {weekDay.map(({ hour, format, day, id }) => {
          const current = hours(hour, format, day);
          return (
            <Box key={id}>
              {current && <Box title={title} sx={sxStyle.current}></Box>}
              <Box sx={sxStyle.hour}>
                {id % 8 === 0 &&
                  `${id === 0 ? "GMT+04" : hour}${id === 0 ? "" : format}`}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default memo(Week);
