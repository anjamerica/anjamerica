import React from "react";

// function DatePicker({ value, setValue = () => {}, textColor }) {
//   const dateRef = useRef(null);

//   const handleDate = () => {
//     try{
//       dateRef.current.showPicker();
//     }catch{
      
//     }
//   };

//   return (
//     <div className="flex items-baseline justify-start py-0 -mt-[10px]">
//       <input
//         type="date"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         ref={dateRef}
//         className="invisible w-0"
//       />
//       {value && (
//         <span className="text-[14px] font-[500] text-[#214ED1]">{value}</span>
//       )}
//       {!value && (
//         <span className="text-[14px] font-[500] text-[#96ABC6]">dd/mm/yyy</span>
//       )}
//       <img
//         src="/admin/calender_icon.svg"
//         className="ml-[26px] w-[25px] h-[25px] sm:w-[27px] md:h-[27px] select-all"
//         onClick={handleDate}
//       />
//     </div>
//   );
// }

// export default DatePicker;

function DatePicker  ({ value, setValue = () => {} }) {
  return (
    <input
      type="date"
      className="p-1 w-full bg-slate-100 text-gray-600 rounded-md focus:outline-none"
      placeholder="dd/mm/yyy"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default DatePicker;