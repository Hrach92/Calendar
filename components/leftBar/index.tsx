import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  SampleData,
  setColor,
  setColors,
  setDay,
  setMode,
  setMonth,
  setYear,
} from "../../store/reducer/sampleReducer";
import table from "../Table.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import React, { memo, useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { currentDay, dayList, host } from "../instance";
import moment, { weekdaysMin } from "moment";
import { AiOutlineCheck } from "react-icons/ai";
import { Tabs, closeColor, closeCreate } from "../../store/reducer/tabReducer";
import { useMemo } from "react";
import { BarOpen } from "../../store/reducer/menuReducer";
import { Box, Button } from "@mui/material";

function LeftBar() {
  const { month, year, color, colors } = useSelector(SampleData);
  const { create } = useSelector(Tabs);
  const bars = useSelector(BarOpen);
  const dispatch = useDispatch();

  const [date, setDate] = useState({
    year: year,
    month: month.monthNumber,
  });

  const days = useMemo(() => {
    return dayList(date.year, date.month);
  }, [date.year, date.month]);

  return (
    <Box className={table.lnb}>
      <Button className={table.lnbBtn}>Create</Button>
      {create ? (
        <Box className={table.lnbEvents}>
          <Link href={"/events"}>
            <Box className={table.lnbEvent}>Events</Box>
          </Link>
          <Box
            onClick={() => {
              return dispatch(closeCreate(false));
            }}
            className={table.lnbEvent}
          >
            Tasks
          </Box>
        </Box>
      ) : null}
      <Box className={table.lmbTitle}>
        {moment(`${date.year}${date.month}`).format("MMMM")} {date.year}
      </Box>
      <Box
        className={table.lnbLeftBtn}
        onClick={() => {
          return setDate({
            year: date.month === "01" ? date.year - 1 : date.year,
            month:
              date.month === "01"
                ? "12"
                : `${
                    +date.month - 1 > 9
                      ? +date.month - 1
                      : "0" + (+date.month - 1)
                  }`,
          });
        }}
      >
        <ChevronLeftOutlinedIcon />
      </Box>
      <Box
        className={table.lnbRightBtn}
        onClick={() => {
          return setDate({
            year: date.month === "12" ? date.year + 1 : date.year,
            month:
              date.month === "12"
                ? "01"
                : `${
                    +date.month + 1 > 9
                      ? +date.month + 1
                      : "0" + (+date.month + 1)
                  }`,
          });
        }}
      >
        <ChevronRightOutlinedIcon />
      </Box>
      <Box className={table.leftBarMonth}>
        <Box className={table.smallWeekDays}>
          {weekdaysMin().map((day) => {
            return (
              <Box key={Math.random()} className={table.smallWeekDay}>
                {day}
              </Box>
            );
          })}
        </Box>
        {days.map(({ dayNumber, id, monthNumber, monthId }) => {
          let current = currentDay(id);

          return (
            <Link key={id} href={`/${"day"}/${year}/${monthId}/${dayNumber}`}>
              <Box
                onClick={() => {
                  return (
                    dispatch(setDay(dayNumber)),
                    dispatch(setMonth(+monthId)),
                    dispatch(setYear(date.year)),
                    dispatch(setMode("day"))
                  );
                }}
                style={
                  monthNumber !== date.month && !current
                    ? { color: "rgb(168, 168, 179)" }
                    : {}
                }
                className={
                  current
                    ? table.leftBarMonthCurrentDay
                    : table.leftBarMonthDays
                }
              >
                {dayNumber}
              </Box>
            </Link>
          );
        })}
      </Box>
      <Box className={table.myCalendar}>
        <Box
          className={table.myCalendarSettings}
          onClick={() => {
            return color
              ? dispatch(closeColor(false))
              : dispatch(closeColor(true));
          }}
        >
          <Box
            className={table.calendarColor}
            style={{ backgroundColor: color.color }}
          ></Box>
          <Box className={table.myCalendarTitle}>My Calendar</Box>
          <BiDotsVerticalRounded className={table.dots} />
        </Box>
      </Box>
      {color ? (
        <Box className={table.palette}>
          {colors.map(({ color, id }: any, i: number) => {
            return (
              <Box
                key={i}
                className={table.colors}
                style={{ backgroundColor: color }}
              >
                {color.color === color ? (
                  <AiOutlineCheck
                    style={{ margin: "3px 2px", color: "white" }}
                  />
                ) : (
                  ""
                )}
              </Box>
            );
          })}
        </Box>
      ) : null}
    </Box>
  );
}
export default memo(LeftBar);
