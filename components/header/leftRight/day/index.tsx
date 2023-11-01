import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo, useMemo } from "react";
import { Box } from "@mui/material";
import { SampleData, setDate } from "../../../../store/reducer/sampleReducer";
import sxStyle from "../sxStyle.sx";
import { useDispatch, useSelector } from "../../../../hooks/redux";
import { MonthTypes } from "../../../../store/reducer/types";

const Day = (): JSX.Element => {
  const { day, month, mode, year } = useSelector(SampleData);
  const dispatch = useDispatch();
  const { id }: MonthTypes = month;
  const nextDay = useMemo(
    () => new Date(year, id - 1, day + 1).getDate(),
    [day, id, year],
  );

  const nextMonth = useMemo(
    () => new Date(year, id - 1, day + 1).getMonth(),
    [day, id, year],
  );

  return (
    <Box sx={sxStyle.leftRight}>
      <Link
        href={`/${mode}/${
          new Date(year, id - 1, day - 1).getMonth() === 11 &&
          new Date(year, id - 1, day).getDate() === 1
            ? year - 1
            : year
        }/${day === 1 ? (id === 1 ? 12 : id - 1) : id}/${
          day === 1 ? new Date(year, id - 1, 0).getDate() : day - 1
        }`}
      >
        <Box
          onClick={() => {
            if (
              new Date(year, id - 1, day - 1).getMonth() === 11 &&
              new Date(year, id - 1, day).getDate() === 1
            ) {
              dispatch(
                setDate({
                  day: new Date(year, id - 1, 0).getDate(),
                  month: 12,
                  year: year - 1,
                }),
              );
            } else if (day === 1) {
              dispatch(
                setDate({
                  day: new Date(year, id - 1, 0).getDate(),
                  month: id - 1,
                  year,
                }),
              );
            } else {
              dispatch(setDate({ day: day - 1, month: id, year }));
            }
          }}
          sx={sxStyle.btn}
        >
          <ChevronLeftOutlinedIcon />
        </Box>
      </Link>
      <Link
        href={`/${mode}/${nextMonth === 0 && nextDay === 1 ? year + 1 : year}/${
          nextDay === 1 ? (id === 12 ? 1 : id + 1) : id
        }/${nextDay === 1 ? 1 : day + 1}`}
      >
        <Box
          onClick={() => {
            if (nextMonth === 0 && nextDay === 1) {
              dispatch(setDate({ day: 1, month: 1, year: year + 1 }));
            } else if (nextDay === 1) {
              dispatch(setDate({ day: 1, month: id + 1, year }));
            } else {
              dispatch(setDate({ day: day + 1, month: id, year }));
            }
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
