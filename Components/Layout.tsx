import LeftNavBar from "./LeftNavBar";
import React, { memo } from "react";
import Header from "./header";
import RightNavBar from "./rightNavBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LeftNavBar />
      <RightNavBar />
      {children}
    </>
  );
}

export default memo(Layout);
