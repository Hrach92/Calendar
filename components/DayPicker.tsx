import * as React from "react";

import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateRange,
  DateRangePicker,
} from "@mui/x-date-pickers-pro/DateRangePicker";

function CustomDateRangeInputs(): JSX.Element {
  const [value, setValue] = React.useState<DateRange<string>>(["", ""]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        label="Advanced keyboard"
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <input ref={startProps.inputRef} {...startProps.inputProps} />

            <Box sx={{ mx: 1 }}>to</Box>

            <input ref={endProps.inputRef} {...endProps.inputProps} />
          </React.Fragment>
        )}
        value={value}
      />
    </LocalizationProvider>
  );
}
export default CustomDateRangeInputs;
