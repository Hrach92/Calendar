import { memo, useMemo } from "react";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";

type EventTypes = {
  events?: any;
  newId?: string;
  setDescriptions?: (event: any) => void;
};

function Events({ events = [], newId = "" }: EventTypes): JSX.Element {
  const filteredEvents = useMemo(
    () => events.filter(({ dateId }: any) => dateId === newId),
    [events, newId],
  );

  return filteredEvents.map(({ title, id }: { title: string; id: string }) => (
    <Box key={id} sx={sxStyle.event}>
      {title}
    </Box>
  ));
}
export default memo(Events);
