import React, { memo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { Box } from "@mui/material";

function SelectMode() {
  const state = useSelector((state) => (state as any).sampleData);
  const handleChange = (event: any) => {
    event.preventDefault();
  };
  return (
    <Box className={styles.mode}>
      <FormControl>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          sx={{
            height: 31,
            maxWidth: 85,
            borderRadius: "4px",
            boxSizing: "border box",
            paddingRight: "1px",
            fontSize: "14px",
            fontWeight: "500",
          }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={state.mode ? state.mode : "month"}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={"day"}>
            <Link href={`/day/${state.year}/${state.month.id}/${state.day}`}>
              <div style={{ height: 30, minWidth: 100, padding: "3px" }}>
                Day
              </div>
            </Link>
          </MenuItem>
          <MenuItem value={"week"}>
            <Link href={`/week/${state.year}/${state.month.id}/${state.day}`}>
              <div style={{ height: 30, minWidth: 100, padding: "3px" }}>
                Week
              </div>
            </Link>
          </MenuItem>
          <MenuItem value={"month"}>
            <Link href={`/month/${state.year}/${state.month.id}`}>
              <div style={{ height: 30, minWidth: 100, padding: "3px" }}>
                Month
              </div>
            </Link>
          </MenuItem>
          <MenuItem value={"year"} sx={{ minWidth: 150 }}>
            <Link href={`/year/${state.year}/${state.month.id}`}>
              <div style={{ height: 30, minWidth: 100, padding: "3px" }}>
                Year
              </div>
            </Link>
          </MenuItem>
          <MenuItem value={"Расписание"}>Расписание</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default memo(SelectMode);
