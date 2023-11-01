import React, { memo, useState, useMemo } from "react";
import { Box } from "@mui/material";
import { dayList } from "../../dependencies/instance";
import { SampleData } from "../../store/reducer/sampleReducer";
import Header from "./header";
import sxStyle from "./sxStyle.sx";
import WeekDays from "./weekDays";
import MonthDays from "./monthDays";
import { useSelector } from "../../hooks/redux";

const SmallCalendar = ({ sx, onClose }: any): JSX.Element => {
  const { month, year } = useSelector(SampleData);

  const [date, setDate] = useState({
    year,
    month: month.monthNumber,
  });

  const days = useMemo(
    () => dayList(date.year, date.month),
    [date.year, date.month]
  );

  return (
    <Box sx={[sxStyle.container, sx]}>
      <Header date={date} setDate={setDate} />
      <Box sx={sxStyle.month}>
        <WeekDays />
        <MonthDays days={days} year={year} date={date} onClose={onClose} />
      </Box>
    </Box>
  );
};
export default memo(SmallCalendar);
