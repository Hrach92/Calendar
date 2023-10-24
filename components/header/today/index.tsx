import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import {
  SampleData,
  getLocaleDate,
} from "../../../store/reducer/sampleReducer";
import { Button } from "@mui/material";

import sxStyle from "./sxStyle.sx";

function Today() {
  const dispatch = useDispatch();
  const { mode } = useSelector(SampleData);

  const onClick = useCallback(() => dispatch(getLocaleDate()), [getLocaleDate]);

  return (
    <Link href={`/${mode}`}>
      <Button sx={sxStyle.btn} onClick={onClick}>
        Today
      </Button>
    </Link>
  );
}

export default Today;
