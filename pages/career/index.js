import Link from "next/link";
import React, { useState, useEffect,useContext } from "react";
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
        loaderToggler(true)
        const response = await getJobDetails();
        setJobData(response.data.payload);
        loaderToggler(false)
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false)
      }
    };
    getDetails();
  }, []);

  console.log(jobData);

  return (
    <main className="mx-auto w-full h-full snap-y">
      <Header />
      <section className="relative">
        <div className="bg-violet-dark h-[50vh] pt-10 pb-20  w-full md:h-[90vh]">
          <div>
            <img
              src="/assets/landing/Vector-6.png"
              className="hidden md:flex md:absolute md:w-[100%] md:px-10 md:h-[80vh] md:-top-[1rem]"
            />
            <img
              src="/assets/landing/mob_bg_landing.svg"
              className="absolute w-full h-[45vh] object-contain -top-[2.5rem] px-2 md:hidden"
            />
          </div>
          <div className="flex h-full flex-col gap-3 justify-center self-center items-center">
            <div className="flex justify-center">
              <span className="text-green-medium">
              EXPLORE A CAREER AT ANJ AMERICA
              </span>
            </div>
            <div className="text-anim-blog text-[1.5rem] break-words text-white text-center font-bold md:text-[2.5rem] tracking-wide">
              Join us
            </div>
            <div className="flex items-center justify-center">
              <span className="text-anim-blog text-normal-landing  z-10 px-10">
                Together we work hard, celebrate each other’s accomplishments,
                disrupt the status-quo and give the best high-fives (even
                virtually).
              </span>
            </div>
            <div className="absolute bottom-6 self-center cursor-pointer">
              <Link href="career/#career">
                <img
                  className="slideDown w-fit h-fit md:w-[3rem] md:h-[3rem]"
                  src="/assets/landing/down_arrow_btn.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="career">
      <Loader/>
        <div className="flex flex-col justify-center items-center py-10 gap-4">
          <div className="text-green-medium">FIND THAT PERFECT FIT</div>
          <div className="flex flex-col items-center text-center text-black text-lg font-bold break-words px-10">
            Explore
          </div>
          <div className="flex flex-col items-center text-secondary-gray text-sm break-words text-center md:text-base">
            New jobs everyday - Leave us your resume for future opportunities!
          </div>
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
      <section id="contact">
        <div className="relative p-5 bg-[#ecf2f8] flex justify-center w-full h-[90vh] md:p-10">
          <div className="w-full flex justify-center">
            <span className="text-[1.5rem] break-words text-[#0a1f44] text-center font-bold md:text-[2rem] my-2">
              Have any Questions?
            </span>
          </div>
          <div className="v-center absolute -bottom-[3rem] md:-bottom-[4rem] z-10 p-[1.5rem] md:p-[2rem]">
            <Contact />
          </div>
        </div>
      </section>
        <Footer />
    </main>
  );
}
