import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative bg-gradient-footer w-full h-fit pt-10 -z-10 select-none">
      <div className="flex justify-center flex-col px-5 gap-2">
        <img
          src="/assets/landing/vector_footer_web.svg"
          className="hidden md:flex md:absolute md:w-[90vw] md:h-full md:top-0 xl:px-20"
        />
        <img 
          src="/assets/landing/vector_footer.svg"
          className="absolute w-fit h-[100%] top-0 left-0  md:hidden "
        />
        <span className="text-white font-bold text-2xl self-center px-3 text-center">
          Get to know us!
        </span>
        <span className="flex flex-col items-left text-white text-[1rem] break-words text-center px-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around py-10 md:p-10">
        <div className="flex flex-col md:gap-4">
          <Link href="/">
            <img
              src="/assets/landing/Logo.png"
              className="h-fit w-[13rem] xl:h-fit md:w-36 md:h-fit object-contain p-5 md:p-0"
            />
          </Link>
          <span className="flex flex-col items-left font-semibold text-white text-[.75rem]  break-words text-left px-5 md:w-[15rem] md:px-0">
            Have questions about how we work and what you get? We&apos;ve got
            all the answers you need.
          </span>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col px-5 mt-8 md:mt-0">
            <span className="text-white text-lg font-semibold">Company</span>
            {/* <Link href="/about"> */}
            <Link href="/about">
              <span className="footer-link">About Us</span>
            </Link>
          </div>
          <div className="flex flex-col px-5">
            <Link href="/#services" passHref>
              <span className="text-white text-lg font-semibold">Services</span>
            </Link>
            <Link href="/digitize" passHref><span className="footer-link">Digitize</span></Link>
            <Link href="/staffing" passHref><span className="footer-link">Hire Right</span></Link>       
          </div>
          <div className="flex flex-col px-5">
            <span className="text-white text-lg font-semibold">Social</span>
            <div className="flex flex-row gap-2 text-white mt-2 mb-4">
              <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                <FaFacebookF className="h-fit w-fit" />
              </span>
              <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                <FaTwitter className="h-fit w-fit" />
              </span>
              <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                <FaInstagram className="h-fit w-fit" />
              </span>
              <span className="bg-primary-violet h-8 w-8 cursor-pointer rounded-full flex items-center justify-center">
                <BsEnvelopeFill className="h-fit w-fit" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="h-[3px] w-full bg-[#222230]" /> */}
      <div className="flex justify-center items-center h-[3.5rem] border-t-[3px] border-[#222230]">
        <span className="text-xs text-white self-center">
          &copy;2021 Nichetechies - All Rights Reserved
        </span>
      </div>
    </div>
  );
}
