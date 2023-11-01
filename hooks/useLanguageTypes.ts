import { useContext } from "react";
import { useRouter } from "next/router";
import { LocaleContext } from "../features/providers/localProvider";

type UseLanguageTypeReturnTypes = { langs: string[]; lang: string };

const useLanguageTypes = (): UseLanguageTypeReturnTypes => {
  const { ssrLocaleData } = useContext(LocaleContext);

  const { locale, locales } = useRouter();
  const ifCSR = typeof window === "undefined";
  const lang = (ifCSR ? ssrLocaleData.locale : locale) || "en";
  const langs = (ifCSR ? ssrLocaleData.locales : locales) || [];
  return {
    lang,
    langs,
  };
};
export default useLanguageTypes;
