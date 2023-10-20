import moment, { weekdaysMin } from "moment";
import React, { memo, useMemo } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { dayList } from "../../instance";
import {
  setDay,
  setMode,
  setMonth,
} from "../../../store/reducer/sampleReducer";

function YearComponent({ numberOfMonth, title }: any): JSX.Element {
  const state = useSelector((state) => (state as any).sampleData) /*
    Const tabs = useSelector(state => state.tabs)*/,
    bar = useSelector((state) => (state as any).openBar),
    dispatch = useDispatch(),
    days = useMemo(() => {
      return dayList(state.year, numberOfMonth);
    }, [state.month, numberOfMonth]);
  return (
    <div style={bar.leftBarOpen ? { margin: "0" } : {}}>
      <div className={styles.monthTitle}>{title}</div>
      <div className={styles.monthWeekDay}>
        {weekdaysMin().map((day, i) => {
          return (
            <div style={{ width: "30px" }} key={i}>
              {day}
            </div>
          );
        })}
      </div>
      <div className={styles.monthDaysForYear}>
        {days.map(({ dayNumber, id, monthId }) => {
          return (
            <div
              key={id}
              style={
                moment(`${id}`).format("MM") !== numberOfMonth
                  ? { color: "grey", margin: `0 ${bar.leftBarOpen ? 2 : 3}px` }
                  : { margin: `0 ${bar.leftBarOpen ? 2 : 3}px` }
              }
              onClick={() => {
                return (
                  dispatch(setDay(dayNumber)),
                  dispatch(setMonth(+monthId)),
                  dispatch(setMode("day"))
                );
              }}
              className={
                state.year === new Date().getFullYear() &&
                moment(id).format("MM") === `${new Date().getMonth() + 1}` &&
                dayNumber === new Date().getDate()
                  ? styles.currentDay
                  : styles.monthDay
              }
            >
              <Link href={`/day/${state.year}/${monthId}/${dayNumber}`}>
                {dayNumber}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(YearComponent);
