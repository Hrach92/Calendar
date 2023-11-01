import { Box } from "@mui/material";
import { memo, useMemo } from "react";
import sxStyle from "./sxStyle.sx";

type DayEventsTypes = {
  events?: any;
  newId?: string;
  color?: string;
  setDescriptions?: (event: any) => void;
};
const DayEvents = ({ events, newId, color }: DayEventsTypes) => {
  const filtered = useMemo(
    () => events.filter(({ dateId }: any) => dateId === newId),
    [events, newId]
  );

  const style = (eventStart: any, time: any) => ({
    backgroundColor: color,
    marginTop: `${eventStart * 48}px`,
    height: `${48 * time}px`,
  });

  return (
    <Box sx={sxStyle.eventContainer}>
      {events.length !== 0 &&
        filtered.map((event: any) => {
          const { endTime, startTime, eventStart, time, title, id } = event;
          return (
            <Box
              key={id}
              sx={sxStyle.hourEvents}
              style={style(eventStart, time)}
            >
              <Box sx={sxStyle.eventTime}>
                {startTime} - {endTime}
              </Box>
              <Box
                sx={sxStyle.eventDescription}
                style={{ height: `${time * 48 - 35}px` }}
              >
                {title}
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};
export default memo(DayEvents);
