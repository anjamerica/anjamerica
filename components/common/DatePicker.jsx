import React, { useRef } from "react";

function DatePicker({ value, setValue = () => {},textColor }) {
  const dateRef = useRef(null);

  const handleDate = () => {
    dateRef.current.showPicker();
  };

  return (
    <div className="flex items-baseline justify-start py-0 -mt-[10px]">
      <input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={dateRef}
        className="invisible w-0"
      />
      <span className="text-[14px] font-[500]" style={{color:textColor}}>{value || "dd/mm/yyy"}</span>
      <img
        src="/admin/calender_icon.svg"
        className="ml-[26px] w-[25px] h-[25px] sm:w-[27px] md:h-[27px] "
        onClick={handleDate}
      />
    </div>
  );
}

export default DatePicker;
