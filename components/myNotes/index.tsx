import React, { memo } from "react";

import { Box, Button, Modal } from "@mui/material";
import sxStyle from "./sxStyle.sx";

const MyNotes = () => (
  <Modal open={false}>
    <Box sx={sxStyle.container}>
      <Box />
      <Box>
        <Button>cancel</Button>
        <Button>save</Button>
      </Box>
    </Box>
  </Modal>
);

export default memo(MyNotes);
