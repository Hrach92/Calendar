import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import sxStyle from "./sxStyle.sx";
import { memo } from "react";

function Calendars() {
  return (
    <Box sx={sxStyle.calendar}>
      <Box sx={sxStyle.color}></Box>
      <Box sx={sxStyle.title}>My Calendar</Box>
      <MoreVertIcon sx={sxStyle.dots} />
    </Box>
  );
}
export default memo(Calendars);
