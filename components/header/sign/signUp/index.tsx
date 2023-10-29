import { Button, Typography } from "@mui/material";
import BaseInput from "../../../../features/input";
import useOnChange from "../../../../hooks/useOnChange";
import Trans from "../../../trans";
import sxStyle from "./sxStyle.sx";

type SignTypes = {
  setToggle?: () => void;
};

function SignUp({ setToggle }: SignTypes) {
  const { text, onChange } = useOnChange();
  return (
    <>
      <Typography sx={sxStyle.text}>
        <Trans word="emailSignUp" />
      </Typography>
      <BaseInput type="email" value={text} onChange={onChange} />
      <BaseInput type="password" value={text} onChange={onChange} />
      <Button variant="outlined" color="primary">
        <Trans word="signUp" />
      </Button>
      <Button variant="outlined" color="primary" onClick={setToggle}>
        <Trans word="signIn" />
      </Button>
    </>
  );
}
export default SignUp;
