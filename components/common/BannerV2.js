import React from "react";

export default function BannerV2({ item }) {
  return (
    <div
      className={`${item?.background} rounded-[20px] -mt-[19px] flex justify-center items-end pb-24 w-full`}
    >
      <div className="flex flex-col items-center bottom-8 md:bottom-20 gap-6">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="text-2xl md:leading-[70px] tracking-wide text-center md:text-[60px] font-bold  text-white"
        >
          {item?.title}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className="text-lg px-5 md:px-0 text-center leading-[30px] md:text-[22px] font-medium max-w-[1117px] text-white opacity-80"
        >
          {item?.description}
        </p>
      </div>
    </div>
  );
}
