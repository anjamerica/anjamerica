import React from "react";
import Header from "./Header";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useState } from "react";
import Products from "../../pages/products";
import Footer from "./Footer";
import Link from "next/link";
import Contact from "../contact/Contact";

const services = [
  {
    index: "1",
    service: "Lorem Ipsum is simply dummy",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
  },
  {
    index: "2",
    service: "Digitize",
    description:
      "Nitchetechies provides creative software solutions to bridge the gap between execution of your daily businesses and the many evolving technologies.",
  },
  {
    index: "3",
    service: "Hire Right",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
  },
  {
    index: "4",
    service: "Lorem Ipsum is simply dummy",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
  },
  {
    index: "5",
    service: "Lorem Ipsum is simply dummy",
    description:
      "Hire from the top 2% of software talent in the world. We have an exclusive pool of the top niche Professionals who can be sourced to your project as a full time or a consultant.",
  },
];

export default function LandingScreen() {
  const [serviceActive, setServiceActive] = useState(2);
  return (
    <main className="mx-auto w-full h-full snap-y ">
      <Header />
      <section className="relative">
        <div className="dg-gradient-landing h-[50vh] pt-10 pb-20  w-full md:h-[90vh]">
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
              <span className="text-green-medium z-10">
                LOREM IPSUM IS SIMPLY DUMMY
              </span>
            </div>
            <div className="text-anim-blog text-[1.5rem] break-words z-10 text-white text-center font-extrabold md:text-[2.5rem] tracking-wide">
              Digitize your Business today
              <br /> and Grow your Brand...
            </div>
            <div className="text-anim-blog flex items-center justify-center">
              <span className="text-normal-landing z-10">
                Create stunning products, Hire top software <br /> professionals
                for your project.
              </span>
            </div>
            <div className="absolute  bottom-6 self-center cursor-pointer">
              <Link href="/#services">
                <img
                  className="w-fit h-fit md:w-[3rem] md:h-[3rem]"
                  src="/assets/landing/down_arrow_btn.svg"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="bg-primary-blue-dark flex flex-col h-fit justify-center py-10 select-none">
          <div className="flex flex-col gap-4 self-center justify-center">
            <span className="text-green-medium">WHAT WE DO</span>
            <span className="text-heading-landing">Services</span>
            <span className="text-normal-landing">
              Services to help drive your business to success.
            </span>
          </div>
          <div className="flex flex-col px-[2rem] pt-[2rem] md:p-[5rem]">
            <div className="relative flex flex-col items-start justify-start gap-[.5rem] md:gap-[1.5rem]">
              {services.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      setServiceActive(index);
                    }}
                    className="w-full flex flex-col md:flex-row"
                    key={index}
                  >
                    <div className="flex flex-1 justify-between">
                      <div className="flex flex-row gap-[.5rem] md:gap-[1rem] select-none">
                        <div
                          className={`${
                            serviceActive === index
                              ? "flex items-center select-none text-white p-4 text-lg border-l-4 border-primary-green"
                              : "flex items-center select-none  text-primary-gray text-md md:text-base"
                          }`}
                        >
                          {item.index}
                        </div>
                        <div
                          className={`${
                            serviceActive === index
                              ? "cursor-pointer select-none flex items-center text-white py-3 text-lg"
                              : "cursor-pointer select-none flex items-center text-primary-gray text-md md:text-base"
                          }`}
                        >
                          {item.service}
                        </div>
                      </div>
                    </div>
                    <div className="p-2 md:absolute md:w-[40%] md:top-[49px] md:right-[2px] self-start">
                      {serviceActive === index && (
                        <div className="text-anim-blog select-none text-md text-white md:text-base">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center py-10 gap-4">
          <div className="text-black text-[.8rem] md:text-[1rem] font-semibold uppercase px-10">
            FIND THAT PERFECT FIT
          </div>
          <div className="flex flex-col items-center text-center text-black text-[1rem] md:text-[1.5rem] font-semibold break-words px-10">
            New jobs everyday - Leave us your resume for future opportunities!
          </div>
          <div>
            <Link href="/career"><button className="cyan-action-button">Explore Career</button></Link>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 flex items-center flex-col gap-4 bg-primary-blue-dark">
          <div className="flex flex-col gap-4 pb-8">
            <div className="text-green-medium">WHAT WE DO</div>
            <div className="text-heading-landing">
              Businesses we&apos;ve aligned with
            </div>
            <div className="text-normal-landing">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
          </div>
          <div className="scrollbar-landing">
          <div className="grid grid-cols-1 max-w-[1000px] gap-[46px] md:grid-cols-4 xl:grid-cols-6">
              <img
                src="/assets/business/progressive.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/icici.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/transamerica.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/nasdaq.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/statefarm.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/nationwide.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/stateauto.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/insight.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/verizon.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/travelers.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/hunginton.png"
                className="logo-hover-color"
              />
              <img
                src="/assets/business/tata.png"
                className="logo-hover-color"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <Products />
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
        <Footer/>
      </section>
    </main>
  );
}
