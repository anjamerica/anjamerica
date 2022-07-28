import React from "react";
import Header from "./Header";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useState, useRef } from "react";
import Products from "../../pages/products";
import Footer from "./Footer";
import Link from "next/link";
import Contact from "../contact/Contact";

const services = [
  {
    index: "01",
    service: "Lorem Ipsum is simply dummy",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
    link: "/",
  },
  {
    index: "02",
    service: "Digitize",
    description:
      "Nitchetechies provides creative software solutions to bridge the gap between execution of your daily businesses and the many evolving technologies.",
    link: "/digitize",
  },
  {
    index: "03",
    service: "Hire Right",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
    link: "/staffing",
  },
  {
    index: "04",
    service: "Lorem Ipsum is simply dummy",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
    link: "/",
  },
  {
    index: "05",
    service: "Lorem Ipsum is simply dummy",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
    link: "/",
  },
];

export default function LandingScreen() {
  const ref = useRef(null);
  const scroll = (dir) => {
    switch (dir) {
      case "left":
        ref.current.scrollLeft -= 230;
        ref.current.style.animation = "mynewmove 1s	";

        break;
      case "right":
        ref.current.scrollLeft += 230;
        ref.current.style.animation = "mynewmove 1s	";
        break;
    }
  };
  const [serviceActive, setServiceActive] = useState(2);
  return (
    <main
      className="mx-auto w-full h-full snap-y scroll-delay"
    >
      <section className="relative">
        <div
          style={{
            background: `url(${"/landing/bg.png"})`,
            objectFit: "contain",
          }}
          className="w-full h-screen"
        >
          <div className="w-full h-fit shadow-sm">
            <Header />
          </div>

          <div className=" h-[60vh] pt-10 pb-20  w-full md:h-[90vh]">
            <div>
              {/* <img
              src="/landing/bg.png"
              // className="hidden md:flex md:absolute md:w-[100%] md:px-10 md:h-[80vh] md:-top-[1rem]"
              className="hidden md:flex md:absolute md:w-[100%] md:h-[80vh] md:-top-[4rem]"
            /> */}
              {/* <img
              src="/assets/landing/mob_bg_landing.svg"
              className="absolute w-full h-[45vh] object-contain -top-[2.5rem] px-2 md:hidden"
            />  */}
            </div>
            <div className=" flex h-full flex-col gap-0 justify-center self-center items-center">
              <div className="flex justify-center">
                <span className="text-[#FFD700] text-[.85rem] md:text-[20px] font-[700]">
                  LOREM IPSUM IS SIMPLY DUMMY
                </span>
              </div>
              <div className="text-anim-blog text-[#07038C] uppercase text-[24px] text-center w-[17rem] font-[800] sm:w-[35rem] xl:w-[70rem] xl:leading-[4rem] sm:text-[34px] xl:text-[60px]">
                Digitize your Business today and Grow your Brand...
              </div>
              <div className="text-anim-blog flex items-center text-center justify-center">
                <span className="text-primary-gray  text-[.8rem]  xl:text-[1rem] w-[13rem] sm:w-full ">
                  Create stunning products, Hire top software professionals for
                  your project.
                </span>
              </div>
              <div className="mt-5 xl:mt-10">
                <button className="w-fit font-semibold text-[14px] md:text-base  uppercase text-white bg-primary-blue px-6 py-[.6rem]  tracking-wide rounded-full hover:text-primary-blue hover:bg-white cursor-pointer transition-all text-center flex items-center justify-center">
                  KNOW MORE
                </button>
              </div>
              <div className="hidden md:flex md:absolute md:bottom-6 md:self-center md:cursor-pointer">
                <Link href="/#services">
                  <img
                    className="w-fit h-fit md:w-[3rem] md:h-[3rem]"
                    src="/assets/landing/down_arrow_btn.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-[5px] bg-primary-blue" />
      <section id="services">
        <div className="bg-white flex flex-col h-fit justify-center py-10 select-none">
          <div className="flex flex-col gap-1 self-center justify-center">
            <span className="text-subheading leading-[3%] text-primary-blue self-center">
              WHAT WE DO
            </span>
            <span className="text-subheading-main  text-primary-black self-center">
              Services
            </span>
            <span className="text-normal-landing mt-2 text-primary-black self-center">
              Services to help drive your business to success.
            </span>
          </div>
          <div className="flex flex-col px-[2rem] pt-[2rem] md:p-[5rem]">
            <div className="relative  flex flex-col items-start justify-start gap-[.5rem] md:gap-[1.5rem]">
              {services.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      setServiceActive(index);
                    }}
                    className="w-full flex flex-col"
                    key={index}
                  >
                    <div className="relative flex flex-1 justify-between">
                      <div className="flex flex-row gap-[.5rem] md:gap-[1rem] select-none">
                        <div
                          className={`${
                            serviceActive === index
                              ? "flex items-center justify-center select-none text-white p-4 text-lg h-10 w-10 rounded-full bg-primary-blue"
                              : "flex items-center select-none  text-primary-gray text-md md:text-base"
                          }`}
                        >
                          {item.index}
                        </div>
                        <span
                          className={`${
                            serviceActive === index
                              ? "service cursor-pointer select-none flex break-words w-[85%] sm:w-full items-center text-primary-blue py-3 text-lg"
                              : "cursor-pointer select-none flex items-center text-primary-gray text-md md:text-base"
                          }`}
                        >
                          {item.service}
                        </span>
                        <img
                          src="/assets/landing/right-arrow.svg"
                          className={`${
                            serviceActive === index
                              ? "rotate-90 absolute top-0 right-0 w-fit h-5 self-end"
                              : "rotate-0 absolute top-0 right-0 w-fit h-5 self-end"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="pb-2">
                      {serviceActive === index && (
                        <div className="text-anim-services flex flex-col gap-3">
                          <p className="select-none text-left text-md text-primary-black md:text-base">
                            {item.description}
                          </p>
                          <Link href={item.link}>
                            <button className="w-fit font-semibold text-xs md:text-md  uppercase text-white bg-primary-blue px-4 py-2 sm:px-6 sm:py-3  tracking-wide rounded-full  hover:bg-blue-800 cursor-pointer transition-all text-center flex items-center justify-center">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                    <hr className="bg-[#E7E7E7] h-[.1px]" />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="flex flex-col justify-center items-center py-10 gap-4"
          style={{
            background: `url(${"/landing/career-section.png"})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="text-subheading text-white">
            FIND THAT PERFECT FIT
          </div>
          <div className="flex flex-col w-[70%] items-center text-center text-white text-[24px] md:text-[48px] font-semibold break-words">
            New jobs everyday - Leave us your resume for future opportunities!
          </div>
          <div>
            <Link href="/career">
              <button className="yellow-action-button">Explore Career</button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className=" py-10 flex items-center flex-col gap-4 bg-[#F3F3F3]">
          <div className="flex flex-col gap-1">
            <div className="text-subheading leading-[3%] text-primary-blue self-center">WHAT WE DO</div>
            <div className="text-[1.5rem] tracking-wide break-words text-center font-bold md:text-[1.5rem] 2xl:text-[3rem]; text-primary-black">
              Businesses we&apos;ve aligned with
            </div>
            <div className="text-normal-landing text-[#535353] w-[85%] sm:w-full self-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
          </div>
          <div className="relative flex justify-center w-full">
            <div className="scrollbar-landing" ref={ref}>
              <div className="flex flex-row w-full justify-between h-fit max-w-[1200px] gap-[50px]">
                <img
                  src="/assets/business/progressive.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/icici.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/transamerica.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/nasdaq.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/statefarm.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/nationwide.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/stateauto.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/insight.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/verizon.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/travelers.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/hunginton.png"
                  className="logo-hover-landing"
                />
                <img
                  src="/assets/business/tata.png"
                  className="logo-hover-landing"
                />
              </div>
              <img
                src="/landing/prev-arrow.svg"
                className="h-10 v-h-center w-fit select-none absolute top-[40%] bottom-[60%] translate-(-50%,-50%)   left-[3rem] md:left-[7rem] text-primary-gray cursor-pointer"
                onClick={() => {
                  scroll("left");
                }}
              />
              <img
                src="/landing/next-arrow.svg"
                className="h-10 w-fit md:v-h-center select-none absolute top-[40%] bottom-[60%] translate-(-50%,-50%)  right-[2rem] md:right-[6rem] text-primary-gray cursor-pointer"
                onClick={() => {
                  scroll("right");
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <section>
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
      </section> */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
