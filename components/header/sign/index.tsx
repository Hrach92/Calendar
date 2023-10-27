import { Box, Button } from "@mui/material";
import useBoolean from "../../../hooks/useBoolean";
import Modal from "../../modal";
import SignIn from "./signIn";
import sxStyle from "./sxStyle.sx";
import SignUp from "./signUp";
import { useCallback } from "react";
import Trans from "../../trans";

function SignModal() {
  const { open, onClose, onOpen } = useBoolean();
  const { open: signInPage, setToggle, onOpen: setSignInPage } = useBoolean();

  const onCloseModal = useCallback(() => {
    onClose();
    setSignInPage();
  }, []);

  return (
    <>
      <Button
        // sx={sxStyle.button}
        variant="outlined"
        color="primary"
        onClick={onOpen}
      >
        <Trans word="signIn" />
      </Button>
      <Modal open={open} onClose={onCloseModal}>
        <Box sx={sxStyle.container}>
          {signInPage ? (
            <SignIn setToggle={setToggle} />
          ) : (
            <SignUp setToggle={setToggle} />
          )}
        </Box>
      </Modal>
    </>
  );
}
export default SignModal;
