import { memo } from "react";

import YearComponent from "./component";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { months } from "../../dependencies/instance";

function Year(): JSX.Element {
  return (
    <Box sx={sxStyle.container}>
      {months.map(({ title, id, monthNumber }: any) => (
        <YearComponent numberOfMonth={monthNumber} title={title} key={id} />
      ))}
    </Box>
  );
}
export default memo(Year);
