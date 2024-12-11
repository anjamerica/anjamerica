import { useRouter } from "next/router";
import React from "react";

export default function CourseCard({ item }) {
  const router = useRouter();
  return (
    <div className="relative w-full h-full rounded-t-[11px] flex flex-col overflow-hiden rounded-[9px] md:rounded-none bg-white shadow-md">
      <div className="w-full h-[177px] md:h-[215px] rounded-[11px] relative">
        <img
          className="w-full h-full object-cover rounded-t-[11px]"
          src={item?.cover}
          alt="Course Cover"
        />
        <img
          className="w-[100px] h-[19px] object-contain absolute top-5 left-5 z-10"
          src="/V2/logos/common/logo-white-two-line.svg"
          alt="Anj logo"
        />
        <div className="absolute inset-0 rounded-t-[11px] bg-gradient-overlay z-0"></div>
      </div>

      <div className="w-full h-[180px] md:h-[200px]">
        <h4 className="p-4 text-base md:text-xl font-semibold text-gray-darker line-clamp-2">
          {item?.title}
        </h4>
        <div className="w-full px-4 pb-4  text-[#404040]">
          <ul>
            <li className="pb-1">
              <span className="font-normal text-xs">
                {item?.duration} MONTHS
              </span>
            </li>
            <li>
              <span className=" text-[#2B6CB0] block">
                DEDICATED CAREER SUPPORT
              </span>
            </li>
          </ul>
        </div>
      </div>
      <ul className="absolute bottom-0 border-t border-solid  border-[#efefef] left-0 w-full flex flex-wrap">
        <li className="w-1/2">
          <a href="/docs/ANJ_Brochure.pdf" download>
            <button className="w-full p-3 bg-[white] hover:bg-[#efefef] rounded-bl-[9px] md:rounded-none uppercase text-[#3E36B6]">
              Brochure
            </button>
          </a>
        </li>
        <li className="w-1/2">
          <button
            onClick={() => router.push(item?.linkTo)}
            className="w-full p-3 bg-[#3E36B6] hover:bg-[#efefef] rounded-br-[9px] md:rounded-none uppercase text-[white] hover:text-[#3E36B6]"
          >
            View Course
          </button>
        </li>
      </ul>
    </div>
  );
}
