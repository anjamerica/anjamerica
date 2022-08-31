import React from "react";
import Footer from "../components/landin/Footer";
import Header from "../components/landin/Header";
import Contact from "../components/contact/Contact";

export default function About() {
  return (
    <main className="mx-auto w-full h-full snap-y">
      <div className="w-full h-fit bg-white shadow-sm sticky top-0 left-0 z-50">
        <Header />
      </div>
      <section className="relative">
        <div className="w-full lg:h-[20rem] h-full">
          <div className=" pt-10 lg:pb-20 h-[25vh] md:h-[40vh]  w-full ">
            <div className="text-center flex flex-col">
              <span className="text-primary-blue text-[2rem] md:mt-4 heading-main uppercase font-extrabold md:text-[34px] 2xl:text-[40px] md:leading-[41px]">
                About Us
              </span>
              <span className="text-[.8rem] px-5 w-[80%] sm:mt-4 sm:w-full font-normal leading-[1.8rem] tracking-wide text-[#222] self-center md:text-[18px] 2xl:text-[24px]">
                We offer a wide range of services from Software Development ,
                Mobile <br /> Application Development and much more.
              </span>
            </div>
          </div>
        </div>
        {/* <hr className="h-[5px] bg-primary-blue" /> */}
        <section>
          <div className=" p-6 md:px-[7.5%] flex flex-col md:flex-row justify-around w-full">
            <div className="flex flex-col text-left mt-8 w-full md:w-[50%]">
              <span className="text-[14px] 2xl:text-[20px] font-semibold leading-[1px] mb-[8px] text-[#141414] pb-2">
                OUR PHILOSOPHY
              </span>
              <span className="w-full text-[25px] md:text-[38px] 2xl:text-[34px] heading-main text-[#04c0de] font-extrabold md:leading-[45px]">
                Good business should
                <br /> know every step of{" "}
                <span className="text-[#05fad9]">growth.</span>
                <br /> That&apos;s why we are here.
              </span>
            </div>
            <div className="h-full pt-8 w-full md:w-[50%]">
              <p className="text-[16px] text-[#333333] text-left leading-[30px] 2xl:text-[20px]">
                We believe in transparency and would like to maintain a sense of
                fairness in what we deliver in terms of quality and deadlines.
                Our major focus is to empower our client&apos;s end to end
                business by designing and implementing a cost-effective and
                efficient technology. Nope, that&apos;s not where we stop – We
                also support our partners attain their sales goals using
                customer-specific customized Digital Marketing Methodology,
                Techniques, Artificial Intelligence and other Tools.
              </p>
              <p className="text-[16px] text-[#333333] text-left leading-[30px] 2xl:text-[20px] mt-2">
                Yes, we are the biggest advocates of customer satisfaction;
                hence we always thrive to develop efficient and cost-effective
                software solutions for our clients by help them achieve their
                unique business needs. We cant afford not to mention about our
                hybrid agile methodology and our highly skilled and experienced
                business analysts as they are the foundation of all our success
                stories. At Anj America we cherry pick our Project Managers,
                Architects, Developers and Quality Analysts who have the right
                mix of Technical knowledge, business insights, and possess great
                attitude.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="py-10 mt-2 flex items-center w-full flex-col gap-4 md:mt-[90px] bg-white">
          <div className="flex flex-col gap-4 pb-4">
            <div className="text-green-medium">
              BUSINESSES WE&apos;VE ALIGNED WITH
            </div>
          </div>
          <div className="scrollbar-staffing px-10 md:pb-20 md:px-20">
            <div className="grid grid-cols-3 gap-[20px] space-y-[46px] items-center  w-full md:gap-[46px] sm:grid-cols-4 xl:grid-cols-6">
              <img
                alt="logo icon"
                src="/assets/business/transamerica.png"
                className="logo-hover-staffing mt-8"
              />
              <img
                alt="logo icon"
                src="/assets/business/tata.png"
                className="logo-hover-staffing"
              />
              <img
                alt="logo icon"
                src="/assets/business/travelers.png"
                className="logo-hover-staffing"
              />
              <img
                alt="logo icon"
                src="/assets/business/progressive.png"
                className="logo-hover-staffing mt-2"
              />
              <img
                alt="logo icon"
                src="/assets/business/stateauto.png"
                className="logo-hover-staffing"
              />
              <img
                alt="logo icon"
                src="/assets/business/icici.png"
                className="logo-hover-staffing"
              />
              <img
                alt="logo icon"
                src="/assets/business/insight.png"
                className="logo-hover-staffing mt-2"
              />
              <img
                alt="logo icon"
                src="/assets/business/hunginton.png"
                className="logo-hover-staffing mt-2"
              />
              <img
                alt="logo icon"
                src="/assets/business/nationwide.png"
                className="logo-hover-staffing"
              />
              <img
                alt="logo icon"
                src="/assets/business/nasdaq.png"
                className="logo-hover-staffing"
              />
              <img
                alt="logo icon"
                src="/assets/business/verizon.png"
                className="logo-hover-staffing"
              />
              <img
                alt="logo icon"
                src="/assets/business/statefarm.png"
                className="logo-hover-staffing mt-2"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#04c0de] h-full md:h-[11rem] py-[100px] lg:px-[100px] gap-2 md:py-0 md:gap-0 flex flex-col md:flex-row justify-evenly ">
        <div className="flex flex-col justify-center">
          <span className="md:text-[50px] text-[55px] heading-main font-[900] text-white text-center">
            &#36;15M+
          </span>
          <span className="text-[15px] 2xl:text-[20px] text-white font-semibold text-center">
            Revenue Achieved
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="md:text-[50px] text-[55px] heading-main font-[940] text-white text-center">
            20
          </span>
          <span className="text-[15px] 2xl:text-[20px] text-white font-semibold text-center">
            Countries supported
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="md:text-[50px] text-[55px] heading-main font-[940] text-white text-center">
            50
          </span>
          <span className="text-[15px] 2xl:text-[20px] text-white font-semibold text-center">
            Staff Members
          </span>
        </div>
      </div>
      <section>
        <Contact />
        <Footer />
      </section>
    </main>
  );
}
