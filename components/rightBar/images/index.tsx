import { Box } from "@mui/material";
import { memo } from "react";
import Image from "next/image";
import sxStyle from "./sxStyle.sx";

import { SampleData } from "../../../store/reducer/sampleReducer";
import { useSelector } from "../../../hooks/redux";

const Images = () => {
  const { notes } = useSelector(SampleData);

  return (
    <Box sx={sxStyle.bar}>
      {notes.map(({ img, title, id }: any) => (
        <Box title={title} key={id} sx={sxStyle.item}>
          <Image src={img} height={30} width={30} alt="image" />
        </Box>
      ))}
    </Box>
  );
};
export default memo(Images);
