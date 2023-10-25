import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo, useCallback } from "react";
import { SampleData, setDate } from "../../../../store/reducer/sampleReducer";
import { Box } from "@mui/material";
import sxStyle from "../sxStyle.sx";
import { useDispatch, useSelector } from "../../../../hooks/redux";

const Year = (): JSX.Element => {
  const { day, month, mode, year } = useSelector(SampleData);
  const dispatch = useDispatch();

  const prev = useCallback(
    () => dispatch(setDate({ day, month, year: year - 1 })),
    [setDate, year]
  );
  const next = useCallback(
    () => dispatch(setDate({ day, month, year: year + 1 })),
    [setDate, year]
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
