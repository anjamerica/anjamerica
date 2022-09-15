import React from "react";
import Header from "./Header";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useState, useRef } from "react";
import Products from "../../pages/products";
import Footer from "./Footer";
import Link from "next/link";
import Contact from "../contact/Contact";
// import Cards from "../products/Cards";

const services = [
  {
    index: "01",
    service: "Digitize",
    description:
      "Anj america provides creative software solutions to bridge the gap between execution of your daily businesses and the many evolving technologies.",
    link: "/digitize",
  },
  {
    index: "02",
    service: "Hire Right",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top Anj professionals who can be sourced to your project as a full time or a consultant.",
    link: "/staffing",
  },
];

export default function LandingScreen() {
  const [serviceActive, setServiceActive] = useState(1);
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
   
  return (
    <main className="relative mx-auto w-full h-full snap-y scroll-delay">
        <div className="w-full h-fit bg-white shadow-sm sticky top-0 left-0 z-50">
          <Header />
        </div>
      <section>
        <div
          style={{
            objectFit: "cover",
            backgroundSize: "100% ",
            backgroundRepeat: "no-repeat",
          }}
          className="relative w-full h-[60vh] md:min-h-screen lg:-mt-[80px] bg-landing-image-mob  sm:bg-landing-image-web"
        >
          <div className=" h-[60vh] pt-10 pb-20  w-full md:h-[90vh]">
            <div className="hidden lg:flex c1 absolute lg:mt-[80px] top-[30px]  left-[400px]"></div>
            <div className="hidden lg:flex c8 absolute lg:mt-[80px] top-[30px]  left-[400px]"></div>
            <div className="c2 absolute lg:mt-[80px] top-[100px] right-[204px]"></div>
            <div className="c3 absolute lg:mt-[80px] top-[350px] right-[150px]"></div>
            <div className="c9 absolute lg:mt-[80px] top-[350px] right-[150px]"></div>
            <div className="c4 absolute lg:mt-[80px] top-[80px] right-[400px]"></div>
            <div className="hidden lg:flex c5 absolute "></div>
            <div className="hidden lg:flex c7 absolute"></div>
            <div className="hidden lg:flex c6 absolute lg:mt-[80px] bottom-[200px] -left-[90px]"></div>
            <div className=" flex h-full lg:mt-[80px] flex-col gap-0 justify-center self-center items-center">
              <div className="text-anim-blog heading-main  z-10 text-[#07038C] uppercase text-[24px] text-center w-[18rem] font-extrabold sm:w-[40rem] md:w-[44rem] xl:w-[60rem] sm:text-[40px] md:text-[45px] xl:text-[60px] 2xl:text-[85px] 2xl:w-[85rem] 2xl:leading-[90px]   lg:leading-[70px]">
                Digitize your Business today and Grow your Brand...
              </div>
              <div className="text-anim-blog flex items-center text-center justify-center">
                <span className="text-primary-gray z-10 text-[.8rem] mt-2  xl:text-[16px] w-[13rem] 2xl:text-[20px] sm:w-full ">
                  Create stunning products, Hire top software professionals for
                  your project.
                </span>
              </div>
              <div className="mt-5 xl:mt-10">
                <Link href="/#products">
                  <button className="w-fit shw sm:w-[143px] sm:h-[43px] z-10 font-semibold text-[14px] md:text-base  uppercase text-white bg-primary-blue px-6 py-[.6rem] sm:p-0  tracking-wide rounded-full hover:bg-blue-800 cursor-pointer transition-all text-center flex items-center justify-center" data-aos="zoom-in">
                    KNOW MORE
                  </button>
                </Link>
              </div>
              <div className="hidden md:flex md:absolute md:bottom-6 md:self-center md:cursor-pointer">
                <Link href="/#services">
                  <img
                    alt="arrow button"
                    className="bounce w-fit h-fit md:w-[3rem] md:h-[3rem]"
                    src="/assets/landing/down_arrow_btn.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-[5px] bg-primary-blue" />
      <section id="services" >
        <div className="bg-white flex flex-col h-fit justify-center py-10 select-none">
          <div className="flex flex-col gap-1 self-center justify-center">
            <span className="text-subheading leading-[3%] text-primary-blue self-center">
              WHAT WE DO
            </span>
            <span className="text-subheading-main mt-2 heading-main text-primary-black self-center">
              Services
            </span>
            <span className="text-normal-landing mt-2 text-primary-black self-center">
              Services to help drive your business to success.
            </span>
          </div>
          <div className="flex flex-col px-[2rem] pt-[2rem] md:p-[5rem]">
            <div className="relative  flex flex-col items-start justify-start gap-[.5rem] md:gap-[2rem] 2xl:gap-[3rem]">
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
                              ? "flex items-center justify-center select-none self-center text-white p-4 text-[16px] 2xl:text-[24px] h-10 w-10 rounded-full bg-primary-blue"
                              : "flex items-center select-none  text-primary-gray text-md text-[16px] 2xl:text-[24px] p-2"
                          }`}
                        >
                          {item.index}
                        </div>
                        <span
                          className={`${
                            serviceActive === index
                              ? "service cursor-pointer select-none flex break-words w-[85%] sm:w-full items-center 2xl:text-[24px] text-primary-blue py-3 text-lg"
                              : "cursor-pointer select-none flex items-center text-primary-gray 2xl:text-[24px] text-md md:text-base"
                          }`}
                        >
                          {item.service}
                        </span>
                        <img
                          alt="right arrow"
                          src="/assets/landing/right-arrow.svg"
                          className={`${
                            serviceActive === index
                              ? "rotate-90 absolute top-0 right-0 w-fit h-5 2xl:w-10 self-end"
                              : "rotate-0 absolute top-0 right-0 w-fit h-5 2xl:w-10 self-end"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="pb-2">
                      {serviceActive === index && (
                        <div className="text-anim-services flex flex-col gap-3">
                          <p className="select-none font-[500] 2xl:text-[24px] text-left px-5 text-md md:leading-[38px] text-primary-black md:text-base">
                            {item.description}
                          </p>
                          <Link href={item.link}>
                            <button data-aos="zoom-in" className="w-fit shw font-semibold mx-5 text-xs md:text-md  uppercase text-white bg-primary-blue px-4 py-2 sm:px-6 sm:py-3  tracking-wide rounded-full  hover:bg-blue-800 cursor-pointer transition-all text-center flex items-center justify-center">
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
              <button className="yellow-action-button shw">Explore Career</button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className=" py-10 flex items-center h-fit flex-col gap-4 bg-[#F3F3F3]">
          <div className="flex flex-col gap-1">
            <div className="text-subheading-main mt-2 heading-main text-primary-black self-center">
              Businesses we&apos;ve aligned with
            </div>
          </div>
          <div className="relative mt-8 flex justify-center w-full">
            <div className="scrollbar-landing" ref={ref}>
              <div className="flex flex-row w-full justify-between items-center h-fit max-w-[1200px] gap-[50px]">
                <img
                  alt="logo icon"
                  src="/assets/business/progressive.png"
                  className="ml-6 logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/icici.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/transamerica.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/nasdaq.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/statefarm.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/nationwide.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/stateauto.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/insight.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/verizon.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/travelers.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/hunginton.png"
                  className="logo-hover-landing"
                />
                <img
                  alt="logo icon"
                  src="/assets/business/tata.png"
                  className="mr-6 logo-hover-landing"
                />
              </div>
              <img
                alt="left arrow"
                src="/landing/prev-arrow.svg"
                className="h-10  w-fit select-none absolute top-[6px] left-[2rem] md:top-[10px]  md:left-[5rem] text-primary-gray cursor-pointer"
                onClick={() => {
                  scroll("left");
                }}
              />
              <img
                alt="right arrow"
                src="/landing/next-arrow.svg"
                className="h-10 w-fit md:v-h-center select-none absolute right-[2rem] top-[6px]  md:top-[10px] md:right-[5rem] text-primary-gray cursor-pointer"
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
      {/* <section id="products">
        <Cards />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
