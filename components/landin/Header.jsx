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
    <div className="relative w-full flex justify-between items-center h-[8hv] px-4 bg-white  md:px-10 md:py-4 md:items-center md:h-[10vh]">
      <div className=" xl:ml-5 w-fit">
        <Link href="/">
          <img
            src="/assets/landing/Logo.png"
            className="h-16 w-40 xl:h-20 xl:w-56 object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="hidden lg:flex justify-around gap-1 xl:gap-3 items-center md:mx-4 mr-7">
        <Link href="/about">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 ${
              active == "/about" ? "text-primary-green " : "text-white"
            }`}
          >
            About
            <span className="w-full flex justify-center transform ease-linear duration-1000">
              {active == "/about" && (
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 33 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#33B5AF" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/digitize">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 ${
              active == "/digitize" ? "text-primary-green" : "text-white"
            }`}
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
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#33B5AF" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/staffing">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 ${
              active == "/staffing" ? "text-primary-green" : "text-white"
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
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#33B5AF" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/career">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 ${
              active == "/career" ? "text-primary-green" : "text-white"
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
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#33B5AF" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/#products">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 ${
              active == "/#products" ? "text-primary-green" : "text-white"
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
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#33B5AF" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/blogs">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 ${
              active == "/blogs" ? "text-primary-green" : "text-white"
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
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#33B5AF" />
                </svg>
              )}
            </span>
          </span>
        </Link>
        <Link href="/#contact">
          <span
            className={`cursor-pointer text-center md:text-base mx-2 md:mx-4 ${
              active == "/#contact" ? "text-primary-green" : "text-white"
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
                  <path d="M33 0L0 0.666667L33 1V0Z" fill="#33B5AF" />
                </svg>
              )}
            </span>
          </span>
        </Link>
      </div>
      <div
        className="h-full select-none flex items-center justify-center lg:hidden py-4"
        onClick={() => setNavOpen(!navOpen)}
      >
        <BsThreeDots className="h-9 w-9 text-white self-center cursor-pointer" />
      </div>
      {navOpen && (
        <div className="absolute top-[4rem] right-[0rem] z-20 w-full md:hidden">
          <div className="nav-anim w-full p-3 bg-white h-fit">
            <ul>
              <Link href="/about">
                <li className="text-left py-2 text-primary-blue-dark hover:text-primary-green text-xs font-semibold">
                  About
                </li>
              </Link>
              <Link href="/digitize">
                <li className="text-left py-2 text-primary-blue-dark hover:text-primary-green text-xs font-semibold">
                  Digitize
                </li>
              </Link>
              <Link href="/staffing">
                <li className="text-left py-2 text-primary-blue-dark hover:text-primary-green text-xs font-semibold">
                  Hire Right
                </li>
              </Link>
              <Link href="/career">
                <li className="text-left py-2 text-primary-blue-dark hover:text-primary-green text-xs font-semibold">
                  Career
                </li>
              </Link>
              <Link href="/#products">
                <li className=" text-left py-2 text-primary-blue-dark hover:text-primary-green text-xs font-semibold">
                  Our Products
                </li>
              </Link>

              <Link href="/blogs">
                <li className="text-left py-2 text-primary-blue-dark hover:text-primary-green text-xs font-semibold">
                  Blog
                </li>
              </Link>
              <Link href="/#contact">
                <li className="text-left py-2 text-primary-blue-dark hover:text-primary-green text-xs font-semibold">
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
