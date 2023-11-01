import { memo, useMemo } from "react";

import { Box } from "@mui/material";
import { dateConverter } from "../../dependencies/instance";
import { SampleData } from "../../store/reducer/sampleReducer";
import MyNotes from "../myNotes";
import sxStyle from "./sxStyle.sx";
import Events from "./events";
import CurrentDay from "./currentDay";
import DayEvents from "./container";
import Hours from "./hours";
import { useSelector } from "../../hooks/redux";

const Day = (): JSX.Element => {
  const { day, month, year, events, openNotes, color, hoursOfDay } =
    useSelector(SampleData);

  const { newId, currentDay } = useMemo(
    () => dateConverter(year, month.monthNumber, day),
    [year, month.monthNumber, day]
  );

  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.eventList}>
        {events.dayEvents.length !== 0 && (
          <Events events={events.dayEvents} newId={newId} />
        )}
      </Box>
      {openNotes && <MyNotes />}
      <Box sx={sxStyle.dayContainer}>
        <DayEvents
          events={events.hourEvents}
          newId={newId}
          color={color.color as string}
        />
        <Hours currentDay={currentDay} hours={hoursOfDay} />
      </Box>
      <CurrentDay newId={newId} currentDay={currentDay} />
    </Box>
  );
};

export default memo(Day);
