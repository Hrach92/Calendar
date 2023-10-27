import { Box } from "@mui/material";
import { memo, useCallback } from "react";

import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import sxStyle from "./sxStyle.sx";
import moment from "moment";
import { next, prev } from "../../../dependencies/instance";
import Trans from "../../trans";

type ButtonTypes = {
  date?: any;
  setDate?: any;
};
function Header({ date, setDate }: ButtonTypes) {
  const { month, year } = date;

  const prevMonth = useCallback(() => {
    const state = prev(month, year);
    setDate(state);
  }, [month, year]);

  const nextMonth = useCallback(() => {
    const state = next(month, year);
    setDate(state);
  }, [month, year]);

  const monthName = moment(`${year}${month}`).format("MMMM").toLowerCase();

  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.title}>
        <Trans word={`months.${monthName}`} /> {year}
      </Box>

      <Box sx={sxStyle.buttons}>
        <Box sx={sxStyle.btn} onClick={prevMonth}>
          <ChevronLeftOutlinedIcon />
        </Box>
        <Box sx={sxStyle.btn} onClick={nextMonth}>
          <ChevronRightOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
}
export default memo(Header);
