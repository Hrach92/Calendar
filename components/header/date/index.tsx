import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { SampleData } from "../../../store/reducer/sampleReducer";

import sxStyle from "./sxStyle.sx";
import { useSelector } from "../../../hooks/redux";
import Trans from "../../trans";

type CalendarTypes = {
  onOpen?: () => void;
};
const VisibleDate = ({ onOpen = () => {} }: CalendarTypes) => {
  const {
    day,
    month: { title } = { title: "" },
    year,
  } = useSelector(SampleData);

  return (
    <Box sx={sxStyle.showDate} onClick={onOpen}>
      <Typography>
        <Trans word={`months.${title}`} />
      </Typography>
      <Typography>{day},</Typography>
      <Typography>{year}</Typography>
    </Box>
  );
};
export default memo(VisibleDate);
