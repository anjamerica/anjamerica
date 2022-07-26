import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import Link from "next/link";
import validator from "validator";
import toast from "react-hot-toast";
import { Subcribe } from "../../services/subscribe";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      //validations
      if (!email) return toast.error("Email is required");
      if (!validator.isEmail(email)) return toast.error("Invalid Email");
      //post email
      const data = {
        email,
      };
      const res = await Subcribe(data);
      console.log(res);
      toast.success("Subscribed Successfully");
      setEmail("");
    } catch (error) {
      toast.error("An error Occured");
    }
  };

  return (
    <div className="relative bg-[#07081D] w-full h-fit z-10 pt-10">
      <div className="flex justify-center  flex-col px-5 gap-1">
        <span className="text-white heading-main font-bold text-2xl self-center px-3 text-center">
          Get to know us!
        </span>
        <div className=" justify-center flex flex-col mt-4 lg:mt-0 h-fit sm:flex-row gap-2 w-full">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Subscribe Our Newsletter..."
            className="relative placeholder:text-[#777689] w-full sm:w-[30vw] h-fit self-end text-[#777689] bg-transparent outline-none border-[#5A5A5A] border-b-[1px] px-2"
          />
          <button
            className=" w-fit font-[400] self-center mt-3 sm:mt-10 text-primary-black bg-[#777689] px-8 py-[.6rem]  tracking-wide rounded-full hover:text-primary-blue hover:bg-white cursor-pointer transition-all text-center flex items-center justify-center"
            onClick={() => handleSubmit()}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:mt-12 mb-2 px-20">
        <div className="w-[60vw] bg-[#222230] h-[1px]"></div>
      </div>
      <div className="flex flex-col lg:flex-row md:justify-around sm:gap-4 pb-10  md:px-10">
        <div className="flex flex-col md:gap-4">
          <Link href="/">
            <img
              alt="logo img"
              src="/landing/logo.svg"
              className="h-fit w-[13rem] xl:h-fit md:w-[192px] -ml-3 -mb-6 md:h-fit object-contain p-5 md:p-0"
            />
          </Link>
          <span className="flex flex-col w-[22rem] items-left font-[400] text-white text-[14px] lg:text-[18px] 2xl:text-[24px] break-words text-left px-5 md:w-[24rem] md:px-0">
            Have questions about how we work and what you get? We&apos;ve got
            all the answers you need.
          </span>
        </div>
        <div className="flex gap-4 md:gap-10 md:w-[45vw] justify-between flex-col sm:mt-[45px] lg:flex-row">
          <div className="flex flex-col px-5 md:px-0 mt-4 md:mt-0">
            <span className="text-white text-[24px] 2xl:text-[30px] font-semibold">
              Company
            </span>
            {/* <Link href="/about"> */}
            <Link href="/about">
              <span className="footer-link">About Us</span>
            </Link>
          </div>
          <div className="flex flex-col px-5 md:px-0">
            <Link href="/#services" passHref>
              <span className="text-white text-[24px] 2xl:text-[30px] font-semibold">
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
          <div className="flex flex-col  mb-2 px-5 md:px-0">
            <span className="text-white text-[24px] font-semibold">Social</span>
            <div className="flex flex-row gap-2 text-white mt-0 md:mt-4 sm:mb-4">
              <a
                href="https://www.facebook.com/anjamericadotcom/about/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bg-primary-violet h-8 w-8 shw hover:bg-[#4B0082] cursor-pointer rounded-full flex items-center justify-center">
                  <FaFacebookF className="h-full  w-full p-2 " />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/anj-america"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bg-primary-violet h-8 w-8 shw hover:bg-[#4B0082] cursor-pointer rounded-full flex items-center justify-center">
                  <FaLinkedinIn className="h-full  w-full p-2 " />
                </span>
              </a>
              <a
                href="https://instagram.com/anj.america?igshwid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <span className="bg-primary-violet h-8 w-8 shw hover:bg-[#4B0082] cursor-pointer rounded-full flex items-center justify-center">
                  <FaInstagram className="h-full  w-full p-2 " />
                </span>
              </a>
              <Link href="/#contact">
                <span className="bg-primary-violet h-8 w-8 shw hover:bg-[#4B0082] cursor-pointer rounded-full flex items-center justify-center">
                  <BsEnvelopeFill className="h-full  w-full p-2 " />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[4rem] lg:h-[5.5rem] sm:mt-5 border-t-[1px] border-[#222230]">
        <span className="text-xs md:text-[1rem] font-[400] text-white self-center">
          &copy;2021 Anj America - All Rights Reserved
        </span>
      </div>
    </div>
  );
}
