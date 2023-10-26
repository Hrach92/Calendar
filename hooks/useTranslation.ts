import { useCallback } from "react";
import useLanguageTypes from "./useLanguageTypes";
import languages from "../dependencies/lang";

const useTranslation = () => {
  const { lang } = useLanguageTypes();

  const t = useCallback(
    (word: string) => {
      const words = languages[lang];
      let text = word.split(".").reduce((acc, key) => acc?.[key] || "", words);
      return text;
    },
    [lang]
  );

  return { t };
};
export default useTranslation;
