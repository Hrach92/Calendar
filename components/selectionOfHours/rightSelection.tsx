import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { hoursOfDay } from "../../dependencies/instance";
import { SampleData, setTimeRange } from "../../store/reducer/sampleReducer";
import { useDispatch, useSelector } from "../../hooks/redux";

export default function RightSelection() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { time } = useSelector(SampleData);
  const handleChange = (e: any) => {
    const str = e.target.value;
    if (
      (str.slice(-2) === "AM" && parseInt(str) === 12) ||
      (str.slice(-2) === "AM" && parseInt(str) === 12)
    ) {
      return (
        setValue(e.target.value),
        dispatch(
          setTimeRange({
            ...time,
            right: "12",
            rightId: str.slice(-2) === "AM" ? 0 : 12,
            rightFormat: str.slice(-2),
            hour: Math.abs(parseInt(str) - time.leftId),
          })
        )
      );
    } else if (parseInt(str) > 12) {
      return (
        setValue(e.target.value),
        dispatch(
          setTimeRange({
            ...time,
            right: `${parseInt(str) - 12}`,
            rightId: parseInt(str),
            rightFormat: str.slice(-2),
            hour: Math.abs(parseInt(str) - time.leftId),
          })
        )
      );
    }
    return (
      setValue(e.target.value),
      dispatch(
        setTimeRange({
          ...time,
          right: `${parseInt(str)}`,
          rightId: parseInt(str),
          rightFormat: str.slice(-2),
          hour: Math.abs(parseInt(str) - time.leftId),
        })
      )
    );
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-autowidth-label" />

        <Select
          autoWidth
          id="demo-simple-select-autowidth"
          labelId="demo-simple-select-autowidth-label"
          onChange={handleChange}
          sx={{
            height: 20,
            width: 75,
            borderRadius: "4px",
            boxSizing: "border box",
            paddingRight: "1px",
            fontSize: "10px",
            fontWeight: "500",
          }}
          value={value ? value : ""}
        >
          {hoursOfDay.map((item) => (
            <MenuItem key={item.id} value={`${item.id}${item.format}`}>
              {item.hour}
              {item.format}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
