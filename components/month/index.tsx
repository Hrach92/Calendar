import { memo, useEffect, useMemo, useState } from "react";
import { currentDay, dayList, host } from "../../dependencies/instance";
import { SampleData, addEvents } from "../../store/reducer/sampleReducer";
import { Tabs, closeSmall } from "../../store/reducer/tabReducer";
import Link from "next/link";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";
import { Box } from "@mui/material";
import { BarOpen } from "../../store/reducer/menuReducer";
import WeekDays from "./weekDays";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../hooks/redux";
import { MonthTypes } from "../../store/reducer/types";

function Month(): JSX.Element {
  const { openNotes, year, month } = useSelector(SampleData);
  const { description } = useSelector(Tabs);
  const [descriptions] = useState({});
  const dispatch = useDispatch();
  const [dayDate] = useState({});
  const { monthNumber }: MonthTypes = month;

  useEffect(() => {
    host.get("event").then((res) => {
      dispatch(addEvents(res.data));
    });
  }, [openNotes, description]);

  const days = useMemo(() => {
    return dayList(year, monthNumber);
  }, [year, monthNumber]);

  return (
    <Box onClick={() => dispatch(closeSmall(false))} sx={sxStyle.container}>
      {openNotes && dayDate && <MyNotes />}
      <WeekDays />
      <Box sx={sxStyle.box}>
        {days.map(({ dayNumber, id, month, monthId, year }) => {
          let current = currentDay(id);

          return (
            <Box key={id} sx={sxStyle.day}>
              <Link href={`/day/${year}/${+monthId}/${dayNumber}`}>
                <Box sx={sxStyle.dayContainer}>
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
