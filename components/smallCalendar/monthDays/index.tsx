import { FC, memo } from "react";
import { currentDay } from "../../../dependencies/instance";
import Link from "next/link";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { Mode } from "../../../dependencies/types";

type DayTypes = {
  days: any;
  year: any;
  date?: any;
  onClose?: () => void;
};

const MonthDays: FC<DayTypes> = ({
  days,
  year,
  date = {},
  onClose = () => {},
}) => {
  const { month } = date;

  return (
    <>
      {days.map(({ dayNumber, id, monthNumber, monthId }: any) => {
        let current = currentDay(id);
        return (
          <Link key={id} href={`/${Mode.DAY}/${year}/${monthId}/${dayNumber}`}>
            <Box
              onClick={onClose}
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
