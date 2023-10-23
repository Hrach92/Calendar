import styles from "../Table.module.css";
import { IoCloseSharp } from "react-icons/io5";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SampleData, setNotesOpen } from "../../store/reducer/sampleReducer";
import { host, setEvents } from "../instance";
import SelectHour from "../selectionOfHours/hours";
import RightSelection from "../selectionOfHours/rightSelection";
import { IoTimeOutline } from "react-icons/io5";

import moment from "moment";
import SmallCalendar from "../smallCalendar";
import useOnChange from "../../hooks/useOnChange";
import { Input } from "@mui/material";

function MyNotes({ date }: any) {
  const { time, openNotes } = useSelector(SampleData);
  const dispatch = useDispatch();
  const [hourModeDis, setHourModeDis] = useState(false);
  const [dateRange, setDateRange] = useState(false);
  const [dates, setDates] = useState({
    year: date.year,
    month: date.monthNumber,
    monthShortName: "",
    day: date.dayNumber,
    dayName: "",
  });
  const { text, onChange } = useOnChange();

  const postEvents = (e: any, post: any) => {
    e.preventDefault();
    host.post("event", { ...setEvents(post) }).then((res) => {
      console.log(res);
    });
    return (
      setHourModeDis(false), dispatch(setNotesOpen(false)), setDateRange(false)
    );
  };
  return (
    <div className={styles.notes} style={openNotes ? {} : { display: "none" }}>
      <div
        className={styles.closeBtn}
        onClick={() => {
          return (
            dispatch(setNotesOpen(false)),
            setHourModeDis(false),
            setDateRange(false)
          );
        }}
      >
        <IoCloseSharp />
      </div>
      <Input
        type={"text"}
        value={text}
        onChange={onChange}
        className={styles.noteInput}
        placeholder={"Add Title and Time"}
      />
      <IoTimeOutline className={styles.hourIcon} />
      <div className={styles.eventDay}>
        <span>
          {date.nameOfDay},{date.month} {date.dayNumber}
        </span>{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            return dateRange ? setDateRange(false) : setDateRange(true);
          }}
        >
          - {dates.dayName ? dates.dayName : date.nameOfDay},
          {dates.monthShortName ? dates.monthShortName : date.month}{" "}
          {dates.day ? dates.day : date.dayNumber}
        </span>{" "}
      </div>
      {hourModeDis ? null : (
        <div className={styles.hourSelect}>
          <div>
            <SelectHour />
          </div>
          -
          <div>
            <RightSelection />
          </div>
        </div>
      )}
      <div className={styles.check}>
        <input
          type={"checkbox"}
          onChange={(e) => {
            return setHourModeDis(e.target.checked), setDateRange(false);
          }}
        />
        All day
      </div>
      <div className={styles.closeEvent}>
        <button
          className={styles.cancel}
          onClick={() => {
            return (
              dispatch(setNotesOpen(false)),
              setHourModeDis(false),
              setDateRange(false)
            );
          }}
        >
          cancel
        </button>
        <button
          onClick={(e) => {
            return hourModeDis
              ? postEvents(e, {
                  eventstart: 0,
                  end_time: "",
                  start_time: "",
                  time: 0,
                  hour_mode: false,
                  title: text ? text : "No title",
                  date_id: date.id,
                  year: date.year,
                  month: date.month,
                  date_range:
                    moment(
                      `${dates.year}${dates.month}${
                        dates.day > 9 ? dates.day : "0" + dates.day
                      }`
                    ).diff(moment(date.id), "days") + 1,
                })
              : postEvents(e, {
                  hour_mode: true,
                  title: text || "No title",
                  date_id: date.id,
                  year: date.year,
                  month: date.month,
                  eventstart: Math.min(time.rightId, time.leftId)
                    ? Math.min(time.rightId, time.leftId)
                    : 9,
                  time: time.hour ? time.hour : 9,
                  start_time: time.left
                    ? `${time.left}${time.leftFormat}`
                    : "9AM",
                  end_time: time.right
                    ? `${time.right}${time.rightFormat}`
                    : "6PM",
                  date_range: 1,
                  data: {},
                });
          }}
          className={styles.save}
        >
          save
        </button>
      </div>
      {dateRange ? (
        <div className={styles.smallCalendar}>
          <SmallCalendar />
        </div>
      ) : null}
    </div>
  );
}

export default memo(MyNotes);
