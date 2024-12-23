import React from "react";

import jobs from "../../constants/jobs.json";
import Container from "../../components/common/Container";
import BreadCrumbList from "../../components/common/BreadCrumb";
import { useRouter } from "next/router";
import JobApplyForm from "../../components/pages/careers/JobApplyForm";

export default function Index() {
  const router = useRouter();

  const jobId = router.query.id;

  const job = jobs?.activeJobs?.find((item) => item?.jobId === jobId);

  return (
    <Container>
      <div className="my-10 mt-[120px]">
        <BreadCrumbList
          items={[
            {
              title: (
                <p
                  className="text-md md:text-base cursor-pointer"
                  onClick={() => router.push("/careers")}
                >
                  Careers
                </p>
              ),
            },
            {
              title: (
                <p className="text-md md:text-base text-primary-blue">
                  Submit resume
                </p>
              ),
            },
          ]}
        />
      </div>
      <div className="my-6 md:my-10">
        <div className="flex justify-center flex-col items-center gap-2 md:gap-4">
          <p className="text-primary text-lg md:text-[40px] font-bold">
            Apply with resume
          </p>
          <p className="text-md text-lg text-gray-senary leading-[21px] md:leading-[27px] font-normal">
            Please fill in the details and upload your CV to submit the form.
          </p>
        </div>
        <JobApplyForm job={job} />
      </div>
    </Container>
  );
}
