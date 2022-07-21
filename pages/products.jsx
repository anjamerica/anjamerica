import { data } from "autoprefixer";
import React,{ useState } from "react";
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
      img:"/assets/landing/product.svg"
    },
    {
      product: "Online Enrollment system",
      description:
        "",
      features: [
        "Simple, Seamless & Secure Plan Selection",
        "Easy Enrolment",
        "All under one roof",
      ],
      img:"/assets/landing/product_2.svg"
    },
    {
      product: "Commission Tracking system",
      description:
        "",
      features: [
        "Accurate Calculations",
        "Unlimited Commission Splits",
        "Email individual Reports at a click",
        "Agent access to commissions round the clock"
      ],
      img:"/assets/landing/product.svg"
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

  console.log(data[currentIndex].product);

  return (
    <div className="relative flex flex-col pt-10 pb-20 md:py-10 bg-white items-center justify-center w-full">
      <div className="flex flex-col justify-center gap-4">
        <div className="text-green-medium">WHAT WE DO</div>
        <div className="text-[#535353] font-bold text-[1.5rem] self-center md:text-[2rem]">
          Our Products
        </div>
        <div className="flex flex-col items-center text-secondary-gray text-sm break-words text-center md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div className="grid grid-flow-row w-full md:px-10">
          {/* {data.map((item, index) => {
            return ( */}
          <div
            className="flex flex-col w-full md:flex-row-reverse gap-0 md:gap-10"
            setCurrentIndex={currentIndex}
          >
            <img
              src={data[currentIndex].img}
              className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] mt-0 flex self-center md:self-start  md:mt-0"
            />
            <div>
              <p className="text-primary-green  py-4 text-left font-bold break-words mx-[2.5rem] md:mx-0 text-base  md:text-[24px]">
                {data[currentIndex].product}
              </p>
              <p className="flex flex-col items-start text-[#535353] font-semibold text-sm break-words mt-2 text-left mx-[2.5rem] md:mx-0 w-[70%]">
                {data[currentIndex].description}
              </p>
              <div className="mt-4 mx-[2.5rem]">
                <svg
                  width="108"
                  height="3"
                  viewBox="0 0 108 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M107.5 0L0 2L107.5 3V0Z" fill="#33B5AF" />
                </svg>
              </div>
              <div className="flex flex-col items-left gap-2 break-words mt-8 mx-[2.5rem] md:mx-0">
                {data[currentIndex].features.map((feature,i) => {
                  return (
                    <div className="flex flex-row gap-2" key={i}>
                      <span>
                        <IoMdCheckmarkCircleOutline className="h-5 w-5 text-primary-green md:h-7 md:w-7" />
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
                          ? "bg-primary-green"
                          : "bg-primary-green opacity-[31%]"
                      }`}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/landing/left_arrow.svg"
          className="hidden md:flex md:h-[3rem] md:absolute md:top-[20rem] md:left-[1rem] lg:h-[4rem] lg:left-[1rem] xl:left-[6rem]  w-fit  text-primary-gray cursor-pointer"
          onClick={() => handleOnPrevClick()}
        />
        <img
          src="/assets/landing/right_arrow.svg"
          className="hidden md:flex md:h-[3rem] md:absolute md:top-[20rem] md:right-[1rem] lg:h-[4rem] lg:right-[1rem] xl:right-[6rem]  w-fit  text-primary-gray cursor-pointer"
          onClick={() => handleOnNextClick()}
        />
      </div>
    </div>
  );
}
