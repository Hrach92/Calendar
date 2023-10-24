import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateConverter, host } from "../instance";
import { SampleData, addEvents } from "../../store/reducer/sampleReducer";
import { Tabs } from "../../store/reducer/tabReducer";
import MyNotes from "../myNotes";
import ChangeEvents from "../changeEvents";
import { BarOpen } from "../../store/reducer/menuReducer";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Events from "./events";
import CurrentDay from "./currentDay";
import DayEvents from "./container";
import Hours from "./hours";

function Day(): JSX.Element {
  const { day, month, year, events, openNotes, color, hoursOfDay } =
    useSelector(SampleData);
  const { description } = useSelector(Tabs);
  const { leftBarOpen } = useSelector(BarOpen);

  const dispatch = useDispatch();
  const [descriptions, setDescriptions] = useState({});

  const { newId, currentDay, days } = useMemo(
    dateConverter(year, month.monthNumber, day),
    []
  );

  const style = useMemo(
    () => (leftBarOpen ? sxStyle.containerWithOpenBar : sxStyle.container),
    [leftBarOpen]
  );

  const currentDate = useMemo(
    () => days.find((v) => v.id === newId) || {},
    [days, newId]
  );

  useEffect(() => {
    host.get("event").then((res) => {
      dispatch(addEvents(res.data));
    });
  }, [openNotes, description]);

  return (
    <Box sx={style}>
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
      <Box sx={sxStyle.rightLine} />
      <Box sx={sxStyle.dayContainer}>
        <DayEvents
          events={events.hourEvents}
          newId={newId}
          color={color.color}
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
