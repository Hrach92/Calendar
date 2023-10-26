import moment from "moment";
import React, { memo, useCallback, useMemo } from "react";
import { dayList } from "../../../dependencies/instance";
import {
  SampleData,
  setDate,
  setMode,
} from "../../../store/reducer/sampleReducer";
import WeekDays from "../../smallCalendar/weekDays";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../../hooks/redux";
import { Mode } from "../../../dependencies/types";
import { useRouter } from "next/router";

function YearComponent({ numberOfMonth, title, key }: any): JSX.Element {
  const { month, year, day } = useSelector(SampleData);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const days = useMemo(() => {
    return dayList(year, numberOfMonth);
  }, [month, numberOfMonth]);

  const dayStyle = useCallback(
    (id: string, dayNumber: number) => {
      const date = new Date();
      return year === date.getFullYear() &&
        moment(id).format("MM") === `${date.getMonth() + 1}` &&
        dayNumber === date.getDate()
        ? sxStyle.currentDay
        : sxStyle.monthDay;
    },
    [year]
  );

  const goToDayPage = useCallback(() => {
    dispatch(setDate({ day, month: numberOfMonth, year }));
    dispatch(setMode(Mode.MONTH));
    push(`/${Mode.MONTH}/${year}/${numberOfMonth}`);
  }, []);

  return (
    <Box sx={sxStyle.container} key={key} onClick={goToDayPage}>
      <Box sx={sxStyle.title}>{title}</Box>
      <WeekDays />
      <Box sx={sxStyle.month}>
        {days.map(({ dayNumber, id }) => {
          const sx = dayStyle(id, dayNumber);
          return (
            <Box key={id} sx={sx}>
              {dayNumber}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default memo(YearComponent);
