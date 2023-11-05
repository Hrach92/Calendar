import { memo } from "react";

import { Box } from "@mui/material";
import YearComponent from "./component";
import sxStyle from "./sxStyle.sx";
import { months } from "../../dependencies/instance";

const Year = (): JSX.Element => (
  <Box sx={sxStyle.container}>
    {months.map(({ title, id, monthNumber }: any) => (
      <YearComponent numberOfMonth={monthNumber} title={title} key={id} />
    ))}
  </Box>
);
export default memo(Year);
