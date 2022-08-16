import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

let count = 0;

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      product: "Vita Insurance Agency Management System",
      description:
        "It’s time to Digitize your Insurance Agency Instant Service for Customers",
      features: [
        "Flexibility for Staff",
        "Operational efficiency",
        "Increase profitability",
      ],
      img: "/assets/landing/product.svg",
    },
    {
      product: "Online Enrollment system",
      description: "",
      features: [
        "Simple, Seamless & Secure Plan Selection",
        "Easy Enrolment",
        "All under one roof",
      ],
      img: "/assets/landing/product_2.svg",
    },
    {
      product: "Commission Tracking system",
      description: "",
      features: [
        "Accurate Calculations",
        "Unlimited Commission Splits",
        "Email individual Reports at a click",
        "Agent access to commissions round the clock",
      ],
      img: "/assets/landing/product.svg",
    },
  ];

  const handleOnPrevClick = () => {
    const len = data.length;
    count = (currentIndex + len - 1) % len;
    setCurrentIndex(count);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % data.length;
    setCurrentIndex(count);
  };

  useEffect(() => {
    setInterval(function () {
      handleOnNextClick();
    }, 5000);
  }, []);

  return (
    <div className="relative flex flex-col pt-10 pb-20 md:py-10 bg-white items-center justify-center w-full">
      <div className="flex flex-col gap-0 self-center justify-center">
        <p className="text-subheading-main  text-primary-black self-center">
          Our Products
        </p>
        <div className="grid grid-flow-row w-full px-0 md:p-10">
          {/* {data.map((item, index) => {
            return ( */}
          <div
            className="flex flex-col w-full md:flex-row-reverse gap-0 md:gap-1 xl:gap-10"
            setCurrentIndex={currentIndex}
          >
            <img
              alt="product image"
              src={data[currentIndex].img}
              className="w-[20rem] h-[20rem]  md:w-[20rem] xl:w-[25rem] xl:h-[25rem] object-contain md:h-[20rem] mt-0 flex self-center md:self-start  md:mt-0"
            />
            <div>
              <p className="text-primary-blue w-[11rem] sm:w-[17rem] md:w-full py-4 text-left font-bold break-words mx-[2.5rem] md:mx-0 text-base sm:text-xl  md:text-[24px]">
                {data[currentIndex].product}
              </p>
              <p className="flex flex-col items-start text-[#535353] font-semibold text-sm break-words mt-2 text-left mx-[2.5rem] md:mx-0 w-[70%]">
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
              <div className="flex flex-col items-left gap-2 break-words mt-8 mx-[2.5rem] md:mx-0">
                {data[currentIndex].features.map((feature, i) => {
                  return (
                    <div className="flex flex-row gap-2" key={i}>
                      <span>
                        <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-blue md:h-7 md:w-7" />
                      </span>
                      <span className="text-secondary-gray text-md text-left">
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
          </div>
        </div>
        <img
          alt="prev arrow"
          src="/landing/prev-arrow.svg"
          className="hidden md:flex md:h-10 md:absolute md:top-[20rem] md:left-[1rem] lg:h-10 lg:left-[1rem] xl:left-[6rem] sm:w-7  xl:w-fit  text-primary-gray cursor-pointer"
          onClick={() => handleOnPrevClick()}
        />
        <img
          alt="next arrow"
          src="/landing/next-arrow.svg"
          className="hidden md:flex md:h-10 md:absolute md:top-[20rem] md:right-[1rem] lg:h-10 lg:right-[1rem] xl:right-[6rem] sm:w-7  xl:w-fit   text-primary-gray cursor-pointer"
          onClick={() => handleOnNextClick()}
        />
      </div>
    </div>
  );
}
