import { Box } from "@mui/material";
import { memo, useCallback, useMemo } from "react";
import sxStyle from "./sxStyle.sx";
import { Tabs, descriptionOpen } from "../../../store/reducer/tabReducer";
import { useDispatch, useSelector } from "../../../hooks/redux";

type DayEventsTypes = {
  events?: any;
  newId?: string;
  color?: string;
  setDescriptions?: (event: any) => void;
};
function DayEvents({
  events,
  newId,
  color,
  setDescriptions = () => {},
}: DayEventsTypes) {
  const dispatch = useDispatch();
  const { description } = useSelector(Tabs);

  const filtered = useMemo(() => {
    return events.filter(({ date_id }: any) => date_id === newId);
  }, [events, newId]);

  const style = (eventstart: any, time: any) => ({
    backgroundColor: color,
    marginTop: `${eventstart * 48}px`,
    height: `${48 * time}px`,
  });

  return (
    <Box sx={sxStyle.eventContainer}>
      {events.length !== 0 &&
        filtered.map((event: any) => {
          const { end_time, start_time, eventstart, time, title, id } = event;
          return (
            <Box
              key={id}
              sx={sxStyle.hourEvents}
              style={style(eventstart, time)}
            >
              <Box sx={sxStyle.eventTime}>
                {start_time} - {end_time}
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
}
export default memo(DayEvents);