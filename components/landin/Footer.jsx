import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative bg-[#07081D] w-full h-fit z-10 pt-10 select-none">
      <div className="flex justify-center  flex-col px-5 gap-4">
        <span className="text-white font-bold text-2xl self-center px-3 text-center">
          Get to know us!
        </span>
        <span className="flex flex-col items-left text-[#787878] text-[1rem] break-words text-center px-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <div className="justify-center flex flex-col mt-4 lg:mt-0 lg:flex-row gap-2 w-full">
          <input
            type="text"
            placeholder="Subscribe Our Newsletter..."
            className=" placeholder:text-[#777689] w-full lg:w-[30vw] h-fit self-end text-[#777689] bg-transparent outline-none border-[#5A5A5A] border-b-[1px] px-2"
          />
          <button className="w-fit font-[400] self-center mt-10 text-primary-black bg-[#777689] px-8 py-[.6rem]  tracking-wide rounded-full hover:text-primary-blue hover:bg-white cursor-pointer transition-all text-center flex items-center justify-center">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-14 mb-2 px-20">
        <div className="w-[60vw] bg-[#222230] h-[.1px]"></div>
      </div>
      <div className="flex flex-col lg:flex-row md:justify-around gap-4 py-10 md:p-10">
        <div className="flex flex-col md:gap-4">
          <Link href="/">
            <img
              src="/landing/logo.svg"
              className="h-fit w-[13rem] xl:h-fit md:w-[192px] -ml-3 -mb-6 md:h-fit object-contain p-5 md:p-0"
            />
          </Link>
          <span className="flex flex-col items-left font-[400] text-white text-[14px] lg:text-[18px]  break-words text-left px-5 md:w-[24rem] md:px-0">
            Have questions about how we work and what you get? We&apos;ve got
            all the answers you need.
          </span>
        </div>
        <div className="flex gap-4 w-[40vw] justify-between flex-col lg:flex-row">
          <div className="flex flex-col px-5 md:px-0 mt-8 md:mt-0">
            <span className="text-white text-[24px] font-semibold">
              Company
            </span>
            {/* <Link href="/about"> */}
            <Link href="/about">
              <span className="footer-link">About Us</span>
            </Link>
          </div>
          <div className="flex flex-col px-5 md:px-0">
            <Link href="/#services" passHref>
              <span className="text-white text-[24px] font-semibold">
                Services
              </span>
            </Link>
            <Link href="/digitize" passHref>
              <span className="footer-link">Digitize</span>
            </Link>
            <Link href="/staffing" passHref>
              <span className="footer-link">Hire Right</span>
            </Link>
          </div>
          <div className="flex flex-col px-5 md:px-0">
            {/* <span className="text-white text-[24px] font-semibold">Social</span> */}
            <div className="flex flex-row gap-2 text-white md:mt-11 mb-4">
              <a
                href="https://www.facebook.com/anjamericadotcom/about/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                  <FaFacebookF className="h-fit w-fit" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/anj-america"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                  <FaLinkedinIn className="h-fit w-fit" />
                </span>
              </a>
              <a
                href="https://instagram.com/anj.america?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                  <FaInstagram className="h-fit w-fit" />
                </span>
              </a>
              <Link href="/#contact">
                <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                  <BsEnvelopeFill className="h-fit w-fit" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[4rem] lg:h-[5.5rem] mt-5 border-t-[1px] border-[#222230]">
        <span className="text-xs md:text-[1rem] font-[400] text-white self-center">
          &copy;2021 Anj America - All Rights Reserved
        </span>
      </div>
    </div>
  );
}
