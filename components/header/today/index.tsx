import Link from "next/link";
import React, { useCallback } from "react";
import { Button } from "@mui/material";
import {
  SampleData,
  getLocaleDate,
} from "../../../store/reducer/sampleReducer";

import { useDispatch, useSelector } from "../../../hooks/redux";
import Trans from "../../trans";

const Today = (): JSX.Element => {
  const dispatch = useDispatch();
  const { mode } = useSelector(SampleData);

  const onClick = useCallback(() => dispatch(getLocaleDate()), [dispatch]);

  return (
    <Link href={`/${mode}`}>
      <Button variant="outlined" color="primary" onClick={onClick}>
        <Trans word="today" />
      </Button>
    </Link>
  );
};

export default Today;
