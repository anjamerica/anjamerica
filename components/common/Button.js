import React from "react";
import Loader from "./Loader";

export default function Button({ title, loading, icon, ...props }) {
  return (
    <button
      disabled={loading || props.disabled}
      className={`flex gap-4 bg-primary-blue items-center font-semibold text-white w-full h-[50px] justify-between px-6 ${
        props.disabled && "opacity-50"
      }`}
      {...props}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {title}
          {icon && <div>{icon}</div>}
        </>
      )}
    </button>
  );
}
