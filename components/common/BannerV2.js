import React from "react";

export default function BannerV2({ item }) {
  return (
    <div
      className={`${item?.background} relative rounded-[20px] -mt-[19px] flex justify-center items-center w-full`}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-full rounded-b-[20px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, #000000 87.14%)",
          zIndex: 0, // Ensure it stays below content
        }}
      ></div>
      <div className="flex flex-col z-10 items-center bottom-8 md:bottom-20 gap-6">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className={`text-2xl md:leading-[70px] tracking-wide text-center md:text-[60px] font-bold  text-white ${item?.titleStyle}`}
        >
          {item?.title}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className={`text-lg px-5 md:px-0 text-center leading-[30px] md:text-[22px] font-medium max-w-[1117px] text-white opacity-80 ${item?.descriptionStyle}`}
        >
          {item?.description}
        </p>
      </div>
    </div>
  );
}
