import { memo, useCallback, useMemo } from "react";
import { Box } from "@mui/material";
import { Tabs, descriptionOpen } from "../../../store/reducer/tabReducer";
import { SampleData } from "../../../store/reducer/sampleReducer";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "../../../hooks/redux";

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
  }, [dispatch, description, setDescriptions]);

  const filteredEvents = useMemo(
    () => events.filter(({ dateId }: any) => dateId === newId),
    [events, newId]
  );

  return filteredEvents.map(({ title, id }: { title: string; id: string }) => (
    <Box
      key={id}
      onClick={onClick}
      sx={sxStyle.event}
      style={{ backgroundColor: color as string }}
    >
      {title}
    </Box>
  ));
}
export default memo(Events);
