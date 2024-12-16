import React, { useState } from "react";

import jobs from "../../constants/jobs.json";
import Banner from "../../components/common/Banner";
import Enquiry from "../../components/pages/landing/Enquiry";
import JobsList from "../../components/pages/careers/JobsList";
import JobFilter from "../../components/pages/careers/JobFilterForm";

export default function Index() {
  const [filteredJobs, setFilteredJobs] = useState(jobs?.activeJobs || []);

  const bannerContent = {
    title: "Start doing work that matters",
    description:
      "Our philosophy is simple: we build a team of diverse, passionate individuals and cultivate a culture that empowers everyone to excel, innovate, and deliver their best work. This drives both personal and collective success.",
    bannerStyle: "banner-bg-our-team",
  };

  return (
    <div>
      <Banner item={bannerContent} />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[80vw] lg:w-[70vw] md:-mt-[80px]">
          <JobFilter
            data={jobs?.activeJobs}
            setFilteredJobs={setFilteredJobs}
          />
        </div>
      </div>
      <JobsList data={filteredJobs} />
      <div className="w-full">
        <Enquiry />
      </div>
    </div>
  );
}
