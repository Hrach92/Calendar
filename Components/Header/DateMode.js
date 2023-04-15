import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {StaticDatePicker} from "@mui/x-date-pickers/StaticDatePicker";
import header from "./Header.module.css";

export default function StaticDatePickerDemo () {

    const [
        value,
        setValue
    ] = useState(new Date());
    return <div className={header.dateMode}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
     <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="year"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>

}
