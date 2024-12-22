import React from "react";

export default function ServiceContent({ item }) {
  return (
    <div className="w-full p-5 rounded-[20px] mt-2 md:mt-5 bg-white">
      <div className="w-full flex justify-center">
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          className="text-xl w-full text-center  md:mb-8 leading-[40px] md:leading-[57px] md:text-[40px] font-light max-w-[1236px]"
        >
          {item?.title}
        </p>
      </div>
      <div className="flex justify-center pt-8 xl:pb-20">
        <div className="w-full max-w-[1300px] flex flex-col xl:flex-row justify-between items-center">
          <div className="w-full xl:w-[45%]">
            <img
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              data-aos="flip-left"
              className={`w-full h-full object-contain max-h-[450px] ${item?.imageStyle}`}
              src={item?.img}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            className="w-full xl:w-[45%]"
          >
            {item?.para?.map((item, i) => (
              <div className="mb-2" key={i}>
                <p
                  key={i}
                  className="text-base mt-5 md:mt-0 leading-[32px] text-justify font-normal text-gray-dark"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
