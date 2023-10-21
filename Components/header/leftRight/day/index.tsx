import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SampleData,
  setDay,
  setMonth,
  setYear,
} from "../../../../store/reducer/sampleReducer";
import { Box } from "@mui/material";
import sxStyle from "../sxStyle.sx";

const Day = (): JSX.Element => {
  const { day, month, mode, year } = useSelector(SampleData);
  const dispatch = useDispatch();

  const nextDay = useMemo(
    () => new Date(year, month.id - 1, day + 1).getDate(),
    [day, month, year]
  );

  const nextMonth = useMemo(
    () => new Date(year, month.id - 1, day + 1).getMonth(),
    [day, month, year]
  );

  return (
    <Box sx={sxStyle.leftRight}>
      <Link
        href={`/${mode}/${
          new Date(year, month.id - 1, day - 1).getMonth() === 11 &&
          new Date(year, month.id - 1, day).getDate() === 1
            ? year - 1
            : year
        }/${day === 1 ? (month.id === 1 ? 12 : month.id - 1) : month.id}/${
          day === 1 ? new Date(year, month.id - 1, 0).getDate() : day - 1
        }`}
      >
        <Box
          onClick={() => {
            if (
              new Date(year, month.id - 1, day - 1).getMonth() === 11 &&
              new Date(year, month.id - 1, day).getDate() === 1
            ) {
              return (
                dispatch(setDay(new Date(year, month.id - 1, 0).getDate())),
                dispatch(setMonth(12)),
                dispatch(setYear(year - 1))
              );
            } else if (day === 1) {
              return (
                dispatch(setDay(new Date(year, month.id - 1, 0).getDate())),
                dispatch(setMonth(month.id - 1))
              );
            } else {
              return dispatch(setDay(day - 1));
            }
          }}
          sx={sxStyle.btn}
        >
          <ChevronLeftOutlinedIcon />
        </Box>
      </Link>
      <Link
        href={`/${mode}/${nextMonth === 0 && nextDay === 1 ? year + 1 : year}/${
          nextDay === 1 ? (month.id === 12 ? 1 : month.id + 1) : month.id
        }/${nextDay === 1 ? 1 : day + 1}`}
      >
        <Box
          onClick={() => {
            if (nextMonth === 0 && nextDay === 1) {
              return (
                dispatch(setDay(1)),
                dispatch(setMonth(1)),
                dispatch(setYear(year + 1))
              );
            } else if (nextDay === 1) {
              return dispatch(setDay(1)), dispatch(setMonth(month.id + 1));
            }
            return dispatch(setDay(day + 1));
          }}
          sx={sxStyle.btn}
        >
          <ChevronRightOutlinedIcon />
        </Box>
      </Link>
    </Box>
  );
};
export default memo(Day);