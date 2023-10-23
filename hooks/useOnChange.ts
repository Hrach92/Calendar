import { useCallback, useEffect, useState } from "react";

interface UseOnChangeTypes {
  text?: string;
  onChange?: ({ target }: any) => void;
  setText: (state: string | ((initialState: string) => string)) => void;
}

const useOnChange = (defaultValue = ""): UseOnChangeTypes => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(defaultValue);
  }, [setText, defaultValue]);

  const onChange = useCallback(({ target }: any) => setText(target.value), []);

  return {
    text,
    onChange,
    setText,
  };
};
export default useOnChange;
