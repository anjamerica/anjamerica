import Link from "next/link";
import React from "react";

export default function Card({ item }) {
  return (
    <div className="h-full ">
      <div>
        <img
          alt="cover image"
          src={item?.image}
          className="w-full object-cover h-[230px]"
        />
      </div>
      <div className="p-5 md:min-h-[350px] flex flex-col bg-[#EBEBEB] text-left gap-4">
        <span className="text-[14px] font-thin">{item?.createdAt}</span>
        <p className="text-xl md:text-2xl font-medium">{item?.title}</p>
        <div className="sm:w-full md:w-full">
          <p className="text-[15px] font-normal text-justify md:text-start">
            {item?.description}
          </p>
        </div>
        {item?.id !== "ANJBLG-04" && (
          <Link href={`/blogs/${item?.id}`}>
            <span className="text-primary cursor-pointer font-bold underline text-[11px]">
              READ MORE
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
