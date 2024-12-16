import React from "react";

export default function Loader({ color = "bg-white" }) {
  return (
    <div classNameName="flex space-x-2 justify-center items-center h-full w-full dark:invert">
      <span classNameName="font-light text-md">Loading...</span>
      <div
        className={`hidden xl:block h-2 w-2 rounded-full animate-bounce [animation-delay:-0.3s] ${color}`}
      ></div>
      <div
        className={`hidden xl:block h-2 w-2 rounded-full animate-bounce [animation-delay:-0.15s] ${color}`}
      ></div>
      <div
        className={`hidden xl:block h-2 w-2 rounded-full animate-bounce ${color}`}
      ></div>
    </div>
  );
}
