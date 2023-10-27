import { Button, Typography } from "@mui/material";
import BaseInput from "../../../../features/input";
import useOnChange from "../../../../hooks/useOnChange";
import Trans from "../../../trans";
import sxStyle from "./sxStyle.sx";

type SignTypes = {
  setToggle?: () => void;
};

function SignIn({ setToggle = () => {} }: SignTypes): JSX.Element {
  const { text, onChange } = useOnChange();
  return (
    <>
      <Typography sx={sxStyle.text}>
        <Trans word="emailSignIn" />
      </Typography>
      <BaseInput type="email" value={text} onChange={onChange} />
      <BaseInput type="password" value={text} onChange={onChange} />
      <Button variant="outlined" color="primary" disableRipple>
        <Trans word="signIn" />
      </Button>
      <Button variant="outlined" color="primary" onClick={setToggle}>
        <Trans word="signUp" />
      </Button>
    </>
  );
}
export default SignIn;
