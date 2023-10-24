import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { memo } from "react";

import { SampleData } from "../../../store/reducer/sampleReducer";
import Image from "next/image";
import { useSelector } from "../../../hooks/redux";

const Images = () => {
  const { notes } = useSelector(SampleData);

  return (
    <Box sx={sxStyle.bar}>
      {notes.map(({ img, title, id }: any) => {
        return (
          <Box title={title} key={id} sx={sxStyle.item}>
            <Image src={img} height={30} width={30} />
          </Box>
        );
      })}
    </Box>
  );
};
export default memo(Images);
