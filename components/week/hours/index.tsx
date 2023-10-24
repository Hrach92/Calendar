import { Box, Typography } from "@mui/material";
import { memo, useCallback, useMemo } from "react";
import sxStyle from "./sxStyle.sx";
import moment from "moment";
import { useSelector } from "react-redux";
import { SampleData } from "../../../store/reducer/sampleReducer";
import { weekDays } from "../../instance";

type HourTypes = {
  days: any;
};
function Hours() {
  const { year, day, month } = useSelector(SampleData);

  const hours = useMemo(() => {
    return weekDays(year, month.monthNumber, day);
  }, [year, month.monthNumber, day]);

  const dayTime = useCallback((hour: string, format: string, day: string) => {
    return (
      hour === moment().format("h") &&
      format === moment().format("A") &&
      day === moment().format("YYYYMMDD")
    );
  }, []);

  const title = moment().format("hh:mm");

  return (
    <Box sx={sxStyle.container}>
      {hours.map(({ hour, format, day, id }) => {
        const current = dayTime(hour, format, day);
        return (
          <Box key={id}>
            {current && <Box title={title} sx={sxStyle.current}></Box>}
            <Box sx={sxStyle.hour}>
              {id % 8 === 0 &&
                `${id === 0 ? "GMT+04" : hour}${id === 0 ? "" : format}`}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
export default memo(Hours);
