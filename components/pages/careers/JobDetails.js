import React from "react";

import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";

import Button from "../../common/Button";
import { useRouter } from "next/router";

export default function JobDetails({ details, index }) {
  const router = useRouter();

  const socialLinks = [
    {
      linkTo: "https://x.com/AnjAmerica?t=PWTlzQLST3AQKpJgvd3bOw&s=09",
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/career/x.svg",
    },
    {
      linkTo: "https://www.facebook.com/anjamericadotcom/about/",
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/career/fb.svg",
    },
    {
      linkTo: "https://www.linkedin.com/company/anj-america",
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/career/linkedin.svg",
    },
    {
      linkTo: "https://www.instagram.com/anj.america/?igshwid=YmMyMTA2M2Y%3D",
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/career/insta.svg",
    },
  ];

  return (
    <div
      key={index}
      className={`flex flex-col gap-2 md:gap-4  border-b-white border-b-[3px] max-w-[90vw]`}
    >
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
            icon={<FaArrowRight className="w-4 h-4 text-white" />}
          />
        </div>
        <div className="w-[1px] h-[50px] bg-gray-light" />
        <div>
          <p className="text-gray-senary text-md font-normal leading-[21px]">
            Share with your friends
          </p>
          <div className="w-full mt-2 justify-center sm:justify-start flex items-center flex-wrap gap-3">
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
        className="w-5 h-5 object-contain"
        src={item?.image}
        alt="social-icon"
      />
    </a>
  );
}
