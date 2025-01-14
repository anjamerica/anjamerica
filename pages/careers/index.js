import React, { useState } from "react";

import jobs from "../../constants/jobs.json";
import BannerV2 from "../../components/common/BannerV2";
import JobsList from "../../components/pages/careers/JobsList";
import JobFilter from "../../components/pages/careers/JobFilterForm";

export default function Index() {
  const [filteredJobs, setFilteredJobs] = useState(jobs?.activeJobs || []);

  const bannerContent = {
    title: "We are building the digital future",
    description:
      "We empower our team to shape a better future, fostering growth and learning to help them reach their full potential.",
    background: "career-banner",
    descriptionStyle: "!max-w-[680px]",
  };

  return (
    <div className="w-full -mt-[62px]">
      <div className="relative">
        <BannerV2 item={bannerContent} />

        <div className="absolute -bottom-20 left-0 right-0 mx-auto w-full md:w-[80vw] lg:w-[70vw] md:-mt-[80px]">
          <JobFilter
            data={jobs?.activeJobs}
            setFilteredJobs={setFilteredJobs}
          />
        </div>
      </div>
      <div className="w-full mt-5 bg-white md:p-5 pt-[60px] md:pt-[60px] lg:pt-16 rounded-[20px]">
        <JobsList data={filteredJobs} />
      </div>
    </div>
  );
}
