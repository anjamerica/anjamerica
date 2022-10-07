import { useRouter } from "next/router";
import React from "react";

export default function Card({ icon, subTitle, title, description, link }) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-5 rounded-2xl shadow-md bg-[#EAF2FF] w-full  lg:w-[600px] lg:h-[450px] 2xl:w-[650px] 2xl:h-[500px]">
      <div
        className="hidden md:flex md:w-32 md:h-32 md:bg-polygon-image md:bg-no-repeat md:justify-center md:items-center"
        style={{
          objectFit: "cover",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full self-center flex justify-center items-center">
          {icon}
        </div>
      </div>
      <p className="text-base 2xl:text-lg text-[#809AEA] text-center">
        {subTitle}
      </p>
      <p className="heading-main text-gray-medium text-center text-xl 2xl:text-3xl">
        {title}
      </p>
      <p className="text-center 2xl:text-lg text-gray-medium text-base md:px-10">
        {description}
      </p>
      <div>
        <button
          className="w-36 mt-2 md:mt-4 flex justify-center items-center bg-primary-blue font-semibold py-2 text-white uppercase rounded-full"
          onClick={() => {
            router.push(`${link}`);
          }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}
