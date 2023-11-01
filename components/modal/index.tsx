import { Box, Modal } from "@mui/material";
import React, { JSXElementConstructor, ReactElement, memo } from "react";
import sxStyle from "./sxStyle.sx";

type ModalTypes = {
  open: boolean;
  onClose?: () => void;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};
const ModalContainer = ({ open, onClose = () => {}, children }: ModalTypes) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={sxStyle.box}> {children}</Box>
  </Modal>
);
export default memo(ModalContainer);
