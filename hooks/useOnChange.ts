import { useCallback, useEffect, useState } from "react";
import { Target } from "../dependencies/types";

interface UseOnChangeTypes {
  text?: string;
  onChange?: ({ target }: Target) => void;
  setText: (state: string | ((initialState: string) => string)) => void;
}

const useOnChange = (defaultValue = ""): UseOnChangeTypes => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(defaultValue);
  }, [setText, defaultValue]);

  const onChange = useCallback(
    ({ target }: Target) => setText(target.value),
    []
  );

  return {
    text,
    onChange,
    setText,
  };
};
export default useOnChange;
