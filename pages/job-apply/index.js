import React from "react";
import { useRouter } from "next/router";

import jobs from "../../constants/jobs.json";
import JobApplyForm from "../../components/pages/careers/JobApplyForm";

export default function Index() {
  const router = useRouter();

  const jobId = router.query.id;

  const job = jobs?.activeJobs?.find((item) => item?.jobId === jobId);

  return (
    <div className="w-full -mt-[62px]">
      <div className="flex justify-center pb-10 pt-20 md:pt-32 bg-white rounded-[20px] flex-col items-center gap-2 md:gap-4">
        <p className=" text-lg md:text-[60px] font-bold">Apply with resume</p>
        <p className="text-md md:text-[22px] px-5 md:px-0 md:mt-6 text-gray-senary text-center max-w-[695px] leading-[21px] md:leading-[30px] font-normal">
          We empower our team to shape a better future, fostering growth and
          learning to help them reach their full potential.
        </p>
      </div>
      <JobApplyForm job={job} />
    </div>
  );
}
