import { memo } from "react";

import YearComponent from "./component";
import styles from "./styles.module.css";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { SampleData } from "../../store/reducer/sampleReducer";
import { useSelector } from "../../hooks/redux";

function Year(): JSX.Element {
  const { months } = useSelector(SampleData);

  return (
    <Box sx={sxStyle.container}>
      {months.map(({ title, id, monthNumber }: any) => (
        <YearComponent numberOfMonth={monthNumber} title={title} key={id} />
      ))}
    </Box>
  );
}
export default memo(Year);
