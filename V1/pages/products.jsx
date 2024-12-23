import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";

let count = 0;
let timer=null

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

  const handleOnPrevClick = (fromTimer) => {
    const len = data.length;
    count = (currentIndex + len - 1) % len;
    setCurrentIndex(count);
    if(fromTimer) return;
    clearTimeout(timer);
    createTimer();
  };

  const handleOnNextClick = (fromTimer) => {
    count = (count + 1) % data.length;
    setCurrentIndex(count);
    if(fromTimer) return;
    clearTimeout(timer);
    createTimer();
  };

  const createTimer=()=>{
    timer=setInterval(function () {
      handleOnNextClick(true)
    }, 4000);
  }

  useEffect(() => {
    createTimer();
  }, []);

  

  return (
    <div className="relative flex flex-col pt-10 pb-20 bg-white items-center justify-center w-full">
      <div className="flex flex-col gap-0 self-center justify-center">
        <p className="text-subheading-main font-[900] heading-main text-primary-black self-center">
          Our Products
        </p>
        <div className="grid grid-flow-row w-full px-0 md:py-10 sm:px-[50px] lg:px-[80px] xl:px-[150px]">
          <ProductCard data={data} currentIndex={currentIndex} />
        </div>
        <img
          alt="prev arrow"
          src="/landing/prev-arrow.svg"
          className="h-8 left-[10px]  md:h-10 absolute md:top-[20rem] md:left-[17px] lg:h-10 lg:left-[17px] xl:left-[24px] sm:w-7  xl:w-fit  text-primary-gray cursor-pointer"
          onClick={() => handleOnPrevClick()}
        />
        <img
          alt="next arrow"
          src="/landing/next-arrow.svg"
          className="h-8 right-[10px] md:h-10 absolute md:top-[20rem] md:right-[17px] lg:h-10 lg:right-[17px] xl:right-[24px] sm:w-7  xl:w-fit   text-primary-gray cursor-pointer"
          onClick={() => handleOnNextClick()}
        />
      </div>
      
    </div>
  );
}
