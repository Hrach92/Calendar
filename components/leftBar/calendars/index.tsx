import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";

const Calendars = () => (
  <Box sx={sxStyle.calendar}>
    <Box sx={sxStyle.color} />
    <Box sx={sxStyle.title}>My Calendar</Box>
    <MoreVertIcon sx={sxStyle.dots} />
  </Box>
);
export default memo(Calendars);
