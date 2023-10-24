import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SampleData,
  setDay,
  setMonth,
  setYear,
} from "../../../../store/reducer/sampleReducer";
import { Box } from "@mui/material";
import sxStyle from "../sxStyle.sx";

const Month = (): JSX.Element => {
  const { day, month, mode, year } = useSelector(SampleData);
  const dispatch = useDispatch();

  return (
    <Box sx={sxStyle.leftRight}>
      <Link
        href={`/${mode}/${month.id === 1 ? year - 1 : year}/${
          month.id === 1 ? 12 : month.id - 1
        }`}
      >
        <Box
          onClick={() => {
            if (month.id === 1) {
              return dispatch(setMonth(12)), dispatch(setYear(year - 1));
            } else if (month.id === 3 && day > 28) {
              return (
                dispatch(setDay(new Date(year, month.id - 1, 0).getDate())),
                dispatch(setMonth(month.id - 1))
              );
            } else {
              return dispatch(setMonth(month.id - 1));
            }
          }}
          sx={sxStyle.btn}
        >
          <ChevronLeftOutlinedIcon />
        </Box>
      </Link>
      <Link
        href={`/${mode}/${month.id === 12 ? year + 1 : year}/${
          month.id === 12 ? 1 : month.id + 1
        }`}
      >
        <Box
          onClick={() => {
            if (month.id === 12) {
              return dispatch(setMonth(1)), dispatch(setYear(year + 1));
            } else if (month.id === 1 && day > 28) {
              return (
                dispatch(setDay(new Date(year, month.id + 1, 0).getDate())),
                dispatch(setMonth(month.id + 1))
              );
            } else {
              return dispatch(setMonth(month.id + 1));
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
export default memo(Month);
