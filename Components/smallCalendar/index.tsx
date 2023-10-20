import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  setDay,
  setMode,
  setMonth,
  setYear,
  setNotesOpen,
} from "../../store/reducer/sampleReducer";
import styles from "./styles.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import React, { memo, useState } from "react";
import { dayList } from "../instance";
import moment, { weekdaysMin } from "moment";
import { useMemo } from "react";

function SmallCalendar() {
  const state = useSelector((state) => (state as any).sampleData),
    tabs = useSelector((state) => (state as any).tabs),
    bars = useSelector((state) => (state as any).openBar),
    dispatch = useDispatch(),
    [date, setDate] = useState({
      year: state.year,
      month: state.month.monthNumber,
    }),
    days = useMemo(() => {
      return dayList(date.year, date.month);
    }, [date.year, date.month]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {moment(`${date.year}${date.month}`).format("MMMM")} {date.year}
      </div>
      <div
        className={styles.leftBtn}
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
      </div>
      <div
        className={styles.rightBtn}
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
      </div>
      <div className={styles.month}>
        <div className={styles.smallWeekDays}>
          {weekdaysMin().map((day) => {
            return (
              <div key={Math.random()} className={styles.smallWeekDay}>
                {day}
              </div>
            );
          })}
        </div>
        {days.map(({ dayNumber, id, monthNumber, monthId }) => {
          let current =
            moment(`${id}`).format("YYYYMMDD") === moment().format("YYYYMMDD");
          return (
            <Link
              key={id}
              href={`/${"day"}/${state.year}/${monthId}/${dayNumber}`}
            >
              <div
                onClick={() => {
                  return (
                    dispatch(setDay(dayNumber)),
                    dispatch(setMonth(+monthId)),
                    dispatch(setYear(date.year)),
                    dispatch(setMode("day"), dispatch(setNotesOpen(false)))
                  );
                }}
                style={
                  monthNumber !== date.month && !current
                    ? { color: "rgb(168, 168, 179)" }
                    : {}
                }
                className={
                  current ? styles.barMonthCurrentDay : styles.barMonthDays
                }
              >
                {dayNumber}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default memo(SmallCalendar);
