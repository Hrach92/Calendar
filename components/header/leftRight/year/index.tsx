import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo, useCallback } from "react";
import { Box } from "@mui/material";
import { SampleData, setDate } from "../../../../store/reducer/sampleReducer";
import sxStyle from "../sxStyle.sx";
import { useDispatch, useSelector } from "../../../../hooks/redux";

const Year = (): JSX.Element => {
  const { day, month, mode, year } = useSelector(SampleData);
  const dispatch = useDispatch();

  const prev = useCallback(
    () => dispatch(setDate({ day, month, year: year - 1 })),
    [dispatch, year, day, month],
  );
  const next = useCallback(
    () => dispatch(setDate({ day, month, year: year + 1 })),
    [dispatch, year, day, month],
  );

  return (
    <Box sx={sxStyle.leftRight}>
      <Link href={`/${mode}/${year - 1}/${month.id}`}>
        <Box onClick={prev} sx={sxStyle.btn}>
          <ChevronLeftOutlinedIcon />
        </Box>
      </Link>
      <Link href={`/${mode}/${year + 1}/${month.id}`}>
        <Box onClick={next} sx={sxStyle.btn}>
          <ChevronRightOutlinedIcon />
        </Box>
      </Link>
    </Box>
  );
};
export default memo(Year);
