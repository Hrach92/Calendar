import { Modal } from "@mui/material";
import React, { JSXElementConstructor, ReactElement, memo } from "react";

type ModalTypes = {
  open: boolean;
  onClose?: () => void;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};
const ModalContainer = ({ open, onClose = () => {}, children }: ModalTypes) => {
  return (
    <Modal open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};
export default memo(ModalContainer);
