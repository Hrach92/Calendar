import moment from "moment";
import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { dayList, host } from "../instance";
import { addEvents, setNotesOpen } from "../../store/reducer/sampleReducer";
import { descriptionOpen } from "../../store/reducer/tabReducer";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";

function Day(): JSX.Element {
  const state = useSelector((state) => (state as any).sampleData),
    tabs = useSelector((state) => (state as any).tabs),
    bars = useSelector((state) => (state as any).openBar),
    events = useSelector((state) => (state as any).sampleData.events),
    dispatch = useDispatch(),
    [description, setDescription] = useState({}),
    newId = moment(
      `${state.year}${state.month.monthNumber}${
        state.day > 9 ? state.day : `0${state.day}`
      }`
    ).format("YYYYMMDD"),
    currentDay =
      moment(newId).format("YYYYMMDD") === moment().format("YYYYMMDD"),
    days = useMemo(() => {
      return dayList(state.year, state.month.monthNumber);
    }, [state.year, state.month.monthNumber]);
  useEffect(() => {
    host.get("event").then((res) => {
      dispatch(addEvents(res.data));
    });
  }, [state.openNotes, tabs.description]);
  return (
    <div
      className={
        bars.leftBarOpen ? styles.containerWithOpenbar : styles.container
      }
    >
      <div className={styles.eventlist}>
        {events.dayEvents.length !== 0
          ? events.dayEvents
              .filter(({ date_id }: any) => date_id === newId)
              .map((i: any) => (
                <div
                  key={Math.random()}
                  onClick={() => {
                    tabs.description
                      ? (setDescription({}), dispatch(descriptionOpen(false)))
                      : (setDescription(i), dispatch(descriptionOpen(true)));
                  }}
                  className={styles.events}
                  style={{ backgroundColor: state.color.color }}
                >
                  {i.title}
                </div>
              ))
          : null}
      </div>

      {state.openNotes ? (
        <MyNotes date={days.find((v) => v.id === newId)} />
      ) : null}

      <div className={styles.rightLine} />
      <div className={styles.dayContainer}>
        <div className={styles.eventContainer}>
          {events.hourEvents.length !== 0
            ? events.hourEvents
                .filter(({ date_id }: any) => date_id === newId)
                .map((i: any) => (
                  <div
                    onClick={() => {
                      return tabs.description
                        ? (setDescription({}), dispatch(descriptionOpen(false)))
                        : (setDescription(i), dispatch(descriptionOpen(true)));
                    }}
                    key={Math.random()}
                    className={styles.hourEvents}
                    style={{
                      backgroundColor: state.color.color,
                      marginTop: `${i.eventstart * 48}px`,
                      height: `${48 * i.time}px`,
                    }}
                  >
                    <div className={styles.eventTime}>
                      {i.start_time} - {i.end_time}
                    </div>
                    <div
                      className={styles.eventDescription}
                      style={{ height: `${i.time * 48 - 35}px` }}
                    >
                      {i.title}
                    </div>
                  </div>
                ))
            : null}
        </div>

        {state.hoursOfDay.map(({ hour, format, id }: any) => (
          <div
            className={styles.dayRow}
            key={id}
            onClick={() => {
              return dispatch(setNotesOpen(true));
            }}
          >
            <div className={styles.hour}>
              {id === 0 ? "GMT+04" : `${hour}${format}`}
            </div>
            <div
              className={
                bars.leftBarOpen
                  ? styles.hourNotesWithBarOpen
                  : styles.hourNotes
              }
            >
              {`${hour}` === moment().format("h") &&
              format === moment().format("A") &&
              currentDay ? (
                <div
                  className={styles.redLine}
                  style={{
                    width: `${bars.leftBarOpen ? 900 : 1135}px`,
                    marginTop: `${parseInt(moment().format("mm")) * 0.8}px`,
                  }}
                ></div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div
        className={
          bars.leftBarOpen ? styles.currentWithBarOpen : styles.current
        }
        style={
          bars.leftBarOpen
            ? currentDay
              ? {
                  backgroundColor: "blue",
                }
              : {}
            : currentDay
            ? {
                backgroundColor: "blue",
              }
            : {}
        }
      >
        <div className={styles.dayName}>{moment(newId).format("ddd")}</div>

        <div>{state.day}</div>
      </div>

      {tabs.description ? <ChangeEvents description={description} /> : null}
    </div>
  );
}

export default memo(Day);
