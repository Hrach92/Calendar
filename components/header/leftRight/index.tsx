import React, { memo } from "react";
import { SampleData } from "../../../store/reducer/sampleReducer";
import Month from "./month";
import Day from "./day";
import Week from "./week";
import Year from "./year";
import { useSelector } from "../../../hooks/redux";
import { Mode } from "../../../dependencies/types";

const LeftNRight = (): JSX.Element => {
  const { mode } = useSelector(SampleData);

  switch (mode) {
    case Mode.MONTH:
      return <Month />;
    case Mode.DAY:
      return <Day />;
    case Mode.WEEK:
      return <Week />;
    case Mode.YEAR:
      return <Year />;
    default:
      return <Month />;
  }
};

export default memo(LeftNRight);
