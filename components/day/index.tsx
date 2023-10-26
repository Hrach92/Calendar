import { memo, useMemo, useState } from "react";

import { dateConverter } from "../../dependencies/instance";
import { SampleData } from "../../store/reducer/sampleReducer";
import { Tabs } from "../../store/reducer/tabReducer";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Events from "./events";
import CurrentDay from "./currentDay";
import DayEvents from "./container";
import Hours from "./hours";
import { useSelector } from "../../hooks/redux";

function Day(): JSX.Element {
  const { day, month, year, events, openNotes, color, hoursOfDay } =
    useSelector(SampleData);
  const { description } = useSelector(Tabs);

  const [descriptions, setDescriptions] = useState({});

  const { newId, currentDay, days } = useMemo(
    dateConverter(year, month.monthNumber, day),
    []
  );

  const currentDate = useMemo(
    () => days.find((v) => v.id === newId) || {},
    [days, newId]
  );

  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.eventList}>
        {events.dayEvents.length !== 0 && (
          <Events
            events={events.dayEvents}
            setDescriptions={setDescriptions}
            newId={newId}
          />
        )}
      </Box>
      {openNotes && <MyNotes />}
      <Box sx={sxStyle.dayContainer}>
        <DayEvents
          events={events.hourEvents}
          newId={newId}
          color={color.color as string}
          setDescriptions={setDescriptions}
        />
        <Hours currentDay={currentDay} hours={hoursOfDay} />
      </Box>
      <CurrentDay newId={newId} currentDay={currentDay} />
      {description && <ChangeEvents description={descriptions} />}
    </Box>
  );
}

export default memo(Day);
