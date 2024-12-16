import React from "react";

import { GoArrowUpRight, GoDotFill } from "react-icons/go";
import Button from "../../common/Button";
import { useRouter } from "next/router";

export default function JobDetails({ details, index }) {
  const router = useRouter();

  const socialLinks = [
    {
      linkTo: "https://www.facebook.com/anjamericadotcom/about/",
      image: "/V2/logos/landing/footer/facebook.svg",
    },
    {
      linkTo: "https://www.linkedin.com/company/anj-america",
      image: "/V2/logos/landing/footer/linkedIn.svg",
    },
    {
      linkTo: "https://www.instagram.com/anj.america/?igshwid=YmMyMTA2M2Y%3D",
      image: "/V2/logos/landing/footer/instagram.svg",
    },
  ];

  return (
    <div className={`flex flex-col gap-2 md:gap-4  border-b-gray-400 `}>
      <p className="text-gray-senary text-md font-normal leading-[21px]">
        {details?.description}
      </p>

      <p className="text-gray-senary text-md font-medium underline leading-[21px]">
        Responsibilities:
      </p>
      <div className=" flex flex-col gap-2 md:gap-4">
        {details?.responsibilities?.map((item, i) => (
          <KeyValue item={item} key={i} />
        ))}
      </div>

      <p className="text-gray-senary text-md font-medium underline leading-[21px]">
        Qualifications and Skills:
      </p>
      <div className=" flex flex-col gap-2 md:gap-4">
        {details?.qualification?.map((item, i) => (
          <KeyValue item={item} key={i} />
        ))}
      </div>
      <p className="text-gray-senary text-md font-medium underline leading-[21px]">
        Why Join Us?
      </p>
      <div className=" flex flex-col gap-2 md:gap-4">
        {details?.benefits?.map((item, i) => (
          <KeyValue item={item} key={i} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 my-5 md:mt-8">
        <div>
          <Button
            title="Apply with resume"
            onClick={() =>
              router.push({
                pathname: "/job-apply",
                query: {
                  id: details?.jobId,
                },
              })
            }
            icon={<GoArrowUpRight className="w-5 h-5 text-white" />}
          />
        </div>
        <div className="w-[1px] h-[50px] bg-gray-light" />
        <div>
          <p className="text-gray-senary text-md font-normal leading-[21px]">
            Share with your friends
          </p>
          <div className="w-full mt-1 justify-center sm:justify-start flex items-center flex-wrap gap-3">
            {socialLinks?.map((item, i) => (
              <SocialLinkCard item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyValue({ item }) {
  return (
    <div className="flex gap-2">
      <GoDotFill className="w-2 h-2 mt-[6px]" />
      <div className="flex flex-col gap-2">
        {item?.title && (
          <p className="text-gray-senary text-md font-semibold leading-[21px]">
            {item?.title}
          </p>
        )}
        <p className="text-gray-senary text-md font-normal leading-[21px]">
          {item?.description}
        </p>
      </div>
    </div>
  );
}

function SocialLinkCard({ item }) {
  return (
    <a target="_blank" rel="noreferrer" href={item?.linkTo}>
      <img
        className="w-[31px] h-[31px] object-contain"
        src={item?.image}
        alt="social-icon"
      />
    </a>
  );
}
