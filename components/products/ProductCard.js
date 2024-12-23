import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function ProductCard({ data, currentIndex }) {
  return (
    <>
      {/* <div
        className="flex flex-col w-full lg:flex-row-reverse justify-between gap-0 md:gap-10 fade-in"
        setCurrentIndex={currentIndex}
      >
        <img
          alt="product image"
          src={data[currentIndex].img}
          className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mt-0 flex self-center lg:self-start  md:mt-0"
        />
        <div>
          <p className="text-primary-blue  heading-main  md:w-full py-4 text-left font-bold break-words mx-[2.5rem] md:mx-0 text-base text-[24px] 2xl:text-[30px]">
            {data[currentIndex].product}
          </p>
          <p className="flex flex-col items-start text-[#535353] heading-main font-semibold text-[16px] sm:text-[24px] 2xl:text-[30px] break-words mt-2 text-left mx-[2.5rem] md:mx-0 ">
            {data[currentIndex].description}
          </p>
          <div className="mt-4 mx-[2.5rem] md:mx-0 self-left">
            <svg
              width="108"
              height="3"
              viewBox="0 0 108 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.5 0L0 2L107.5 3V0Z" fill="#07038C" />
            </svg>
          </div>
          <div className="flex flex-col items-left gap-2 2xl:gap-4 break-words mt-8 mx-[2.5rem] md:mx-0">
            {data[currentIndex].features.map((feature, i) => {
              return (
                <div className="flex flex-row gap-2" key={i}>
                  <span>
                    <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
                  </span>
                  <span className="text-[#222] text-[16px] 2xl:text-[20px ] text-left">
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="h-center absolute bottom-[2.5rem] md:bottom-[3.5rem] flex flex-row gap-2">
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`rounded-full h-3 w-3 md:w-5 md:h-5 ${
                    i == currentIndex
                      ? "bg-primary-blue"
                      : "bg-primary-blue opacity-[31%]"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
}
