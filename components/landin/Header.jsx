import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  return (
    <div
      className={`${
        router.pathname === ("/home" || "/about" || "/digitize" || "/staffing")
          ? "relative w-full flex justify-between items-center h-[10hv] shadow-sm px-4  md:px-[2%] md:py-4 md:items-center md:h-[15vh]"
          : "relative w-full flex bg-white  justify-between items-center h-[10hv] shadow-sm px-4  md:px-[2%] md:py-4 md:items-center md:h-[15vh]"
      }`}
    >
      <div className=" xl:ml-5 w-fit">
        <Link href="/">
          <img
            alt="logo image"
            src="/landing/Anj-logo.svg"
            className="w-fit h-[40px] md:h-[50px] ml-1 md:-ml-2 object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="hidden lg:flex justify-around gap-1 xl:gap-3 items-center md:mx-4 mr-7">
        <Link href="/about">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
              active == "/about" ? "text-[#07038C]" : "text-[#08081E]"
            }`}
          >
            Discover
            <span className="w-full flex justify-center transform ease-linear duration-1000">
              {active == "/about" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#07038C" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/digitize">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
              active == "/digitize" ? "text-[#07038C]" : "text-[#08081E]"
            }`}
            n
          >
            Digitize
            <span className="w-full flex justify-center ease-linear duration-1000">
              {active == "/digitize" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#07038C" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/staffing">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
              active == "/staffing" ? "text-[#07038C]" : "text-[#08081E]"
            }`}
          >
            Hire Right
            <span className="w-full flex justify-center ease-linear duration-1000">
              {active == "/staffing" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#07038C" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/career">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
              active == "/career" ? "text-[#07038C]" : "text-[#08081E]"
            }`}
          >
            Career
            <span className="w-full flex justify-center ease-linear duration-1000">
              {active == "/career" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#07038C" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/#products">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
              active == "/#products" ? "text-[#07038C]" : "text-[#08081E]"
            }`}
          >
            Our Products
            <span className="w-full flex justify-center ease-linear duration-1000">
              {active == "/#products" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#07038C" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/blogs">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
              active == "/blogs" ? "text-[#07038C]" : "text-[#08081E]"
            }`}
          >
            Blog
            <span className="w-full flex justify-center ease-linear duration-1000">
              {active == "/blogs" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#07038C" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/#contact">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
              active == "/#contact" ? "text-[#07038C]" : "text-[#08081E]"
            }`}
          >
            Get in Touch
            <span className="w-full flex justify-center ease-linear duration-1000">
              {active == "/#contact" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#07038C" />
                </svg>
              )}
            </span>
          </span>
        </Link>
      </div>
      <span
        className="h-full flex items-center justify-center lg:hidden py-4"
        onClick={(e) => {
          setNavOpen(!navOpen);
        }}
      >
        <BsThreeDots className="h-9 w-9 text-[#B4B4BE] rotate-90 self-center cursor-pointer" />
      </span>
      {navOpen && (
        <div
          className="absolute top-[4rem] right-[0rem] bg-white z-50 w-full md:hidden"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="nav-anim w-full p-3  h-fit">
            <ul>
              <Link href="/about">
                <li className="text-left py-2 text-primary-blue-dark hover:text-blue-800 text-xs font-semibold">
                  Discover
                </li>
              </Link>
              <Link href="/digitize">
                <li className="text-left py-2 text-primary-blue-dark hover:text-blue-800 text-xs font-semibold">
                  Digitize
                </li>
              </Link>
              <Link href="/staffing">
                <li className="text-left py-2 text-primary-blue-dark hover:text-blue-800 text-xs font-semibold">
                  Hire Right
                </li>
              </Link>
              <Link href="/career">
                <li className="text-left py-2 text-primary-blue-dark hover:text-blue-800 text-xs font-semibold">
                  Career
                </li>
              </Link>
              <Link href="/#products">
                <li className=" text-left py-2 text-primary-blue-dark hover:text-blue-800 text-xs font-semibold">
                  Our Products
                </li>
              </Link>

              <Link href="/blogs">
                <li className="text-left py-2 text-primary-blue-dark hover:text-blue-800 text-xs font-semibold">
                  Blog
                </li>
              </Link>
              <Link href="/#contact">
                <li className="text-left py-2 text-primary-blue-dark hover:text-blue-800 text-xs font-semibold">
                  Get in Touch
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
