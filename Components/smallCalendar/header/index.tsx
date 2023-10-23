import { Box } from "@mui/material";
import { memo, useCallback } from "react";

import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import sxStyle from "./sxStyle.sx";
import moment from "moment";

type ButtonTypes = {
  date?: any;
  setDate?: any;
};
function Header({ date, setDate }: ButtonTypes) {
  const { month, year } = date;

  const prev = useCallback(() => {
    setDate({
      year: month === "01" ? year - 1 : year,
      month:
        month === "01"
          ? "12"
          : `${+month - 1 > 9 ? +month - 1 : "0" + (+month - 1)}`,
    });
  }, [month, year]);

  const next = useCallback(() => {
    setDate({
      year: month === "12" ? year + 1 : year,
      month:
        month === "12"
          ? "01"
          : `${+month + 1 > 9 ? +month + 1 : "0" + (+month + 1)}`,
    });
  }, [month, year]);

  const monthName = moment(`${year}${month}`).format("MMMM");

  return (
    <Box sx={sxStyle.container}>
      <Box sx={sxStyle.title}>
        {monthName} {year}
      </Box>

      <Box sx={sxStyle.buttons}>
        <Box sx={sxStyle.btn} onClick={prev}>
          <ChevronLeftOutlinedIcon />
        </Box>
        <Box sx={sxStyle.btn} onClick={next}>
          <ChevronRightOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
}
export default memo(Header);
