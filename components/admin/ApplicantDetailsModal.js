import React, { useState } from "react";
import { useRouter } from "next/router";
import { downloadFile } from "../../services/file";
import { AiOutlineClose } from "react-icons/ai";
import { DateFormatter } from "../common/DateFormatter";
import ButtonLoader from "../layout/ButtonLoader";

export default function ApplicantDetailsModal({ item, setModal }) {
  const date = DateFormatter(item.createdAt);
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const handleGetCv = async (file) => {
    try {
      isLoading(true);
      const response = await downloadFile(file);
      router.push(`/${response.config.url}`);
      isLoading(false);
      // window.open(`/${response.config.url}`,"_blank")
      console.log(response);
    } catch (error) {
      console.error(error);
      isLoading(false);
    }
  }; 
  console.log(item);
  return (
    <div
      className="fixed left-0 top-0 w-full h-full flex justify-center items-center"
      id="modal"
    >
      <div
        className="fixed left-0 top-0 bg-black w-full h-full opacity-[0.7] z-20"
        onClick={(e) => {
          setModal(false);
        }}
      ></div>
      <div className="w-full bg-[#F0F0F0] h-fit py-10 sm:py-20  flex flex-col gap-2 px-5 md:p-10 z-50  md:w-[80vw] xl:w-[55vw] overflow-y-auto  md:rounded-xl fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="w-full flex justify-between">
          <p className="text-[32B3131] text-[24px] font-normal">
            {item?.job_details?.job_title}
          </p>
          <div className="" onClick={() => setModal(false)}>
            <AiOutlineClose className="h-5 w-5 text-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:mt-4 md:grid-flow-row md:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-0">
            <p className="text-[1rem] font-semibold text-black">
              Application ID
            </p>
            <p className="text-[1rem] font-medium text-[#5A5A5A]">
              {item?.app_id}
            </p>
            <div className="h-[.1px] mt-2 bg-[#545454] opacity-50 w-full" />
          </div>
          <div className="flex flex-col mt-2 sm:mt-0 gap-0">
            <p className="text-[1rem] font-semibold text-black">
              Application Date
            </p>
            <p className="text-[1rem] font-medium text-[#5A5A5A]">{date}</p>
            <div className="h-[.1px] mt-2 bg-[#545454] opacity-50 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-0 mb-1">
            <p className="text-[1rem] font-semibold text-black">Name</p>
            <p className="text-[1rem] font-medium text-[#5A5A5A]">
              {item.name}
            </p>
            <div className="h-[.1px] mt-2 bg-[#545454] opacity-50 w-full" />
          </div>
          <div className="flex flex-col gap-0 mt-2 md:mt-0">
            <p className="text-[1rem] font-semibold text-black">Email</p>
            <p className="text-[1rem] font-medium text-[#5A5A5A]">
              {item.email}
            </p>
            <div className="h-[.1px] mt-2 bg-[#545454] opacity-50 w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-0">
            <p className="text-[1rem] font-semibold text-black">Phone Number</p>
            <p className="text-[1rem] font-medium text-[#5A5A5A]">
              {item?.phone_number?.country_code}
              &nbsp;
              {item?.phone_number?.tell_number}
            </p>
            <div className="h-[.1px] mt-2 bg-[#545454] opacity-50 w-full" />
          </div>

          <div className="flex flex-col gap-0 mt-2 md:mt-0">
            <p className="text-[1rem] font-semibold text-black">
              Linkedin profile link
            </p>
            <p className="text-[1rem] font-medium hover:text-blue-500 w-[95%] truncate text-[#5A5A5A]">
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.link}
              </a>
            </p>
            <div className="h-[.1px] mt-2 bg-[#545454] opacity-50 w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-[1rem] font-semibold  text-black">Description</p>
          <p className="text-[1rem] text-justify font-medium text-[#5A5A5A]">
            {item.description}
          </p>
        </div>
        <div className="h-[.1px] bg-[#545454] opacity-50 w-full" />

        <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-2 mt-4 md:gap-6">
          <button
            className="cyan-action-button-admin whitespace-nowrap font-[500]"
            onClick={() => handleGetCv(item.file)}
          >
            {loading ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <>Click here to view resume</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
