import React from "react";
import Header from "./Header";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useState, useRef } from "react";
import Products from "../../pages/products";
import Footer from "./Footer";
import Link from "next/link";
import Contact from "../contact/Contact";
import { PeopleIcon, SettingsIcon } from "../common/icons";
import Card from "./Card";
import { useRouter } from "next/router";

const services = [
  {
    icon: <PeopleIcon />,
    subTitlte: "Works with top level IT Companies",
    title: "Catering to All Staffing Needs",
    description:
      "Hire from top 2% of software talent in the world. We have an exclusive pool of the top ANJ America Professionals who can be sourced to your project as a full time or a consultant.",
    link: "/staffing",
    si_no: "1",
  },
  {
    icon: <SettingsIcon />,
    subTitlte: "",
    title: "We Provide Software Solution",
    description:
      "Our goal is to help you focus on your business while we integrate highly competitive technology to help your business grow faster.",
    link: "/digitize",
    si_no: "2",
  },
];

export default function LandingScreen() {
  const [serviceActive, setServiceActive] = useState(0);
  const router = useRouter();

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
      <section id="/">
        <div
          style={{
            objectFit: "cover",
            backgroundSize: "100% 110%",
            backgroundRepeat: "no-repeat",
          }}
          className="relative w-full h-[80vh] md:min-h-[100vh] flex justify-center items-center bg-landing-image-mob lg:-mt-[80px]  sm:bg-landing-image-web"
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
            <div className=" flex h-full flex-col gap-0 justify-center self-center items-center">
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
                <Link href="/#products" passHref>
                  {/* <a href="/#products" passHref> */}
                  <button
                    className="btn-know-more"
                    data-aos="zoom-in"
                    // onClick={()=>{router.push('/#products')}}
                  >
                    KNOW MORE
                  </button>
                  {/* </a> */}
                </Link>
              </div>
              <div className="absolute bottom-[74px] h-[0px]"  id="services"/>
              <div className="flex absolute bottom-6 self-center cursor-pointer">
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
      <section>
        <div className="bg-white flex flex-col min-h-[calc(100vh-80px)] justify-center py-10">
          <div className="flex flex-col sm:gap-1 self-center justify-center">
            <span className="text-subheading leading-[3%] text-primary-blue self-center">
              WHAT WE DO
            </span>
            <span className="text-subheading-main mt-1 sm:mt-2 heading-main text-primary-black self-center">
              Services
            </span>
            <span className="text-normal-landing mt-1 sm:mt-2 text-primary-black self-center">
              Services to help drive your business to success.
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 px-5 md:px-8 lg:px-28  pt-[1rem] md:pt-[2rem] md:p-[5rem] ">
            {services &&
              services.map((item, i) => {
                return (
                  <Card
                    icon={item?.icon}
                    subTitle={item?.subTitlte}
                    title={item?.title}
                    description={item?.description}
                    link={item?.link}
                    key={i}
                    si_no={item?.si_no}
                  />
                );
              })}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-career h-[100vh] sm:h-[90vh] md:px-10">
          <div>
            <img
              className="w-[90vw] h-[40vh]  xl:w-[35vw] md:h-fit object-contain"
              src="/assets/landing/career-section-vector.png"
              alt="career section image vector"
            />
          </div>
          <div className="flex flex-col xl:w-[50vw] justify-center items-center md:ml-16 xl:pl-10 md:items-start">
            <div className="text-subheading text-base xl:text-2xl uppercase text-[#444444]">
              FIND THAT PERFECT FIT
            </div>
            <div className="f-roboto md:raleway-font  flex flex-col xl:w-[100%] items-center text-[#444444] md:leading-[55px] text-center md:text-start  px-3 sm:px-5 md:px-0 text-[24px] md:text-[38px] xl:text-[48px] md:font-bold break-words">
              New jobs everyday - Leave us your resume for future opportunities!
            </div>
            <div className="mt-8">
              <Link href="/#contact">
                <button className="yellow-action-blue shw">
                  Explore Career
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative hidden sm:flex sm:py-14 mb-10 sm:items-center sm:justify-center sm:h-fit sm:flex-col sm:gap-4 bg-[#F3F3F3]">
        <div className="h-0 absolute bottom-[0px]" id="products" ></div>
          <div className="flex flex-col gap-1">
            <div className="text-subheading-main mt-2 heading-main text-primary-black self-center">
              Businesses we&apos;ve aligned with
            </div>
          </div>
          <div className="relative mt-8 flex justify-center w-full">
            <div className="scrollbar-desktop" ref={ref}>
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
                className="h-10  w-fit  absolute top-[6px] left-[2rem] md:top-[10px]  md:left-[5rem] text-primary-gray cursor-pointer"
                onClick={() => {
                  scroll("left");
                }}
              />
              <img
                alt="right arrow"
                src="/landing/next-arrow.svg"
                className="h-10 w-fit md:v-h-center  absolute right-[2rem] top-[6px]  md:top-[10px] md:right-[5rem] text-primary-gray cursor-pointer"
                onClick={() => {
                  scroll("right");
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative h-screen py-10 flex items-center justify-center flex-col gap-4 bg-[#EAF2FF]  sm:hidden">
        <div className="h-0 absolute bottom-[80px]" id="products" ></div>
          <div className="flex flex-col gap-1 md:gap-4 pb-8">
            <div className="text-[.8rem] uppercase font-semibold self-center md:text-[16px] 2xl:text-[20px] text-primary-blue">
              WHAT WE DO
            </div>
            <div className="tracking-wide break-words heading-main text-center font-bold text-[1.5rem] 2xl:text-[30px] text-black">
              Businesses we&apos;ve aligned with
            </div>
          </div>
          <div className="scrollbar-landing">
            <div className="grid grid-cols-1 gap-y-[30px]">
              <img
                alt="logo image"
                src="/assets/business/progressive.png"
                className="logo-hover-color mt-2"
              />
              <img
                alt="logo image"
                src="/assets/business/icici.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/transamerica.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/nasdaq.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/statefarm.png"
                className="logo-hover-color mt-2"
              />
              <img
                alt="logo image"
                src="/assets/business/nationwide.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/stateauto.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/insight.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/verizon.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/travelers.png"
                className="logo-hover-color"
              />
              <img
                alt="logo image"
                src="/assets/business/hunginton.png"
                className="logo-hover-color mt-2"
              />
              <img
                alt="logo image"
                src="/assets/business/tata.png"
                className="logo-hover-color"
              />
            </div>
         
          </div>
          {/* <section className="5px bg-white" id="products" ></section> */}
        </div>
       
      </section>
      <section>
        <div className="py-[40px]">
          <Products />
        </div>
      </section>
      {/* <section id="products">
        <Cards />
      </section> */}
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
