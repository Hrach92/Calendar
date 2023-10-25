import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo, useMemo } from "react";
import { SampleData, setDate } from "../../../../store/reducer/sampleReducer";
import { Box } from "@mui/material";
import sxStyle from "../sxStyle.sx";
import { useSelector, useDispatch } from "../../../../hooks/redux";

const Week = (): JSX.Element => {
  const { day, month, mode, year } = useSelector(SampleData);
  const dispatch = useDispatch();

  const prevDate = useMemo(
    () => new Date(year, month.id - 1, day - 7).getDate(),
    [day, month, year]
  );

  const nextDate = useMemo(
    () => new Date(year, month.id - 1, day + 7).getDate(),
    [day, month, year]
  );

  const currentDate = useMemo(
    () => new Date(year, month.id - 1, day).getDate(),
    [day, month, year]
  );

  return (
    <Box sx={sxStyle.leftRight}>
      <Link
        href={`/${mode}/${month.id === 1 && prevDate > 24 ? year - 1 : year}/${
          prevDate >= 24
            ? month.id === 1 && day - 7 <= 0
              ? 12
              : month.id - 1
            : month.id
        }/${prevDate >= 24 ? prevDate : day - 7}`}
      >
        <Box
          onClick={() => {
            if (currentDate <= 7 && month.id === 1) {
              dispatch(setDate({ day: prevDate, month: 12, year: year - 1 }));
            } else if (prevDate > 21) {
              dispatch(setDate({ day: prevDate, month: month.id - 1, year }));
            } else if (prevDate > 24) {
              dispatch(setDate({ day: prevDate, month: month.id - 1, year }));
            } else {
              dispatch(setDate({ day: day - 7, month, year }));
            }
          }}
          sx={sxStyle.btn}
        >
          <ChevronLeftOutlinedIcon />
        </Box>
      </Link>
      <Link
        href={`/${mode}/${
          currentDate > 24 && month.id === 12 ? year + 1 : year
        }/${nextDate <= 7 ? (month.id === 12 ? 1 : month.id + 1) : month.id}/${
          nextDate <= 7 ? nextDate : day + 7
        }`}
      >
        <Box
          onClick={() => {
            if (currentDate > 24 && month.id === 12) {
              dispatch(setDate({ day: nextDate, month: 1, year: year + 1 }));
            } else if (nextDate <= 7) {
              dispatch(setDate({ day: nextDate, month: month.id + 1, year }));
            } else {
              dispatch(setDate({ day: day + 7, month, year }));
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
export default memo(Week);
