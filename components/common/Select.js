"use client";
import React from "react";
import { ConfigProvider, Select } from "antd";
import { FaChevronDown } from "react-icons/fa";

export default function SelectInput({
  label,
  onChange,
  value,
  error = null,
  placeholder,
  showSearch = true,
  labelKey = "label",
  valueKey = "_id",
  Component = Select,
  disabled,
  required = false,
  type = "outlined",
  className = "rounded-full",
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const isError = error !== null;
  return (
    <div
      className={`w-full ${
        (isFocused || value) && props.role === "Creator"
          ? "input-wrapper"
          : (isFocused || value) && props.role === "Brand"
          ? "input-wrapper-two"
          : ""
      }`}
    >
      {label && (
        <p className="text-primary text-[14px] font-semibold leading-[23px] mb-1">
          {`${label}  ${required ? "*" : ""}`}
        </p>
      )}

      <Component
        size="large"
        type={type}
        value={value || undefined}
        showSearch={showSearch}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={false}
        placeholder={placeholder}
        className={` w-full !h-[48px] border rounded-none ${className} ${
          isError && "border border-solid border-[#D12E34]"
        }`}
        suffixIcon={<FaChevronDown className="text-black w-[10px] mr-2" />}
        fieldNames={{
          label: labelKey,
          value: valueKey,
        }}
        labelInValue
        onChange={onChange}
        virtual={false}
        {...props}
      />
    </div>
  );
}
