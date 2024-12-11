import React from "react";

export default function Button({ title, icon, ...props }) {
  return (
    <button
      className="flex gap-4 bg-primary-blue items-center font-semibold text-white w-full h-[50px] justify-between px-6"
      {...props}
    >
      {title}
      {icon && <div>{icon}</div>}
    </button>
  );
}
