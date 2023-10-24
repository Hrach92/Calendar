import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentDay, dayList, host } from "../instance";
import {
  SampleData,
  addEvents,
  getEventDate,
  setDay,
  setMode,
  setMonth,
  setNotesOpen,
} from "../../store/reducer/sampleReducer";
import {
  Tabs,
  closeSmall,
  descriptionOpen,
} from "../../store/reducer/tabReducer";
import moment, { weekdaysShort } from "moment";
import Link from "next/link";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";
import { Box } from "@mui/material";
import { BarOpen } from "../../store/reducer/menuReducer";
import WeekDays from "./weekDays";
import sxStyle from "./sxStyle.sx";

function Month(): JSX.Element {
  const { openNotes, year, month, color, events } = useSelector(SampleData);
  const { description } = useSelector(Tabs);
  const { leftBarOpen } = useSelector(BarOpen);
  const [descriptions, setDescriptions] = useState({});
  const dispatch = useDispatch();
  const [dayDate, setDayDate] = useState({});

  useEffect(() => {
    host.get("event").then((res) => {
      dispatch(addEvents(res.data));
    });
  }, [openNotes, description]);

  const days = useMemo(() => {
    return dayList(year, month.monthNumber);
  }, [year, month.monthNumber]);

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
