import { Input } from "antd";
import React from "react";

export default function TextArea({
  value,
  rows = 5,
  error = null,
  onChange,
  placeholder,
  type = "text",
  className = "rounded-full p-3 border border-solid border-[#94A3B8]",
}) {
  const isError = error !== null;

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      if (value === "+91") {
        e.preventDefault();
      }
    }
  };
  return (
    <div>
      <Input.TextArea
        rows={rows}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        className={` w-full border rounded-none border-solid border-[#B7B7B7] p-2 ${className} ${
          isError && "border border-solid border-[#D12E34]"
        }`}
      />
      {error && (
        <p className="text-[#D12E34] text-sm plus-jakarta-sans font-normal mt-2">
          {error?.message}
        </p>
      )}
    </div>
  );
}
