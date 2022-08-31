import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ProductCard from "../components/products/ProductCard";

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
    }, 10000);
  }, []);

  return (
    <div className="relative flex flex-col pt-10 pb-20 md:py-10 bg-white items-center justify-center w-full">
      <div className="flex flex-col gap-0 self-center justify-center">
        <p className="text-subheading-main heading-main text-primary-black self-center">
          Our Products
        </p>
        <div
          className="grid grid-flow-row w-full px-0 md:py-10 sm:px-[50px] lg:px-[80px] xl:px-[150px]"
          
        >
          <ProductCard data={data} currentIndex={currentIndex} />
        </div>
        <img
          alt="prev arrow"
          src="/landing/prev-arrow.svg"
          className="hidden md:flex  md:h-10 md:absolute md:top-[20rem] md:left-[17px] lg:h-10 lg:left-[17px] xl:left-[24px] sm:w-7  xl:w-fit  text-primary-gray cursor-pointer"
          onClick={() => handleOnPrevClick()}
        />
        <img
          alt="next arrow"
          src="/landing/next-arrow.svg"
          className="hidden md:flex md:h-10 md:absolute md:top-[20rem] md:right-[17px] lg:h-10 lg:right-[17px] xl:right-[24px] sm:w-7  xl:w-fit   text-primary-gray cursor-pointer"
          onClick={() => handleOnNextClick()}
        />
      </div>
    </div>
  );
}
