import { useCallback } from "react";
import useLanguageTypes from "./useLanguageTypes";
import languages from "../dependencies/lang";

const useTranslation = (): { t: (word: string) => any } => {
  const { lang } = useLanguageTypes();

  const t = useCallback(
    (word: string) => {
      const words = languages[lang];
      const text = word
        .split(".")
        .reduce((acc, key) => acc?.[key] || "", words);
      return text;
    },
    [lang]
  );

  return { t };
};
export default useTranslation;
