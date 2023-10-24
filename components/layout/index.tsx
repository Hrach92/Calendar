import LeftBar from "../leftBar";
import React, { memo } from "react";
import Header from "../header";
import RightBar from "../rightBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LeftBar />
      <RightBar />
      {children}
    </>
  );
}

export default memo(Layout);
