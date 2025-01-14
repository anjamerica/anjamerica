import React from "react";
import Loader from "./Loader";

export default function Button({ title, loading, icon, ...props }) {
  return (
    <button
      disabled={loading || props.disabled}
      className={`flex gap-2 bg-orange-primary items-center rounded-full font-semibold text-white w-full py-3 tracking-wide justify-between px-6 ${
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
