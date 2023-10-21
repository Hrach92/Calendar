import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import Link from "next/link";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import {
  SampleData,
  setDay,
  setMonth,
  setYear,
} from "../../../store/reducer/sampleReducer";
import Month from "./month";
import Day from "./day";
import Week from "./week";
import Year from "./year";

function LeftNRight(): JSX.Element {
  const { mode } = useSelector(SampleData);

  switch (mode) {
    case "month":
      return <Month />;
    case "day":
      return <Day />;
    case "week":
      return <Week />;
    case "year":
      return <Year />;
    default:
      return <Month />;
  }
}

export default memo(LeftNRight);
