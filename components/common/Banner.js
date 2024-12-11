import React from "react";
import Container from "./Container";

export default function Banner({ item }) {
  return (
    <div
      className={` h-full w-full flex justify-start items-end  md:items-center  ${item?.bannerStyle}`}
    >
      <Container>
        <div className="bg-white mt-20 w-full md:max-w-[600px] mb-5 md:mb-0 flex flex-col gap-2 md:gap-4 p-5 md:p-8">
          <p className="heading-1 max-w-[400px]">{item?.title}</p>
          <p className="text-md font-normal md:text-[20px] text-justify leading-[26px] md:leading-[30px] text-gray-tertiary">
            {item?.description}
          </p>
          {item?.otherChild ? (
            <div className="w-fit">{item?.otherChild}</div>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
}
