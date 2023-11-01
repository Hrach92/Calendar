import { useRouter } from "next/router";
import { memo } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import sxStyle from "./sxStyle.sx";
import useLanguageTypes from "../../hooks/useLanguageTypes";
import { Target } from "../../dependencies/types";
import Trans from "../../components/trans";
import { changeLang } from "../../dependencies/events";

type LanguageType = {
  background?: string;
  handleClose?: () => void;
};

const Languages = ({ background, handleClose }: LanguageType): JSX.Element => {
  const { asPath, ...router } = useRouter();
  const { langs, lang } = useLanguageTypes();

  const chooseLanguage = ({ target }: Target): void => {
    router.push(asPath, asPath, {
      shallow: true,
      scroll: false,
      locale: target.value,
    });
    changeLang(target.value);
  };

  return (
    <Box sx={(sxStyle.box, { background })}>
      <FormControl>
        <Select sx={sxStyle.select} value={lang} onChange={chooseLanguage}>
          {langs.map((val: string) => (
            <MenuItem
              onClick={handleClose}
              sx={sxStyle.item}
              key={val}
              value={val}
            >
              <Trans word={`lang.${val}`} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default memo(Languages);
