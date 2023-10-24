import React, { memo } from "react";
import { SampleData } from "../../../store/reducer/sampleReducer";
import Month from "./month";
import Day from "./day";
import Week from "./week";
import Year from "./year";
import { useSelector } from "../../../hooks/redux";

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
