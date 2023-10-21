import React, { memo, useCallback } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeIcon from "@mui/icons-material/Mode";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { MdOutlineCheck } from "react-icons/md";
import { useDispatch } from "react-redux";
import { descriptionOpen } from "../../store/reducer/tabReducer";
import { host } from "../instance";
import sxStyle from "./sxStyle.sx";
import { Box, Input, Typography } from "@mui/material";
import useBoolean from "../../hooks/useBoolean";
import useOnChange from "../../hooks/useOnChange";
import SendEvent from "./event";

function ChangeEvent({ description }: any): JSX.Element {
  const { mainTitle, title, id } = description;
  const { text, onChange } = useOnChange(mainTitle || "");

  const { open: change, setToggle } = useBoolean();
  const dispatch = useDispatch();

  const onCloseDesc = useCallback(
    () => dispatch(descriptionOpen(false)),
    [descriptionOpen]
  );

  const onDeleteEvent = useCallback(async () => {
    try {
      await host.delete(`/${"event"}/${id}`).then((res) => {
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    } finally {
      onCloseDesc();
    }
  }, [id]);

  const changeEvent = useCallback(() => {}, []);

  return (
    <Box sx={sxStyle.description}>
      <Box sx={sxStyle.title}>{title}</Box>
      <ModeIcon onClick={setToggle} sx={sxStyle.edit} />
      <DeleteOutlineIcon sx={sxStyle.deleteBtn} onClick={onDeleteEvent} />
      <HighlightOffIcon sx={sxStyle.closeDes} onClick={onCloseDesc} />
      {change && (
        <SendEvent text={text} onChange={onChange} changeEvent={changeEvent} />
      )}
    </Box>
  );
}

export default memo(ChangeEvent);
