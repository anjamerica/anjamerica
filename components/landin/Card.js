import { useRouter } from "next/router";
import React from "react";

export default function Card({
  icon,
  subTitle,
  title,
  description,
  link,
  si_no,
}) {
  const router = useRouter();
  return (
    <div
      className="relative flex flex-col justify-center items-center  p-5 rounded-2xl shadow-xl bg-[#EAF2FF] w-full h-[400px] md:h-[460px]  lg:w-[600px] lg:h-[450px] 2xl:w-[650px] 2xl:h-[500px]"
      onClick={() => {
        console.log(si_no);
      }}
    >
      <div
        className={`hidden md:flex md:w-24 md:h-24 lg:w-28 lg:h-28 md:bg-polygon-image`}
        style={{
          objectFit: "cover",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: "6%",
          width: "100%",
        }}
      >
        <div className=" w-full h-full self-center flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div className="md:mt-8">
        <p className={`text-base 2xl:text-lg text-[#809AEA] text-center`}>
          {subTitle}
        </p>
        <p className="heading-main font-bold text-gray-medium text-center text-xl 2xl:text-3xl">
          {title}
        </p>
        <p className="text-center mt-2 2xl:text-lg text-gray-medium text-base  sm:px-10 md:px-5 xl:px-10">
          {description}
        </p>
      </div>
      <div
        className="absolute  left-1/2 -translate-x-1/2 bottom-10"
        style={
          {
            // position: "absolute",
            // top: "0",
            // bottom: "5px",
            // margin: "0"
          }
        }
      >
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
