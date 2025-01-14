import React from "react";
import CampaignResponseApplyForm from "../../components/pages/careers/CampaignResponseApplyForm";

export default function Index() {
  return (
    <div className="w-full -mt-[62px]">
      <div className="flex justify-center pb-10 pt-24 md:pt-36 bg-white rounded-[20px] flex-col items-center gap-2 md:gap-4">
        <p className=" text-lg md:text-[30px] text-center xl:text-[60px] font-bold">
          Empower Your Future With On-Demand Learning
        </p>
        <p className="text-md md:text-[22px] px-5 md:px-0 md:mt-6 text-gray-senary text-center max-w-[890px] leading-[21px] md:leading-[30px] font-normal">
          Access expertly designed courses by industry professionals, learn at
          your own pace, and achieve your goals with flexible, on-demand
          learning anytime, anywhere.
        </p>
      </div>
      <CampaignResponseApplyForm />
    </div>
  );
}
