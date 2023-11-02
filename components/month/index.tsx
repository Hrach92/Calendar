import { memo, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { currentDay, dayList } from "../../dependencies/instance";
import {
  SampleData,
  setDate,
  setMode,
} from "../../store/reducer/sampleReducer";
import MyNotes from "../myNotes";
import WeekDays from "./weekDays";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../hooks/redux";
import { MonthTypes } from "../../store/reducer/types";
import { DayTypes, Mode } from "../../dependencies/types";
import Trans from "../trans";

const Month = (): JSX.Element => {
  const { openNotes, year, month } = useSelector(SampleData);
  const dispatch = useDispatch();

  const [dayDate] = useState({});
  const { monthNumber }: MonthTypes = month;

  const days = useMemo(() => dayList(year, monthNumber), [year, monthNumber]);

  const setChoseDate = useCallback(
    (dayNumber: number, monthId: string, currentYear: string): void => {
      dispatch(setDate({ day: dayNumber, month: monthId, year: currentYear }));
      dispatch(setMode(Mode.DAY));
    },
    [dispatch],
  );

  return (
    <Box sx={sxStyle.container}>
      {openNotes && dayDate && <MyNotes />}
      <WeekDays />
      <Box sx={sxStyle.box}>
        {days.map(
          ({
            dayNumber,
            id,
            month: currentMonth,
            monthId,
            year: currentYear,
          }: DayTypes) => {
            const current = currentDay(id);

            return (
              <Box key={id} sx={sxStyle.day}>
                <Link href={`/day/${currentYear}/${+monthId}/${dayNumber}`}>
                  <Box
                    sx={sxStyle.dayContainer}
                    onClick={() =>
                      setChoseDate(dayNumber, monthId, currentYear)
                    }
                  >
                    <Box sx={[current && sxStyle.currentDay, sxStyle.number]}>
                      {dayNumber === 1 && (
                        <Trans word={`monthsShort.${currentMonth}`} />
                      )}
                      {dayNumber}
                    </Box>
                  </Box>
                </Link>
              </Box>
            );
          },
        )}
      </Box>
    </Box>
  );
};

export default memo(Month);
