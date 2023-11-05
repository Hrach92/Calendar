import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo } from "react";
import { Box } from "@mui/material";
import { SampleData, setDate } from "../../../../store/reducer/sampleReducer";
import sxStyle from "../sxStyle.sx";
import { useSelector, useDispatch } from "../../../../hooks/redux";

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
              dispatch(setDate({ day, month: 12, year: year - 1 }));
            } else if (month.id === 3 && day > 28) {
              dispatch(
                setDate({
                  day: new Date(year, month.id - 1, 0).getDate(),
                  month: month.id - 1,
                  year,
                }),
              );
            } else {
              dispatch(setDate({ day, month: month.id - 1, year }));
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
              dispatch(setDate({ day, month: 1, year: year + 1 }));
            } else if (month.id === 1 && day > 28) {
              dispatch(
                setDate({
                  day: new Date(year, month.id + 1, 0).getDate(),
                  month: month.id + 1,
                  year,
                }),
              );
            } else {
              return dispatch(setDate({ day, month: month.id + 1, year }));
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
