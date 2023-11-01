import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { hoursOfDay } from "../../dependencies/instance";
import { SampleData, setTimeRange } from "../../store/reducer/sampleReducer";
import { useDispatch, useSelector } from "../../hooks/redux";

const RightSelection = (): JSX.Element => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { time } = useSelector(SampleData);
  const handleChange = (e: any) => {
    const str = e.target.value;
    if (
      (str.slice(-2) === "AM" && parseInt(str, 10) === 12) ||
      (str.slice(-2) === "AM" && parseInt(str, 10) === 12)
    ) {
      return (
        setValue(e.target.value),
        dispatch(
          setTimeRange({
            ...time,
            right: "12",
            rightId: str.slice(-2) === "AM" ? 0 : 12,
            rightFormat: str.slice(-2),
            hour: Math.abs(parseInt(str, 10) - (time.leftId as number)),
          }),
        )
      );
    }
    if (parseInt(str, 10) > 12) {
      return (
        setValue(e.target.value),
        dispatch(
          setTimeRange({
            ...time,
            right: `${parseInt(str, 10) - 12}`,
            rightId: parseInt(str, 10),
            rightFormat: str.slice(-2),
            hour: Math.abs(parseInt(str, 10) - (time.leftId as number)),
          }),
        )
      );
    }
    return (
      setValue(e.target.value),
      dispatch(
        setTimeRange({
          ...time,
          right: `${parseInt(str, 10)}`,
          rightId: parseInt(str, 10),
          rightFormat: str.slice(-2),
          hour: Math.abs(parseInt(str, 10) - (time.leftId as number)),
        }),
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
          value={value || ""}
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
};
export default RightSelection;
