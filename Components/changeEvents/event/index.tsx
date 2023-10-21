import { Box, Input, Typography } from "@mui/material";
import { MdOutlineCheck } from "react-icons/md";
import sxStyle from "../sxStyle.sx";
import { memo } from "react";

type SendEventTypes = {
  text?: string;
  onChange?: ({ target }: any) => void;
  changeEvent?: () => void;
};

function SendEvent({
  text,
  onChange = () => {},
  changeEvent = () => {},
}: SendEventTypes): JSX.Element {
  return (
    <Box>
      <Input
        style={{ marginLeft: "15px" }}
        type="text"
        value={text}
        onChange={onChange}
      />
      <Typography onClick={changeEvent} sx={sxStyle.changeBtn}>
        <MdOutlineCheck />
      </Typography>
    </Box>
  );
}
export default memo(SendEvent);
