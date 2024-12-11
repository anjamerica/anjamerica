import React from "react";

export default function Card({ item }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div>
          <img
            alt="cover image"
            src={item?.image}
            className="w-full object-cover h-[230px]"
          />
        </div>
        <div className="mt-3 flex flex-col text-left">
          <span className="text-lg md:text-xl mb-1 font-semibold">
            {item?.name}
          </span>
          <p className=" text-base md:text-lg mb-3 text-primary font-medium">
            {item?.position}
          </p>
          <div className="sm:w-full md:w-full mb-5">
            <p className="text-[15px] font-normal leading-[25px] tracking-wide text-gray-tertiary text-justify">
              {item?.description}
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="w-full text-[15px] py-2 flex justify-center items-center border border-[#E5E5E5] text-[#333] bg-blue-light">
        Hire {item?.name}
      </div>
    </div>
  );
}
