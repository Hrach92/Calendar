import React, { createContext, memo, useMemo, useState } from "react";
import { Lang } from "../../dependencies/types";

const localInitialData: Lang = {
  locale: "en",
  locales: ["en", "ru"],
  defaultLocale: "en",
};

export const LocaleContext = createContext({ ssrLocaleData: localInitialData });

interface LocaleProviderProps extends Lang {
  readonly children: React.ReactNode;
}

const LocaleProvider = ({
  locale,
  locales,
  defaultLocale,
  children,
}: LocaleProviderProps): JSX.Element => {
  const [ssrLocaleData] = useState({ locale, locales, defaultLocale });

  const value = useMemo(() => ({ ssrLocaleData }), [ssrLocaleData]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
export default memo(LocaleProvider);
