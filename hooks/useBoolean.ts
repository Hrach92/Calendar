import { useCallback, useState } from "react";

interface UseBooleanTypes {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  setToggle?: () => void;
}

const useBoolean = (defaultValue = false): UseBooleanTypes => {
  const [open, setOpen] = useState(defaultValue);

  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const setToggle = useCallback(() => setOpen((prev) => !prev), []);

  return {
    open,
    onOpen,
    onClose,
    setToggle,
  };
};
export default useBoolean;
