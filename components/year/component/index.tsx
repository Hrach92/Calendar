import moment from "moment";
import React, { memo, useCallback, useMemo } from "react";
import Link from "next/link";
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

function YearComponent({ numberOfMonth, title, key }: any): JSX.Element {
  const { month, year } = useSelector(SampleData);
  const dispatch = useDispatch();

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

  return (
    <Box sx={sxStyle.container} key={key}>
      <Box sx={sxStyle.title}>{title}</Box>
      <WeekDays />
      <Box sx={sxStyle.month}>
        {days.map(({ dayNumber, id, monthId }) => {
          const sx = dayStyle(id, dayNumber);
          return (
            <Box
              key={id}
              onClick={() => {
                dispatch(setDate({ day: dayNumber, month: +monthId, year }));
                dispatch(setMode(Mode.DAY));
              }}
              sx={sx}
            >
              <Link href={`/day/${year}/${monthId}/${dayNumber}`}>
                {dayNumber}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default memo(YearComponent);
