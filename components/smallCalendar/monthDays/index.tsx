import { FC, memo, useCallback } from "react";
import { currentDay } from "../../../dependencies/instance";
import Link from "next/link";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { Mode } from "../../../dependencies/types";
import { useDispatch } from "../../../hooks/redux";
import { setDate, setMode } from "../../../store/reducer/sampleReducer";

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
  const dispatch = useDispatch();

  const goToChosenDay = useCallback(
    (day: number, month: number, year: number) => {
      dispatch(setDate({ day, month, year }));
      dispatch(setMode(Mode.DAY));
      onClose();
    },
    []
  );

  return (
    <>
      {days.map(({ dayNumber, id, monthNumber, monthId }: any) => {
        let current = currentDay(id);
        return (
          <Link key={id} href={`/${Mode.DAY}/${year}/${monthId}/${dayNumber}`}>
            <Box
              onClick={() => goToChosenDay(dayNumber, monthNumber, year)}
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
