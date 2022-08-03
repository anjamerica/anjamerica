import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import JobCard from "../../components/career/JobCard";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";
import Loader from "../../components/layout/Loader";
import { loadingContext } from "../../hooks/loadingContext";
import { getJobDetails } from "../../services/JobDetails";

export default function Career() {
  const [jobData, setJobData] = useState([]);
  const { loaderToggler } = useContext(loadingContext);

  useEffect(() => {
    const getDetails = async () => {
      try {
        //get job details
        loaderToggler(true);
        const response = await getJobDetails();
        setJobData(response.data.payload);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getDetails();
  }, []);

  console.log(jobData);

  return (
    <main className="mx-auto w-full h-full snap-y">
      <section className="relative">
        <div
          style={{
            // background: `url(${"/landing/career.png"})`,
            objectFit: "cover",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full lg:h-[20rem] h-full bg-image-mobile sm:bg-image-web-career"
        >
          <div className="w-full h-fit shadow-sm">
            <Header />
          </div>
          <div className=" h-[35vh] pt-10 pb-20  w-full">
            <div className="flex h-full flex-col justify-center self-center items-center">
              <div className="flex justify-center">
                <span className="text-[#FFD700] text-[.85rem] md:text-[16px] font-[700]">
                  EXPLORE A CAREER AT ANJ AMERICA
                </span>
              </div>
              <div className="text-anim-blog text-[#07038C] uppercase text-[24px] text-center font-[800] sm:text-[34px] xl:text-[36px]">
                Join us
              </div>
              <div className="flex items-center justify-center">
                <span className="text-primary-gray  text-[.8rem] text-center  md:text-[18px] w-[13rem] sm:w-full ">
                  New jobs everyday - Leave us your resume for future
                  opportunities!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-[5px] bg-primary-blue" />
      <section id="career">
        <Loader />
        <div className="flex flex-col justify-center items-center py-10 gap-4">
          <div className="px-5 w-full flex flex-col gap-8 md:px-10">
            {jobData &&
              jobData.map((item, i) => {
                return (
                  <div key={i}>
                    <JobCard item={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
