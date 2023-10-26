import Link from "next/link";
import React, { useCallback } from "react";
import {
  SampleData,
  getLocaleDate,
} from "../../../store/reducer/sampleReducer";
import { Button } from "@mui/material";

import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../../hooks/redux";
import Trans from "../../trans";

function Today() {
  const dispatch = useDispatch();
  const { mode } = useSelector(SampleData);

  const onClick = useCallback(() => dispatch(getLocaleDate()), [getLocaleDate]);

  return (
    <Link href={`/${mode}`}>
      <Button sx={sxStyle.btn} onClick={onClick}>
        <Trans word="today" />
      </Button>
    </Link>
  );
}

export default Today;
