import moment, { weekdaysShort } from "moment";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import React, { memo, useMemo } from "react";
import { weekDays } from "../instance";

function Week(): JSX.Element {
  const state = useSelector((state) => state),
    /*   Let newId = moment(`${state.sampleData.year}${state.sampleData.month.monthNumber}${state.sampleData.day>9?state.sampleData.day:'0'+state.sampleData.day}`).format('YYYYMMDD') */
    weekDay = useMemo(() => {
      return weekDays(
        (state as any).sampleData.year,
        (state as any).sampleData.month.monthNumber,
        (state as any).sampleData.day
      );
    }, [
      (state as any).sampleData.year,
      (state as any).sampleData.month.monthNumber,
      (state as any).sampleData.day,
    ]);
  return (
    <div
      className={styles.container}
      style={
        (state as any).openBar.leftBarOpen
          ? {}
          : { width: "1225px", marginLeft: "10px" }
      }
    >
      <div
        className={styles.dayNames}
        style={(state as any).openBar.leftBarOpen ? { left: "325px" } : {}}
      >
        {weekdaysShort().map((weekday, i) => {
          const day = moment(
              `${(state as any).sampleData.year}${
                (state as any).sampleData.month.monthNumber
              }${
                (state as any).sampleData.day > 9
                  ? (state as any).sampleData.day
                  : `0${(state as any).sampleData.day}`
              }`
            )
              .startOf("week")
              .add(i, "day")
              .date(),
            number = moment(
              `${(state as any).sampleData.year}${
                (state as any).sampleData.month.monthNumber
              }${day > 9 ? day : `0${day}`}`
            ).format("YYYYMMDD");
          return (
            <div key={Math.random()}>
              <div
                style={
                  (state as any).openBar.leftBarOpen ? { width: "130px" } : {}
                }
                className={styles.stylesDay}
              >
                {weekday}
              </div>
              <div
                className={styles.dayNumberContainer}
                style={
                  (state as any).openBar.leftBarOpen ? { width: "130px" } : {}
                }
              >
                <div
                  className={styles.dayNumber}
                  style={
                    (state as any).openBar.leftBarOpen
                      ? number === moment().format("YYYYMMDD")
                        ? {
                            marginLeft: "45px",
                            backgroundColor: "blue",
                            color: "white",
                          }
                        : { marginLeft: "45px" }
                      : number === moment().format("YYYYMMDD")
                      ? { backgroundColor: "blue", color: "white" }
                      : {}
                  }
                >
                  {day}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={styles.dayContainer}
        style={{
          position: "relative",
          marginTop: "40px",
          left: "20px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {weekDay.map(({ hour, format, day, id }) => (
          <div key={id}>
            {hour === moment().format("h") &&
            format === moment().format("A") &&
            day === moment().format("YYYYMMDD") ? (
              <div
                title={moment().format("hh:mm")}
                style={{
                  position: "absolute",
                  marginTop: `${parseInt(moment().format("mm")) * 0.8}px`,
                  height: "1px",
                  width: `${(state as any).openBar.leftBarOpen ? 130 : 163}px`,
                  border: "1px solid red",
                }}
              ></div>
            ) : null}
            <div
              style={
                (state as any).openBar.leftBarOpen
                  ? id % 8 == 0
                    ? { width: "50px" }
                    : { width: "130px" }
                  : id % 8 == 0
                  ? { width: "50px" }
                  : {}
              }
              className={styles.hour}
            >
              {id % 8 === 0
                ? `${id === 0 ? "GMT+04" : hour}${id === 0 ? "" : format}`
                : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(Week);
