import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";

import { Box, Typography } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { SampleData, setMode } from "../../../store/reducer/sampleReducer";
import useOnChange from "../../../hooks/useOnChange";
import { useDispatch, useSelector } from "../../../hooks/redux";
import { Mode } from "../../../dependencies/types";
import Trans from "../../trans";

const SelectMode = (): JSX.Element => {
  const { mode, day, month, year } = useSelector(SampleData);
  const dispatch = useDispatch();
  const { text: value, setText } = useOnChange(mode);

  const handleChange = (event: SelectChangeEvent) => {
    const chosenMode = event.target.value || "";
    setText(chosenMode);
    dispatch(setMode(chosenMode));
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
          <MenuItem value={Mode.DAY} sx={sxStyle.menu}>
            <Link href={`/${Mode.DAY}/${year}/${month.id}/${day}`}>
              <Typography sx={sxStyle.item}>
                <Trans word={Mode.DAY} />
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem value={Mode.WEEK} sx={sxStyle.menu}>
            <Link href={`/${Mode.WEEK}/${year}/${month.id}/${day}`}>
              <Typography sx={sxStyle.item}>
                <Trans word={Mode.WEEK} />
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem value={Mode.MONTH} sx={sxStyle.menu}>
            <Link href={`/${Mode.MONTH}/${year}/${month.id}`}>
              <Typography sx={sxStyle.item}>
                <Trans word={Mode.MONTH} />
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem value={Mode.YEAR} sx={sxStyle.menu}>
            <Link href={`/${Mode.YEAR}/${year}/${month.id}`}>
              <Typography sx={sxStyle.item}>
                <Trans word={Mode.YEAR} />
              </Typography>
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default SelectMode;
