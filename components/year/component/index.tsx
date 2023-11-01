import moment from "moment";
import React, { memo, useCallback, useMemo } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { dayList } from "../../../dependencies/instance";
import {
  SampleData,
  setDate,
  setMode,
} from "../../../store/reducer/sampleReducer";
import WeekDays from "../../smallCalendar/weekDays";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../../hooks/redux";
import { Mode } from "../../../dependencies/types";
import Trans from "../../trans";

type DayTypes = {
  dayNumber: number;
  id: string;
};
const YearComponent = ({ numberOfMonth, title, key }: any): JSX.Element => {
  const { year, day } = useSelector(SampleData);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const days = useMemo(
    (): DayTypes[] => dayList(year, numberOfMonth),
    [year, numberOfMonth]
  );

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
  }, [day, numberOfMonth, year, dispatch, push]);

  return (
    <Box sx={sxStyle.container} key={key} onClick={goToDayPage}>
      <Box sx={sxStyle.title}>
        <Trans word={`months.${title}`} />
      </Box>
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
};

export default memo(YearComponent);
