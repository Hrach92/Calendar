import { memo, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { currentDay, dayList } from "../../dependencies/instance";
import {
  SampleData,
  setDate,
  setMode,
} from "../../store/reducer/sampleReducer";
import { Tabs } from "../../store/reducer/tabReducer";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";
import WeekDays from "./weekDays";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../hooks/redux";
import { MonthTypes } from "../../store/reducer/types";
import { Mode } from "../../dependencies/types";
import Trans from "../trans";

type DayTypes = {
  dayNumber: number;
  id: string;
  month: any;
  monthId: string;
  year: string;
};

const Month = (): JSX.Element => {
  const { openNotes, year, month } = useSelector(SampleData);
  const dispatch = useDispatch();

  const { description } = useSelector(Tabs);
  const [descriptions] = useState({});
  const [dayDate] = useState({});
  const { monthNumber }: MonthTypes = month;

  const days = useMemo(() => dayList(year, monthNumber), [year, monthNumber]);

  const setChoseDate = useCallback(
    (dayNumber: number, monthId: string, year: string): void => {
      dispatch(setDate({ day: dayNumber, month: monthId, year }));
      dispatch(setMode(Mode.DAY));
    },
    [dispatch]
  );

  return (
    <Box sx={sxStyle.container}>
      {openNotes && dayDate && <MyNotes />}
      <WeekDays />
      <Box sx={sxStyle.box}>
        {days.map(
          ({ dayNumber, id, month, monthId, year: currentYear }: DayTypes) => {
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
                        <Trans word={`monthsShort.${month}`} />
                      )}
                      {dayNumber}
                    </Box>
                  </Box>
                </Link>
              </Box>
            );
          }
        )}
      </Box>

      {description && <ChangeEvents description={descriptions} />}
    </Box>
  );
};

export default memo(Month);
