import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import {
  SampleData,
  setDay,
  setMonth,
  setYear,
} from "../../../store/reducer/sampleReducer";

function LeftNRight() {
  const state = useSelector(SampleData),
    dispatch = useDispatch();
  if ((state as any).mode === "month") {
    return (
      <div className={styles.leftRight}>
        <Link
          href={`/${(state as any).mode}/${
            (state as any).month.id === 1
              ? (state as any).year - 1
              : (state as any).year
          }/${
            (state as any).month.id === 1 ? 12 : (state as any).month.id - 1
          }`}
        >
          <div
            onClick={() => {
              if ((state as any).month.id === 1) {
                return (
                  dispatch(setMonth(12)),
                  dispatch(setYear((state as any).year - 1))
                );
              } else if (
                (state as any).month.id === 3 &&
                (state as any).day > 28
              ) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        0
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth((state as any).month.id - 1))
                );
              } else {
                return dispatch(setMonth((state as any).month.id - 1));
              }
            }}
            className={styles.leftRightBtn}
          >
            <ChevronLeftOutlinedIcon />
          </div>
        </Link>
        <Link
          href={`/${(state as any).mode}/${
            (state as any).month.id === 12
              ? (state as any).year + 1
              : (state as any).year
          }/${
            (state as any).month.id === 12 ? 1 : (state as any).month.id + 1
          }`}
        >
          <div
            onClick={() => {
              if ((state as any).month.id === 12) {
                return (
                  dispatch(setMonth(1)),
                  dispatch(setYear((state as any).year + 1))
                );
              } else if (
                (state as any).month.id === 1 &&
                (state as any).day > 28
              ) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id + 1,
                        0
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth((state as any).month.id + 1))
                );
              } else {
                return dispatch(setMonth((state as any).month.id + 1));
              }
            }}
            className={styles.leftRightBtn}
          >
            <ChevronRightOutlinedIcon />
          </div>
        </Link>
      </div>
    );
  } else if ((state as any).mode === "year") {
    return (
      <div className={styles.leftRight}>
        <Link
          href={`/${(state as any).mode}/${(state as any).year - 1}/${
            (state as any).month.id
          }`}
        >
          <div
            onClick={() => {
              return dispatch(setYear((state as any).year - 1));
            }}
            className={styles.leftRightBtn}
          >
            <ChevronLeftOutlinedIcon />
          </div>
        </Link>
        <Link
          href={`/${(state as any).mode}/${(state as any).year + 1}/${
            (state as any).month.id
          }`}
        >
          <div
            onClick={() => {
              return dispatch(setYear((state as any).year + 1));
            }}
            className={styles.leftRightBtn}
          >
            <ChevronRightOutlinedIcon />
          </div>
        </Link>
      </div>
    );
  } else if ((state as any).mode === "day") {
    return (
      <div className={styles.leftRight}>
        <Link
          href={`/${(state as any).mode}/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day - 1
            ).getMonth() === 11 &&
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day
            ).getDate() === 1
              ? (state as any).year - 1
              : (state as any).year
          }/${
            (state as any).day === 1
              ? (state as any).month.id === 1
                ? 12
                : (state as any).month.id - 1
              : (state as any).month.id
          }/${
            (state as any).day === 1
              ? new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  0
                ).getDate()
              : (state as any).day - 1
          }`}
        >
          <div
            onClick={() => {
              if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day - 1
                ).getMonth() === 11 &&
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day
                ).getDate() === 1
              ) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        0
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth(12)),
                  dispatch(setYear((state as any).year - 1))
                );
              } else if ((state as any).day === 1) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        0
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth((state as any).month.id - 1))
                );
              } else {
                return dispatch(setDay((state as any).day - 1));
              }
            }}
            className={styles.leftRightBtn}
          >
            <ChevronLeftOutlinedIcon />
          </div>
        </Link>
        <Link
          href={`/${(state as any).mode}/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day + 1
            ).getMonth() === 0 &&
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day + 1
            ).getDate() === 1
              ? (state as any).year + 1
              : (state as any).year
          }/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day + 1
            ).getDate() === 1
              ? (state as any).month.id === 12
                ? 1
                : (state as any).month.id + 1
              : (state as any).month.id
          }/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day + 1
            ).getDate() === 1
              ? 1
              : (state as any).day + 1
          }`}
        >
          <div
            onClick={() => {
              if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day + 1
                ).getMonth() === 0 &&
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day + 1
                ).getDate() === 1
              ) {
                return (
                  dispatch(setDay(1)),
                  dispatch(setMonth(1)),
                  dispatch(setYear((state as any).year + 1))
                );
              } else if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day + 1
                ).getDate() === 1
              ) {
                return (
                  dispatch(setDay(1)),
                  dispatch(setMonth((state as any).month.id + 1))
                );
              }
              return dispatch(setDay((state as any).day + 1));
            }}
            className={styles.leftRightBtn}
          >
            <ChevronRightOutlinedIcon />
          </div>
        </Link>
      </div>
    );
  } else if ((state as any).mode === "week") {
    return (
      <div className={styles.leftRight}>
        <Link
          href={`/${(state as any).mode}/${
            (state as any).month.id === 1 &&
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day - 7
            ).getDate() > 24
              ? (state as any).year - 1
              : (state as any).year
          }/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day - 7
            ).getDate() >= 24
              ? (state as any).month.id === 1 && (state as any).day - 7 <= 0
                ? 12
                : (state as any).month.id - 1
              : (state as any).month.id
          }/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day - 7
            ).getDate() >= 24
              ? new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day - 7
                ).getDate()
              : (state as any).day - 7
          }`}
        >
          <div
            onClick={() => {
              if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day
                ).getDate() <= 7 &&
                (state as any).month.id === 1
              ) {
                return (
                  dispatch(setMonth(12)),
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        (state as any).day - 7
                      ).getDate()
                    )
                  ),
                  dispatch(setYear((state as any).year - 1))
                );
              } else if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day - 7
                ).getDate() > 21
              ) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        (state as any).day - 7
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth((state as any).month.id - 1))
                );
              } else if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day - 7
                ).getDate() > 24
              ) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        (state as any).day - 7
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth((state as any).month.id - 1))
                );
              }
              return dispatch(setDay((state as any).day - 7));
            }}
            className={styles.leftRightBtn}
          >
            <ChevronLeftOutlinedIcon />
          </div>
        </Link>
        <Link
          href={`/${(state as any).mode}/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day
            ).getDate() > 24 && (state as any).month.id === 12
              ? (state as any).year + 1
              : (state as any).year
          }/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day + 7
            ).getDate() <= 7
              ? (state as any).month.id === 12
                ? 1
                : (state as any).month.id + 1
              : (state as any).month.id
          }/${
            new Date(
              (state as any).year,
              (state as any).month.id - 1,
              (state as any).day + 7
            ).getDate() <= 7
              ? new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day + 7
                ).getDate()
              : (state as any).day + 7
          }`}
        >
          <div
            onClick={() => {
              if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day
                ).getDate() > 24 &&
                (state as any).month.id === 12
              ) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        (state as any).day + 7
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth(1)),
                  dispatch(setYear((state as any).year + 1))
                );
              } else if (
                new Date(
                  (state as any).year,
                  (state as any).month.id - 1,
                  (state as any).day + 7
                ).getDate() <= 7
              ) {
                return (
                  dispatch(
                    setDay(
                      new Date(
                        (state as any).year,
                        (state as any).month.id - 1,
                        (state as any).day + 7
                      ).getDate()
                    )
                  ),
                  dispatch(setMonth((state as any).month.id + 1))
                );
              }
              return dispatch(setDay((state as any).day + 7));
            }}
            className={styles.leftRightBtn}
          >
            <ChevronRightOutlinedIcon />
          </div>
        </Link>
      </div>
    );
  }
}
export default LeftNRight;
