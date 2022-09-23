import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import JobApplyForm from "../../components/career/JobApplyForm";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";
import Loader from "../../components/layout/Loader";
import { loadingContext } from "../../hooks/loadingContext";
import { getJobDetailsById } from "../../services/JobDetails";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Index() {
  const [item, setItem] = useState({});
  const { loaderToggler } = useContext(loadingContext);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const { jobId } = router.query;

  console.log("Router query ", router.query);

  console.log(jobId);

  useEffect(() => {
    const getJobData = async () => {
      try {
        loaderToggler(true);
        const response = await getJobDetailsById(jobId);
        console.log(response.data.payload);
        setItem(response.data.payload);
        loaderToggler(false);
      } catch (err) {
        console.error(err);
        loaderToggler(false);
      }
    };
    if (jobId) getJobData();
  }, [jobId]);

  // console.log(item?.job_location?.country);

  return (
    <main className="mx-auto w-full h-full snap-y">
      <div className="w-full h-fit bg-white shadow-sm sticky top-0 left-0 z-50 lg:-mt-[80px]">
      </div>
      <Loader />
      <section className="relative">
        <div
          style={{
            // background: `url(${"/landing/career.png"})`,
            objectFit: "cover",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full lg:h-[15rem] h-full bg-image-mobile sm:bg-image-web-career"
        >
          <div className=" h-fit pt-10 pb-10  w-full">
            <div className="flex h-full flex-col gap-2 justify-center self-center items-center md:gap-4">
              <div className="text-[1.5rem] break-words text-primary-blue text-center font-bold md:text-[2.5rem] tracking-wide">
                {item?.job_title}
              </div>
              {/* <div className="flex items-center justify-center md:h-fit">
                <p className="hidden md:flex md:text-base 2xl:text-[20px]  md:text-[#333333] md:text-center  md:w-[80vw] md:pb-5">
                  {item?.description}
                </p>
              </div> */}
              <div className="flex items-center justify-center">
                <div className="flex flex-row gap-2">
                  <span className="self-center">
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.75747 2.18961C2.88267 1.00311 4.40878 0.336548 6.00006 0.336548C7.59135 0.336548 9.11745 1.00311 10.2427 2.18961C11.3679 3.3761 12 4.98533 12 6.66329C12 8.34125 11.3679 9.95048 10.2427 11.137L6.00006 15.6107L1.75747 11.137C1.20029 10.5495 0.758301 9.85205 0.456753 9.08445C0.155205 8.31686 0 7.49414 0 6.66329C0 5.83244 0.155205 5.00972 0.456753 4.24212C0.758301 3.47453 1.20029 2.77708 1.75747 2.18961ZM6.00006 8.47084C6.45469 8.47084 6.8907 8.2804 7.21217 7.94142C7.53364 7.60244 7.71424 7.14268 7.71424 6.66329C7.71424 6.1839 7.53364 5.72414 7.21217 5.38516C6.8907 5.04618 6.45469 4.85574 6.00006 4.85574C5.54543 4.85574 5.10943 5.04618 4.78796 5.38516C4.46648 5.72414 4.28588 6.1839 4.28588 6.66329C4.28588 7.14268 4.46648 7.60244 4.78796 7.94142C5.10943 8.2804 5.54543 8.47084 6.00006 8.47084Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-xs text-normal-landing text-primary-gray">
                    {item?.job_location?.country}
                    {", "}
                    {item?.job_location?.state}
                    {", "}
                    {item?.job_location?.city}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-[5px] bg-primary-blue" />
      <section className="">
        <div className="md:p-10 relative">
          <p className="p-5 text-md 2xl:text-[20px] text-primary-black break-words  text-left w-full md:p-0">
            {item?.description}
          </p>
          <div className="px-5 md:p-0 mt-5 md:mt-10">
            <p className="text-base 2xl:text-[20px] font-semibold mb-4 md:font-semibold text-primary-black text-left w-full">
              Qualifications
            </p>
            {item &&
              item?.qualifications?.map((item, i) => {
                return (
                  <div className="gap-3 flex flex-1 items-center" key={i}>
                    <div className="self-center">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="6.94397"
                          width="9"
                          height="9"
                          transform="rotate(-49 0 6.94397)"
                          fill="#444348"
                        />
                      </svg>
                    </div>
                    <p className="text-[#444348] text-md 2xl:text-[20px]  self-center">
                      {item}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="px-5 md:p-0 mt-5 md:mt-10">
            <p className="text-base  font-semibold mb-4 md:font-semibold 2xl:text-[20px] text-primary-black text-left w-full">
              Key Responsibilities
            </p>
            {item &&
              item?.key_responsiblities?.map((item, i) => {
                return (
                  <div className="gap-3 flex flex-1 items-center" key={i}>
                    <div className="self-center">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="6.94397"
                          width="9"
                          height="9"
                          transform="rotate(-49 0 6.94397)"
                          fill="#444348"
                        />
                      </svg>
                    </div>
                    <p className="text-[#444348] text-md  2xl:text-[20px] self-center">
                      {item}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="px-5 md:p-0 mt-5 md:mt-10">
            <p className="text-base 2xl:text-[20px] font-semibold mb-4 md:font-semibold text-primary-black text-left w-full">
              License and Certifications
            </p>
            {item &&
              item?.license_certification?.map((item, i) => {
                return (
                  <div className="gap-3 flex flex-1 items-center" key={i}>
                    <div className="self-center">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="6.94397"
                          width="9"
                          height="9"
                          transform="rotate(-49 0 6.94397)"
                          fill="#444348"
                        />
                      </svg>
                    </div>
                    <p className="text-[#444348] text-md 2xl:text-[20px] self-center">
                      {item}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="px-5 md:p-0 mt-5 md:mt-10">
            <p className="text-base 2xl:text-[20px] font-semibold mb-4 md:font-semibold text-primary-black text-left w-full">
              Job Type
            </p>
            <div className="gap-3 flex flex-1 items-center">
              <div className="self-start">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="6.94397"
                    width="9"
                    height="9"
                    transform="rotate(-49 0 6.94397)"
                    fill="#444348"
                  />
                </svg>
              </div>
              <p className="text-[#444348] text-md 2xl:text-[20px] self-center">
                {item?.job_type}
              </p>
            </div>
          </div>
          <div className="p-5 md:p-0 mt-5 md:mt-10">
            <p className="text-md 2xl:text-[20px] mb-4 md:font-semibold text-primary-black text-left w-full">
              Training
            </p>

            <div className="gap-3 flex flex-col   items-start">
              <div className="flex flex-row gap-3">
                <div className="self-center">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="6.94397"
                      width="9"
                      height="9"
                      transform="rotate(-49 0 6.94397)"
                      fill="#444348"
                    />
                  </svg>
                </div>
                <p className="text-[#444348] text-md 2xl:text-[20px] self-center">
                  Training Duration: {"  "}{" "}
                  {item?.training_details?.training_duration}
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <div className="self-center">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="6.94397"
                      width="9"
                      height="9"
                      transform="rotate(-49 0 6.94397)"
                      fill="#444348"
                    />
                  </svg>
                </div>
                <p className="text-[#444348] text-md 2xl:text-[20px] self-center">
                  Training Duration: {"  "}{" "}
                  {item?.training_details?.training_fee?.training_fee}{" "}
                  {item?.training_details?.training_fee?.currency}
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <div className="self-center">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="6.94397"
                      width="9"
                      height="9"
                      transform="rotate(-49 0 6.94397)"
                      fill="#444348"
                    />
                  </svg>
                </div>
                <p className="text-[#444348] text-md 2xl:text-[20px] self-center">
                  Training Duration: {"  "}{" "}
                  {item?.training_details?.training_type}
                </p>
              </div>
            </div>
          </div>
          <button
            className={
              !modal
                ? "button-wiggle sticky bottom-4 mb-4 right-4 float-right w-fit font-medium text-white bg-primary-blue px-4 py-2  uppercase  rounded-full hover:bg-blue-800 transition-all text-center items-center gap-2 flex flex-row justify-between"
                : "sticky bottom-4 mb-4 float-right right-4 w-fit font-medium text-white bg-red-600 px-4 py-2  uppercase  rounded-full hover:bg-red-400 transition-all text-center items-center gap-2 flex flex-row justify-between"
            }
            onClick={() => setModal(!modal)}
          >
            <div>{!modal ? "Apply Now" : "Close Form"}</div>
            <div>
              <AiOutlineDoubleRight
                className={
                  !modal
                    ? "button-wiggle w-7 h-7 rounded-full bg-white text-primary-blue p-1"
                    : "w-7 h-7 rounded-full bg-white text-red-600 p-1"
                }
              />
            </div>
          </button>

          {modal && (
            <div className="w-fit md:absolute md:left-[45%] md:top-[3rem] z-50">
              <JobApplyForm item={item} setFormModal={setModal} />
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="w-full mt-[4rem] md:mt-5">
          <Footer />
        </div>
      </section>
    </main>
  );
}
