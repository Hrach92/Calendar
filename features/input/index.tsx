"use client";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import { Target } from "../../dependencies/types";

type InputTypes = {
  type?: string;
  value?: string;
  onChange: (target: Target) => void;
  sx?: object;
};
function BaseInput({
  type,
  value,
  onChange,
  sx = {},
}: InputTypes): JSX.Element {
  return (
    <FormControl sx={[sxStyle.field, sx]}>
      <Input
        sx={sxStyle.input}
        type={type}
        name={type}
        value={value}
        placeholder={type}
        onChange={onChange}
        disableUnderline
        fullWidth
      />
    </FormControl>
  );
}
export default memo(BaseInput);
