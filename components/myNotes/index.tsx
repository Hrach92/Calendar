import React, { memo } from "react";

import { Box, Button, Modal } from "@mui/material";
import sxStyle from "./sxStyle.sx";

function MyNotes() {
  return (
    <Modal open={false}>
      <Box sx={sxStyle.container}>
        <Box></Box>
        <Box>
          <Button>cancel</Button>
          <Button>save</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default memo(MyNotes);
