import React, { useState } from "react";
import Header from "../landin/Header";

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="relative mx-auto w-full h-full snap-y scroll-delay">
      {/* <div className="w-full h-fit bg-white shadow-sm fixed top-0 z-[999]">
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      </div> */}
      <div className="mt-[80px]">{children}</div>
    </main>
  );
}
