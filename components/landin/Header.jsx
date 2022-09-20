import Link from "next/link";
import React, { useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef(null)
  const headRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    setActive(router.asPath);
  }, [router.asPath]);

  console.log(router.asPath)
  useEffect(() => {
    window.onscroll = function (e) {
      let scroll = this.scrollY;
      if (scroll >= 50) {
        headRef.current.style.transform="scale(0.98)";
      } else {
        headRef.current.style.transform="scale(1)";
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={headRef}
        style={{ transition: ".3s", transform:"scale(1)", boxShadow:"none" }}
        className={`${
          router.pathname ===
          ("/blogs" || "/about" || "/digitize" || "/staffing")
            ? "relative transition-all w-full flex bg-white justify-between items-center h-[80px]  px-4  md:px-[2%] md:py-4 md:items-center md:h-[80px] sh"
            : "relative w-full  flex justify-between items-center h-[80px]  px-4  md:px-[2%] md:py-4 md:items-center md:h-[80px] sh"
        }`}
      >
        <div className=" xl:ml-5 w-fit">
          <Link href="/" passHref>
            <img
              ref={logoRef}
              alt="logo image"
              src="/landing/Anj-logo.svg"
              className="w-fit h-[40px] md:w-[154px] ml-1 md:ml-6 object-contain cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden lg:flex justify-around gap-1 xl:gap-3 items-center md:mx-4 mr-7">
          <Link href="/about" passHref>
            <span
              className={`cursor-pointer text-center md:text-base 2xl:text-[20px] mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
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
              className={`cursor-pointer text-center md:text-base 2xl:text-[20px] mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
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
              className={`cursor-pointer text-center md:text-base 2xl:text-[20px] mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
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
              className={`cursor-pointer text-center md:text-base 2xl:text-[20px] mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
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
              className={`cursor-pointer text-center md:text-base 2xl:text-[20px] mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
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
              className={`cursor-pointer text-center md:text-base 2xl:text-[20px] mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
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
              className={`cursor-pointer text-center md:text-base 2xl:text-[20px] mx-2 md:mx-4 font-semibold hover:text-primary-blue ${
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
        <button
          className="h-9 w-9 flex items-center justify-center lg:hidden py-4"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <BsThreeDots className="h-9 w-9 text-[#B4B4BE] rotate-90 self-center cursor-pointer" />
        </button>
        {navOpen && (
          <div
            className="absolute top-[4rem] right-[0rem] shadow-md bg-white z-50 w-full lg:hidden"
          >
            <div className=" w-full p-3  h-fit">
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
    </div>
  );
}
