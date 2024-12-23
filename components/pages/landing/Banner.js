import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="banner-bg-landing-page-new rounded-[20px] -mt-[19px] flex justify-center items-center  w-full">
      <div className="flex flex-col items-center gap-6">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="text-2xl px-5 md:px-0 md:leading-[70px] tracking-wide text-center md:text-[60px] font-bold max-w-[900px] text-white"
        >
          Smart Software, Smarter Teams, AI-Driven Success
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className="text-lg px-5 md:px-0 text-center leading-[30px] md:text-[22px] font-medium max-w-[810px] text-white opacity-80"
        >
          Empowering your business with cutting-edge software solutions, expert
          talent, and AI innovation to stay ahead in a dynamic world.
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="flex mt-4 items-center justify-center flex-col gap-3 sm:flex-row"
        >
          <Link href="/#software-solutions">
            <button className="w-[200px] rounded-full py-2 px-3 bg-orange-primary text-[#CECECE] relative flex h-[50px] items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 hover:before:h-56 hover:before:w-56 before:ease-out hover:shadow-orange-600 z-10 hover:text-black">
              <span className="relative z-20">Software Solutions</span>
            </button>
          </Link>
          <Link href="/#talent-solutions">
            <button className="w-[200px] rounded-full py-2 px-3 bg-orange-primary text-[#CECECE] relative flex h-[50px] items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 hover:before:h-56 hover:before:w-56 before:ease-out hover:shadow-orange-600 z-10 hover:text-black">
              <span className="relative z-20">Talent Solutions</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
