import React, { useState } from "react";
import { useRouter } from "next/router";

import { MdMenu } from "react-icons/md";
import { Drawer } from "antd";

export default function HeaderV2() {
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navList = [
    {
      title: "Home",
      activeLink: "/",
    },
    {
      title: "Services",
      activeLink: "/services",
    },
    {
      title: "Portfolio",
      activeLink: "/portfolio",
    },
    {
      title: "Careers",
      activeLink: "/careers",
    },
    {
      title: "Blogs",
      activeLink: "/blogs",
    },
    {
      title: "Our engineers",
      activeLink: "/our-team",
    },
    {
      title: "About",
      activeLink: "/about",
    },
    {
      title: "Contact us",
      activeLink: "/get-in-touch",
    },
  ];
  return (
    <nav className="w-screen px-5 2xl:px-0 h-[97px] bg-white md:bg-black md:bg-opacity-40 flex justify-center items-center">
      <div className="w-full max-w-[1300px] flex justify-between items-center">
        {" "}
        <span
          onClick={() => router.push("/")}
          className=" cursor-pointer block pr-5"
        >
          <img
            className="w-full max-w-[150px] lg:max-w-[250px] md:hidden"
            src="/V2/logos/common/logo-black-two-line.svg"
            alt="Logo"
          />
          <img
            className="w-full xl:max-w-[150px] lg:max-w-[236px] hidden md:block"
            src="/V2/images/common/logo-white.svg"
            alt="Logo"
          />
        </span>
        <ul className="xl:flex items-center gap-6 hidden">
          {navList?.map((item, i) => (
            <NavItem item={item} key={i} />
          ))}
        </ul>
        <div className="w-6 h-6">
          <MdMenu
            className="w-6 h-6 text-black md:text-white xl:hidden cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
        <Drawer
          headerStyle={{ display: "none" }}
          onClose={() => setMobileMenu(false)}
          open={mobileMenu}
        >
          <ul className="flex flex-col gap-6 ">
            {navList?.map((item, i) => (
              <NavItem item={item} key={i} />
            ))}
          </ul>
        </Drawer>
      </div>
    </nav>
  );
}

function NavItem({ item }) {
  const router = useRouter();
  return (
    <li className="w-full lg:w-auto px-2 content-center">
      <span
        onClick={() => router.push(item?.activeLink)}
        className={`p-3 text-black xl:text-white cursor-pointer border-b-2 ${
          router.pathname === item?.activeLink
            ? "border-[#FF9900] font-medium "
            : "border-transparent"
        } hover:border-[#FF9900] hover:font-medium`}
      >
        {item?.title}
      </span>
    </li>
  );
}
