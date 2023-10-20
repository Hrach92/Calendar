import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dayList, host } from "../instance";
import {
  addEvents,
  getEventDate,
  setDay,
  setMode,
  setMonth,
  setNotesOpen,
} from "../../store/reducer/sampleReducer";
import styles from "./styles.module.css";
import { closeSmall, descriptionOpen } from "../../store/reducer/tabReducer";
import moment, { weekdaysShort } from "moment";
import Link from "next/link";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";

function Month(): JSX.Element {
  const state = useSelector((state) => (state as any).sampleData);
  const tabs = useSelector((state) => (state as any).tabs);
  const bar = useSelector((state) => (state as any).openBar);
  const events = useSelector((state) => (state as any).sampleData.events),
    [description, setDescription] = useState({}),
    dispatch = useDispatch(),
    [dayDate, setDayDate] = useState({});
  useEffect(() => {
    host.get("event").then((res) => {
      dispatch(addEvents(res.data));
    });
  }, [state.openNotes, tabs.description]);
  const days = useMemo(() => {
    return dayList(state.year, state.month.monthNumber);
  }, [state.year, state.month.monthNumber]);
  return (
    <div
      className={
        bar.leftBarOpen ? styles.container : styles.containerWithOpenBar
      }
      onClick={() => dispatch(closeSmall(false))}
    >
      <div className={styles.leftLine} />

      {state.openNotes && dayDate ? <MyNotes date={dayDate} /> : null}

      <div className={styles.weekdays}>
        {weekdaysShort().map((weekday) => (
          <div
            key={Math.random()}
            className={
              bar.leftBarOpen ? styles.weekdayWithBaropen : styles.weekday
            }
          >
            {weekday}
          </div>
        ))}
      </div>

      {days.map(
        ({ dayNumber, id, month, monthNumber, monthId, nameOfDay, year }) => {
          let current =
            moment(`${id}`).format("YYYYMMDD") === moment().format("YYYYMMDD");
          return (
            <div key={id}>
              {events.dayEvents.length > 0 ? (
                events.dayEvents.filter((v: any) => v.date_id === id).length ===
                0 ? null : (
                  <div
                    onClick={() => dispatch(setNotesOpen(false))}
                    className={styles.dayEvents}
                  >
                    {events.dayEvents
                      .filter((v: any) => v.date_id === id)
                      .map((v: any) => {
                        return (
                          <div
                            onClick={() => {
                              return tabs.description
                                ? (setDescription({}),
                                  dispatch(descriptionOpen(false)))
                                : (setDescription(v),
                                  dispatch(descriptionOpen(true)));
                            }}
                            key={Math.random()}
                            className={styles.dayEvent}
                            style={
                              v.eventDayStart
                                ? {
                                    borderRadius: `${
                                      v.date_range === 1 ? "6px" : "6px 0 0 6px"
                                    }`,
                                    backgroundColor: state.color.color,
                                    width: `${bar.leftBarOpen ? 139 : 175}px`,
                                  }
                                : v.eventDayEnd
                                ? {
                                    borderRadius: "0 6px 6px 0",
                                    width: "135px",
                                    backgroundColor: state.color.color,
                                  }
                                : {
                                    backgroundColor: state.color.color,
                                    width: `${bar.leftBarOpen ? 139 : 175}px`,
                                  }
                            }
                          >
                            {v.title}
                          </div>
                        );
                      })}
                  </div>
                )
              ) : null}
              {events.hourEvents.find((v: any) => v.date_id === id) !==
              undefined ? (
                <div className={styles.hourEventList}>
                  {events.hourEvents
                    .filter(({ date_id }: any) => date_id === id)
                    .map((i: any) => {
                      return (
                        <div
                          className={styles.hourEvents}
                          style={{ backgroundColor: state.color.color }}
                          onClick={() => {
                            return tabs.description
                              ? (setDescription({}),
                                dispatch(descriptionOpen(false)))
                              : (setDescription(i),
                                dispatch(descriptionOpen(true)));
                          }}
                          key={Math.random()}
                        ></div>
                      );
                    })}
                </div>
              ) : null}
              <div>
                <Link href={`/day/${year}/${+monthId}/${dayNumber}`}>
                  <div
                    onClick={() => {
                      return (
                        dispatch(setDay(+dayNumber)),
                        dispatch(setMonth(+monthId)),
                        dispatch(setMode("day")),
                        dispatch(
                          getEventDate({
                            dayNumber,
                            id,
                            month,
                            monthNumber,
                            monthId,
                            nameOfDay,
                            year,
                          })
                        )
                      );
                    }}
                    style={
                      bar.leftBarOpen
                        ? monthNumber !== state.month.monthNumber && !current
                          ? { marginLeft: "55px", color: "rgb(168, 168, 179)" }
                          : { marginLeft: "55px" }
                        : monthNumber !== state.month.monthNumber && !current
                        ? { color: "rgb(168, 168, 179)" }
                        : {}
                    }
                    className={current ? styles.currentDay : styles.number}
                  >
                    {dayNumber === 1 ? month : null} {dayNumber}
                  </div>
                </Link>
              </div>
              <div
                onClick={() => {
                  return (
                    state.openNotes
                      ? dispatch(setNotesOpen(false))
                      : dispatch(setNotesOpen(true)),
                    dispatch(descriptionOpen(false)),
                    setDayDate({
                      dayNumber,
                      id,
                      month,
                      monthNumber,
                      monthId,
                      nameOfDay,
                      year,
                    })
                  );
                }}
                style={
                  bar.leftBarOpen
                    ? days.length === 42
                      ? { height: "96px" }
                      : {}
                    : days.length === 42
                    ? { height: "96px" }
                    : {}
                }
                className={bar.leftBarOpen ? styles.dayWithOpenBar : styles.day}
              ></div>
            </div>
          );
        }
      )}

      {tabs.description ? <ChangeEvents description={description} /> : null}
    </div>
  );
}

export default memo(Month);
