import { useCallback, useState } from "react";

/* interface UseBooleanTypes {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  setToggle?: () => void;
} */

type UseBooleanTypes<T> = {
  open: boolean;
  onOpen: T;
  onClose: T;
  setToggle?: T;
};

const useBoolean = (defaultValue = false): UseBooleanTypes<() => void> => {
  const [open, setOpen] = useState(defaultValue);

  const onOpen = useCallback(() => setOpen(true), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);
  const setToggle = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return {
    open,
    onOpen,
    onClose,
    setToggle,
  };
};
export default useBoolean;
