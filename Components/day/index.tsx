import moment from "moment";
import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { dateConverter, dayList, host } from "../instance";
import {
  SampleData,
  addEvents,
  setNotesOpen,
} from "../../store/reducer/sampleReducer";
import { Tabs, descriptionOpen } from "../../store/reducer/tabReducer";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";
import { BarOpen } from "../../store/reducer/menuReducer";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Events from "./events";
import CurrentDay from "./currentDay";

function Day(): JSX.Element {
  const { day, month, year, events, openNotes, color, hoursOfDay } =
    useSelector(SampleData);
  const { description } = useSelector(Tabs);
  const { leftBarOpen } = useSelector(BarOpen);

  const dispatch = useDispatch();
  const [descriptions, setDescriptions] = useState({});

  const { newId, currentDay, days } = useMemo(
    dateConverter(year, month.monthNumber, day),
    []
  );

  const style = useMemo(
    () => (leftBarOpen ? sxStyle.containerWithOpenBar : sxStyle.container),
    [leftBarOpen]
  );

  const currentDate = useMemo(
    () => days.find((v) => v.id === newId) || {},
    [days, newId]
  );

  useEffect(() => {
    host.get("event").then((res) => {
      dispatch(addEvents(res.data));
    });
  }, [openNotes, description]);

  return (
    <Box sx={style}>
      <Box sx={sxStyle.eventList}>
        {events.dayEvents.length !== 0 && (
          <Events
            events={events.dayEvents}
            setDescriptions={setDescriptions}
            newId={newId}
          />
        )}
      </Box>
      {openNotes && <MyNotes date={currentDate} />}

      <Box sx={sxStyle.rightLine} />
      <div className={styles.dayContainer}>
        <div className={styles.eventContainer}>
          {events.hourEvents.length !== 0
            ? events.hourEvents
                .filter(({ date_id }: any) => date_id === newId)
                .map((i: any) => (
                  <div
                    onClick={() => {
                      return description
                        ? (setDescriptions({}),
                          dispatch(descriptionOpen(false)))
                        : (setDescriptions(i), dispatch(descriptionOpen(true)));
                    }}
                    key={Math.random()}
                    className={styles.hourEvents}
                    style={{
                      backgroundColor: color.color,
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

        {hoursOfDay.map(({ hour, format, id }: any) => (
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
                leftBarOpen ? styles.hourNotesWithBarOpen : styles.hourNotes
              }
            >
              {`${hour}` === moment().format("h") &&
                format === moment().format("A") &&
                currentDay && (
                  <div
                    className={styles.redLine}
                    style={{
                      width: `${leftBarOpen ? 900 : 1135}px`,
                      marginTop: `${parseInt(moment().format("mm")) * 0.8}px`,
                    }}
                  ></div>
                )}
            </div>
          </div>
        ))}
      </div>
      <CurrentDay newId={newId} currentDay={currentDay} />
      {description && <ChangeEvents description={descriptions} />}
    </Box>
  );
}

export default memo(Day);
