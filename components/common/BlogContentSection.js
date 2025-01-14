import React from "react";
import Link from "next/link";

const BlogContentSection = ({ item }) => {
  return (
    <div className="w-full p-5 rounded-[20px] mt-2 md:mt-5 bg-white mb-5">
      <div className="w-full flex justify-center"></div>
      <div className="flex justify-center pt-8 xl:pb-20">
        <div className="w-full max-w-[1300px] flex flex-col xl:flex-row justify-between items-center">
          <div className="w-full xl:w-[45%]">
            <img
              className={`w-[511.64px] h-[352px] rounded-xl object-cover max-h-[450px] ${item?.imageStyle}`}
              src={item?.img}
              alt="Content Image"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            className="w-full xl:w-[45%]"
          >
            {/* Date */}
            {item?.date && (
              <p className="flex items-center text-orange-primary text-md gap-2 hover:underline mb-4">
                {item.date}
              </p>
            )}

            {/*  Title */}
            {item?.title && (
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h2>
            )}

            {/*  Desc */}
            {item?.description && (
              <p className="text-base leading-[28px] text-gray-600 mb-6">
                {item.description}
              </p>
            )}

            {item?.moreInfo && (
              <p className="text-sm font-bold text-blue-600">{item.moreInfo}</p>
            )}
            <Link href={item?.linkTo || "/blogs/points-to-remember"} passHref>
              <a className="flex items-center text-orange-primary text-md gap-2 hover:underline">
                More Info
                <img
                  src="/V3/logos/common/arrow.svg"
                  className="w-5 h-3 object-contain"
                  alt="arrow"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContentSection;
