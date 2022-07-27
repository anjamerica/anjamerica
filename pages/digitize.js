import React from "react";
import Header from "../components/landin/Header";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Contact from "../components/contact/Contact";
import Footer from "../components/landin/Footer";

export default function Digitize() {
  return (
    <main className="mx-auto w-full h-full snap-y">
      <Header />
      <section className="relative p-5 md:p-10 flex justify-center flex-col">
        <p className="text-anim-blog  w-full text-[1.5rem] font-extrabold md:text-[2.5rem]  leading-[33px]  md:leading-[45px]  text-[#0a1f44] text-center mt-4 sm:mt-10">
          We Provide Software Solution
        </p>
        <div className="w-full flex justify-center">
          <p className="text-anim-blog text-normal-digitze w-[90%] sm:w-[48%] sm:mt-8 leading-[24px] tracking-wide text-center">
            Our goal is to help you focus on your business while we integrate
            highly competitive technology to help your business grow faster.
          </p>
        </div>
        <div className="w-full flex justify-center mt-0 md:mt-8">
          <img
            src="/assets/landing/about_1.png"
            className="w-[70vw] md:w-[50vw] h-fit object-contain self-center"
          />
        </div>
        <span className="self-center text-base flex flex-row gap-2 mt-0 md:mt-8">
          Learn about
          <Link href="\digitize#feature">
            <span className="text-[#7540ee]">all our features</span>
          </Link>
          <BsArrowRight className="w-5 h-4 self-center text-black" />
        </span>
      </section>
      <section id="feature">
        <div className="bg-[#e4fdfc] w-full h-full p-10 flex gap-10 flex-col lg:flex-row">
          <div className="flex flex-col w-full">
            <p className="text-md text-primary-black font-semibold">
              OUR FEATURES
            </p>
            <p className="text-[30px] leading-[33px] md:text-[42px] md:leading-[45px] font-bold mt-1 text-[#04c0de]">
              Helping you grow at every Step
            </p>
            <p className="text-normal-digitze text-left">
              We access your business, process, and technology and make
              recommendations to make the same better in a very competitive
              business model that benefits your business. Whether it be Business
              Specific Application Development, CMS &#38; e-commerce
              Applications, Mobile Applications, Business Intelligence
              Applications, or Block Chain Applications; Nitche experts provide
              invaluable customer satisfaction to your business.
            </p>
            <img
              src="/assets/landing/about_2.png"
              className="w-full h-fit object-contain"
            />
          </div>
          <div>
            <div className="flex justify-between gap-6 w-full mt-6">
              <div className="w-14 h-full flex rounded-[50px] justify-center items-center  bg-white drop-shadow-lg">
                <div className="h-10 w-10 flex justify-center items-center">
                  <img
                    src="/assets/landing/about_3.svg"
                    className="w-5 h-5 self-center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[1rem] font-semibold text-[#333]">
                  Web Design &#38; Development
                </div>
                <div className="text-normal-digitze text-left">
                  With our years of website production and design experience, we
                  are able to deliver the ideal web design and development
                  solutions to you.
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6 w-full mt-6">
              <div className="w-14 h-full flex rounded-[50px] justify-center items-center  bg-white drop-shadow-lg">
                <div className="h-10 w-10 flex justify-center items-center">
                  <img
                    src="/assets/landing/about_4.svg"
                    className="w-5 h-5 self-center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[1rem] font-semibold text-[#333]">
                  E-Commerce Development
                </div>
                <div className="text-normal-digitze text-left">
                  Enabling businesses to reach a wider customer base with our
                  ecommerce website development services
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6 w-full mt-6">
              <div className="w-14 h-full flex rounded-[50px] justify-center items-center  bg-white drop-shadow-lg">
                <div className="h-10 w-10 flex justify-center items-center">
                  <img
                    src="/assets/landing/about_6.svg"
                    className="w-5 h-5 self-center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[1rem] font-semibold text-[#333]">
                  Mobile Application Development
                </div>
                <div className="text-normal-digitze text-left">
                  Our experience ranges from membership dashboards development
                  to custom eCommerce integration and business process
                  applications.
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6 w-full mt-6">
              <div className="w-14 h-full flex rounded-[50px] justify-center items-center  bg-white drop-shadow-lg">
                <div className="h-10 w-10 flex justify-center items-center">
                  <img
                    src="/assets/landing/about_7.svg"
                    className="w-5 h-5 self-center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[1rem] font-semibold text-[#333]">
                  Cloud Managed Solution
                </div>
                <div className="text-normal-digitze text-left">
                  We maintain oversight and administrative control of cloud
                  computing products and services, whether deployed in public,
                  private, or hybrid cloud environments
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6 w-full mt-6">
              <div className="w-14 h-full flex rounded-[50px] justify-center items-center  bg-white drop-shadow-lg">
                <div className="h-10 w-10 flex justify-center items-center">
                  <img
                    src="/assets/landing/about_7.svg"
                    className="w-5 h-5 self-center"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[1rem] font-semibold text-[#333]">
                  IT Consulting
                </div>
                <div className="text-normal-digitze text-left">
                  We can help you develop and execute a clear and strategic IT
                  roadmap with priorities that are closely linked to business
                  goals.
                </div>
              </div>
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
