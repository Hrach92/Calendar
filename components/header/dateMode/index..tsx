import React, { memo, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { Mode } from "../../../dependencies/types";

const StaticDatePickerDemo = (): JSX.Element => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Box sx={sxStyle.dateMode}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo={Mode.YEAR}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default memo(StaticDatePickerDemo);
