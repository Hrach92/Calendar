import { useSelector } from "react-redux";
import { SampleData } from "../../store/reducer/sampleReducer";

import React, { memo, useState } from "react";
import { dayList } from "../instance";
import { useMemo } from "react";
import { Box, Modal } from "@mui/material";
import Header from "./header";
import sxStyle from "./sxStyle.sx";
import WeekDays from "./weekDays";
import MonthDays from "./monthDays";

type CalendarTypes = {
  open?: boolean;
  onClose?: () => void;
};

function SmallCalendar({ open = false, onClose }: CalendarTypes) {
  const { month, year } = useSelector(SampleData);

  const [date, setDate] = useState({
    year: year,
    month: month.monthNumber,
  });

  const days = useMemo(() => {
    return dayList(date.year, date.month);
  }, [date.year, date.month]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={sxStyle.container}>
        <Header date={date} setDate={setDate} />
        <Box sx={sxStyle.month}>
          <WeekDays />
          <MonthDays days={days} year={year} date={date} />
        </Box>
      </Box>
    </Modal>
  );
}
export default memo(SmallCalendar);
