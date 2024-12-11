import React from "react";
import HeaderV2 from "../components/common/HeaderV2";
import FooterV2 from "../components/common/FooterV2";

export default function DefaultLayout({ children }) {
  return (
    <div className="relative h-screen w-screen">
      <div className="sticky top-0 z-50 right-0">
        <HeaderV2 />
      </div>
      <div className="absolute top-0 w-full">
        {children}
        <FooterV2 />
      </div>
    </div>
  );
}
