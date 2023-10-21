import { memo, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, descriptionOpen } from "../../../store/reducer/tabReducer";
import { SampleData } from "../../../store/reducer/sampleReducer";
import sxStyle from "./sxStyle.sx";
import { Box } from "@mui/material";

type EventTypes = {
  events?: any;
  newId?: string;
  setDescriptions?: (event: any) => void;
};

function Events({
  events = [],
  newId = "",
  setDescriptions = () => {},
}: EventTypes): JSX.Element {
  const { description } = useSelector(Tabs);
  const { color: { color } = { color: "" } } = useSelector(SampleData);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    description
      ? (setDescriptions({}), dispatch(descriptionOpen(false)))
      : (setDescriptions(event), dispatch(descriptionOpen(true)));
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter(({ date_id }: any) => date_id === newId);
  }, [events.dayEvents]);

  return filteredEvents.map(({ title, id }: { title: string; id: string }) => (
    <Box
      key={id}
      onClick={onClick}
      sx={sxStyle.event}
      style={{ backgroundColor: color }}
    >
      {title}
    </Box>
  ));
}
export default memo(Events);
