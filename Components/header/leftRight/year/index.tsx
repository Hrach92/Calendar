import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SampleData, setYear } from "../../../../store/reducer/sampleReducer";
import { Box } from "@mui/material";
import sxStyle from "../sxStyle.sx";

const Year = (): JSX.Element => {
  const { month, mode, year } = useSelector(SampleData);
  const dispatch = useDispatch();

  const prev = useCallback(() => dispatch(setYear(year - 1)), [setYear, year]);
  const next = useCallback(() => dispatch(setYear(year + 1)), [setYear, year]);

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
