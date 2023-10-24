import { FC, memo } from "react";
import { currentDay } from "../../instance";
import Link from "next/link";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";

type DayTypes = {
  days: any;
  year: any;
  date?: any;
};

const MonthDays: FC<DayTypes> = ({ days, year, date = {} }) => {
  const { month } = date;

  return (
    <>
      {days.map(({ dayNumber, id, monthNumber, monthId }: any) => {
        let current = currentDay(id);
        return (
          <Link key={id} href={`/${"day"}/${year}/${monthId}/${dayNumber}`}>
            <Box
              /*                 onClick={() => {
                  return (
                    dispatch(setDay(dayNumber)),
                    dispatch(setMonth(+monthId)),
                    dispatch(setYear(date.year)),
                    dispatch(setMode("day"), dispatch(setNotesOpen(false)))
                  );
                }} */

              sx={[
                sxStyle.day,
                current && sxStyle.current,
                monthNumber !== month && !current && sxStyle.other,
              ]}
            >
              {dayNumber}
            </Box>
          </Link>
        );
      })}
    </>
  );
};
export default memo(MonthDays);
