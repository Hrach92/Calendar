import { Box, Input, Typography } from "@mui/material";
import { MdOutlineCheck } from "react-icons/md";
import { memo } from "react";
import sxStyle from "../sxStyle.sx";

type SendEventTypes = {
  text?: string;
  onChange?: ({ target }: any) => void;
  changeEvent?: () => void;
};

const SendEvent = ({
  text,
  onChange = () => {},
  changeEvent = () => {},
}: SendEventTypes): JSX.Element => (
  <Box>
    <Input type="text" value={text} onChange={onChange} />
    <Typography onClick={changeEvent} sx={sxStyle.changeBtn}>
      <MdOutlineCheck />
    </Typography>
  </Box>
);
export default memo(SendEvent);
