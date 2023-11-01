import { FC, memo, useCallback } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { currentDay } from "../../../dependencies/instance";
import sxStyle from "./sxStyle.sx";
import { Mode } from "../../../dependencies/types";
import { useDispatch } from "../../../hooks/redux";
import { setDate, setMode } from "../../../store/reducer/sampleReducer";

type DayTypes = {
  days: any;
  year?: any;
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
    (day: number, monthNumber: number) => {
      dispatch(setDate({ day, monthNumber, year }));
      dispatch(setMode(Mode.DAY));
      onClose();
    },
    [dispatch, onClose, year]
  );

  return (
    <>
      {days.map(({ dayNumber, id, monthNumber, monthId }: any) => {
        const current = currentDay(id);
        return (
          <Link key={id} href={`/${Mode.DAY}/${year}/${monthId}/${dayNumber}`}>
            <Box
              onClick={() => goToChosenDay(dayNumber, monthNumber)}
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
