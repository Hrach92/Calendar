import { memo, useCallback, useMemo, useState } from "react";
import { currentDay, dayList } from "../../dependencies/instance";
import {
  SampleData,
  setDate,
  setMode,
} from "../../store/reducer/sampleReducer";
import { Tabs } from "../../store/reducer/tabReducer";
import Link from "next/link";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";
import { Box } from "@mui/material";
import WeekDays from "./weekDays";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../hooks/redux";
import { MonthTypes } from "../../store/reducer/types";
import { Mode } from "../../dependencies/types";

function Month(): JSX.Element {
  const { openNotes, year, month } = useSelector(SampleData);
  const dispatch = useDispatch();

  const { description } = useSelector(Tabs);
  const [descriptions] = useState({});
  const [dayDate] = useState({});
  const { monthNumber }: MonthTypes = month;

  const days = useMemo(() => {
    return dayList(year, +monthNumber);
  }, [year, monthNumber]);

  const setChoseDate = useCallback(
    (dayNumber: number, monthId: string, year: string) => {
      dispatch(setDate({ day: dayNumber, month: monthId, year }));
      dispatch(setMode(Mode.DAY));
    },
    []
  );

  return (
    <Box sx={sxStyle.container}>
      {openNotes && dayDate && <MyNotes />}
      <WeekDays />
      <Box sx={sxStyle.box}>
        {days.map(({ dayNumber, id, month, monthId, year }) => {
          let current = currentDay(id);

          return (
            <Box key={id} sx={sxStyle.day}>
              <Link href={`/day/${year}/${+monthId}/${dayNumber}`}>
                <Box
                  sx={sxStyle.dayContainer}
                  onClick={() => setChoseDate(dayNumber, monthId, year)}
                >
                  <Box sx={[current && sxStyle.currentDay, sxStyle.number]}>
                    {dayNumber === 1 && month} {dayNumber}
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>

      {description && <ChangeEvents description={descriptions} />}
    </Box>
  );
}

export default memo(Month);
