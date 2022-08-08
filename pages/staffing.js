import React from "react";
import Header from "../components/landin/Header";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Contact from "../components/contact/Contact";
import Footer from "../components/landin/Footer";

export default function Staffing() {
  return (
    <main className="mx-auto w-full h-full snap-y">
      <Header />
      <section className="staffing-bg">
        <div className="flex flex-col w-full px-10 md:px-20 mt-24">
          <p className="text-[.85rem] text-left font-semibold break-words md:text-[1rem] text-[#04c0de]">
            WORKS WITH TOP LEVEL IT COMPANIES
          </p>
          <p className="text-anim-blog text-[#33334f] text-[30px] mt-2 leading-[33px] md:text-[42px] md:leading-[45px] font-[900]">
            Catering to All
            <br /> Staffing Needs
          </p>
          <p className="text-normal-digitze text-anim-blog">
            Hire from the top 2% of software talent in the
            <br /> world. We have an exclusive pool of the top Anj
            <br /> America Professionals who can be sourced to
            <br /> your project as a full time or a consultant.
          </p>
          <Link href="/staffing#hiring">
            <button className="w-fit font-semibold text-xs text-white bg-[#04c0de] px-6 md:px-10 py-3 md:py-4 tracking-wide mt-4  rounded-full hover:bg-[#33b5af] transition-all text-center flex items-center justify-center">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      <section>
        <div className="py-10 flex items-center w-full flex-col gap-4 bg-white">
          <div className="flex flex-col gap-4 pb-8">
            <div className="text-[#33b5af] text-[.85rem] text-left font-semibold break-words md:text-[1rem]">
              BUSINESSES WE&apos;VE ALIGNED WITH
            </div>
          </div>
          <div className="scrollbar-staffing px-10 md:px-20">
            <div className="grid grid-cols-1 w-full gap-0 md:gap-[46px] md:grid-cols-4 xl:grid-cols-6">
              <img
                src="/assets/business/transamerica.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/tata.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/travelers.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/progressive.png"
                className="logo-hover-staffing mt-2"
              />
              <img
                src="/assets/business/stateauto.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/icici.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/insight.png"
                className="logo-hover-staffing mt-2"
              />
              <img
                src="/assets/business/hunginton.png"
                className="logo-hover-staffing mt-2"
              />
              <img
                src="/assets/business/nationwide.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/nasdaq.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/verizon.png"
                className="logo-hover-staffing"
              />
              <img
                src="/assets/business/statefarm.png"
                className="logo-hover-staffing mt-2"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="hiring">
        <div className="px-10 md:px-20  py-20">
          <p className="text-[#33b5af] text-[.85rem] text-left font-semibold break-words md:text-[1rem]">
            OUR SELECTION PROCESS
          </p>
          <p className="text-[#0a1f44] text-[30px] mt-2 leading-[33px] md:text-[42px] md:leading-[45px] font-bold">
            Hiring Process
          </p>
          <p className="w-full md:w-[568px] text-[#0a1f44] text-[.85rem] text-left break-words md:text-[1rem]">
            Our hiring process includes various levels for screening and a hard
            background check which takes weeks and sometimes months to cherry
            pick the right candidate. Top Corporates rely on Niche resources for
            their most important and critical fixed bid as well as Time and
            Material project needs. Our staff has the right blend of culture,
            technology, and interpersonal skills which brings great business
            value to your clients.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-4 justify-between w-full mt-8">
            <div className="relative flex flex-col gap-2">
              <p className=" text-[#333] text-[16px] font-bold leading-[30px] text-base mt-6 z-10">
                Multiple Level of Screening
              </p>
              <span className="absolute top-0 left-0 z-0 text-[#e1e5f0] text-[50px] opacity-30">
                01
              </span>
              <p className=" max-w-[334px] text-[#0a1f44] text-[.85rem] text-left break-words md:text-[1rem]">
                Sorting through the noise and finding all-star performers among
                your candidates can be rather daunting. We screen the candidates
                through our extensive process to being out the diamond from the
                bags of coal.
              </p>
            </div>
            <div className="relative flex flex-col gap-2">
              <p className=" text-[#333] text-[16px] font-bold leading-[30px] z-10 text-base mt-6">
                Hard Background checks
              </p>
              <span className="absolute top-0 left-0 z-0 text-[#e1e5f0] text-[50px] opacity-30">
                02
              </span>
              <p className=" max-w-[334px] text-[#0a1f44] text-[.85rem] text-left break-words md:text-[1rem]">
                We Deploy a hard background check to verify that an individual
                is who they claim to be, and this provides an opportunity to
                check and confirm the validity of someone&apos;s criminal
                record, education, employment history, and other activities from
                their past.
              </p>
            </div>
            <div className="relative flex flex-col gap-2">
              <p className=" text-[#333] text-[16px] font-bold z-10 leading-[30px] text-base mt-6">
                One on One Interviews
              </p>
              <span className="absolute top-0 left-0 z-0 text-[#e1e5f0] text-[50px] opacity-30">
                03
              </span>
              <p className=" max-w-[339px] text-[#0a1f44] text-[.85rem] text-left break-words md:text-[1rem]">
                One on one interviews are the best way to understand the
                candidates outside their resume and documents. This gives us a
                deeper understanding of the candidate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
