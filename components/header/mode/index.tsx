import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";

import { Box, Typography } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { SampleData } from "../../../store/reducer/sampleReducer";
import useOnChange from "../../../hooks/useOnChange";
import { useSelector } from "../../../hooks/redux";

function SelectMode() {
  const { mode, day, month, year } = useSelector(SampleData);

  const { text: value, setText } = useOnChange(mode);
  const handleChange = (event: SelectChangeEvent) => {
    setText(event.target.value as string);
  };

  return (
    <Box sx={sxStyle.mode}>
      <FormControl>
        <Select
          sx={sxStyle.select}
          value={value}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={"Day"} sx={sxStyle.menu}>
            <Link href={`/day/${year}/${month.id}/${day}`}>
              <Typography sx={sxStyle.item}>Day</Typography>
            </Link>
          </MenuItem>

          <MenuItem value={"Week"} sx={sxStyle.menu}>
            <Link href={`/week/${year}/${month.id}/${day}`}>
              <Typography sx={sxStyle.item}>Week</Typography>
            </Link>
          </MenuItem>

          <MenuItem value={"Month"} sx={sxStyle.menu}>
            <Link href={`/month/${year}/${month.id}`}>
              <Typography sx={sxStyle.item}>Month</Typography>
            </Link>
          </MenuItem>

          <MenuItem value={"Year"} sx={sxStyle.menu}>
            <Link href={`/year/${year}/${month.id}`}>
              <Typography sx={sxStyle.item}>Year</Typography>
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectMode;
