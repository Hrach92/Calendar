import React, { memo } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeIcon from "@mui/icons-material/Mode";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import useBoolean from "../../hooks/useBoolean";
import useOnChange from "../../hooks/useOnChange";
import SendEvent from "./event";

const ChangeEvent = ({ description }: any): JSX.Element => {
  const { mainTitle, title } = description;
  const { text, onChange } = useOnChange(mainTitle || "");

  const { open: change, setToggle } = useBoolean();

  return (
    <Box sx={sxStyle.description}>
      <Box sx={sxStyle.title}>{title}</Box>
      <ModeIcon onClick={setToggle} sx={sxStyle.edit} />
      <DeleteOutlineIcon sx={sxStyle.deleteBtn} />
      <HighlightOffIcon sx={sxStyle.closeDes} />
      {change && <SendEvent text={text} onChange={onChange} />}
    </Box>
  );
};

export default memo(ChangeEvent);
