import React from "react";

export default function Container({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="px-5 max-w-[1330px] w-full">{children}</div>
    </div>
  );
}
