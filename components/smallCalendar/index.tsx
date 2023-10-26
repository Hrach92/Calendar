import { SampleData } from "../../store/reducer/sampleReducer";

import React, { memo, useState } from "react";
import { dayList } from "../../dependencies/instance";
import { useMemo } from "react";
import { Box, Modal } from "@mui/material";
import Header from "./header";
import sxStyle from "./sxStyle.sx";
import WeekDays from "./weekDays";
import MonthDays from "./monthDays";
import { useSelector } from "../../hooks/redux";

function SmallCalendar({ sx, onClose }: any): JSX.Element {
  const { month, year } = useSelector(SampleData);

  const [date, setDate] = useState({
    year: year,
    month: month.monthNumber,
  });

  const days = useMemo(() => {
    return dayList(date.year, date.month);
  }, [date.year, date.month]);

  return (
    <Box sx={[sxStyle.container, sx]}>
      <Header date={date} setDate={setDate} />
      <Box sx={sxStyle.month}>
        <WeekDays />
        <MonthDays days={days} year={year} date={date} onClose={onClose} />
      </Box>
    </Box>
  );
}
export default memo(SmallCalendar);
