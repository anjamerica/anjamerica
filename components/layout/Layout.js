import React from "react";
import Header from "../landin/Header";

export default function Layout({children}) {
  return (
    <main className="relative mx-auto w-full h-full snap-y scroll-delay">
      <div className="w-full h-fit bg-white shadow-sm fixed top-0 z-[999]">
        <Header />
      </div>
      <div className="mt-[80px]">
          {
              children
          }
      </div>
    </main>
  );
}
