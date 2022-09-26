import { useRouter } from "next/router";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { BiSearchAlt2 } from "react-icons/bi";
import DatePicker from "./DatePicker";

export const FilterComponent = ({ setFilter }) => {
  const router = useRouter();
  const fromD = useRef();
  const toD = useRef();
  const { from, to } = router.query;
  const [fromDate, setFromDate] = useState(from);
  const [toDate, setToDate] = useState(to);
  const [showPicker, setShowPicker] = useState(false);

  const handleSearch = () => {
    if ((fromDate && !toDate) || (toDate && !fromDate)) {
      return toast.error("both from and to dates required.");
    }

    if (!fromDate) {
      return router.push(`/applications`);
    }
    return router.push(`/applications?from=${fromDate}&to=${toDate}`);
  };
  console.log();
  return (
    <>
      <div
        className="h-full w-full backdrop-sepia-0 bg-black/20 fixed left-0 top-0"
        id="filter-modal-body"
        onClick={() => {
          setFilter(false);
        }}
      ></div>
      <div
        className={`filter-component bg-white grid grid-cols-11 sm:gap-4 p-4  z-50 w-[312px] h-[200px] sm:w-[379px] sm:h-[222px] shadow rounded-md`}
      >
        <div className="col-span-11">
          <div className="flex-col w-full text-[#2B3131 text-lg] sm:text-[24px] font-normal sm:text-2xl">
            Select date
          </div>
        </div>
        <div className="col-span-5 relative">
          <div className="flex-col  w-full self-start">
            <span
              className="text-[12px]  text-[#ADB3BC] font-[400] "
              htmlFor="Company name"
            >
              From date
            </span>
            <div>
              <DatePicker value={fromDate} setValue={setFromDate} />
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 place-items-center flex justify-center items-center h-full">
          <div className="bg-[#DFE0E7] self-center h-full w-[1px]"></div>
        </div>
        <div className="col-span-5">
          <div className="flex-col  w-full relative">
            <label
              className="text-[12px]  text-[#ADB3BC] font-[400]"
              htmlFor="Website"
            >
              To date
            </label>
            <div>
              <DatePicker value={toDate} setValue={setToDate} />
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-[#DFE0E7] w-full col-span-11 place-items-center flex justify-center"></div>
        <div className="col-span-12 grid place-items-end">
          <div className="flex  w-full justify-end mr-2 sm:mr-3">
            <button
              className="w-[80px] h-[35px] md:w-[87px] md:h-[42px]  font-medium text-white bg-[#214ED1] px-4 md:px-5 py-1 md:py-2 self-end  rounded-md text-center flex items-center justify-center"
              onClick={() => handleSearch().then(setFilter(false))}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
