import { Drawer, Popover } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function HeaderV3() {
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navList = [
    {
      title: "Services",
      activeLink: "/services",
      subMenu: [
        {
          title: "Enterprise Software Solutions",
          linkTo: "/solutions/enterprise-software-solutions",
        },
        {
          title: "Custom Software Solutions",
          linkTo: "/solutions/custom-software-solutions",
        },
        {
          title: "AI-Powered Software Solutions",
          linkTo: "/solutions/ai-powered-software-solutions",
        },
        {
          title: "Cloud-Based Software Solutions",
          linkTo: "/solutions/cloud-based-software-solutions",
        },
        {
          title: "Mobile App Solutions",
          linkTo: "/solutions/mobile-app-solutions",
        },
        {
          title: "E-Commerce Solutions",
          linkTo: "/solutions/e-commerce-solutions",
        },
        {
          title: "Collaboration and Communication Tools",
          linkTo: "/solutions/collaboration-and-communication-tools",
        },
        {
          title: "UI/UX Solutions",
          linkTo: "/solutions/ui-ux-solutions",
        },
      ],
    },
    {
      title: "Domains",
      activeLink: "/#domains",
    },
    {
      title: "Work with us",
      activeLink: "/work-with-us",
    },
    {
      title: "Blogs",
      activeLink: "/blogs",
    },
    {
      title: "Portfolio",
      activeLink: "/portfolio",
    },
    // {
    //   title: "Who we are",
    //   activeLink: "/who-we-are",
    // },
  ];

  const handleCloseMobileMenu = () => {
    setMobileMenu(false);
  };
  return (
    <nav className="w-full px-5 2xl:px-0 h-[74px] bg-white header-bg flex justify-center items-center rounded-[20px]">
      <div className="w-full max-w-[1300px] flex justify-between items-center">
        {" "}
        <span
          onClick={() => router.push("/")}
          className=" cursor-pointer block pr-5"
        >
          <img
            className="w-[140px] xl:w-[155px] lg:max-w-[236px]"
            src="https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/common/logo-white-two-line.svg"
            alt="Logo"
          />
        </span>
        <ul className="xl:flex items-center gap-6 hidden">
          {navList?.map((item, i) => (
            <NavItem item={item} key={i} />
          ))}
        </ul>
        <div>
          <Link href="#contact-us">
            <button className="px-3 py-2 hidden rounded-full xl:flex justify-center items-center text-orange-primary text-base font-medium border border-orange-primary">
              Connect us
            </button>
          </Link>
        </div>
        <div className="w-8 cursor-pointer h-8 xl:hidden">
          <MdMenu
            className="w-6 h-6 text-white  cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
        <Drawer
          headerStyle={{ display: "none" }}
          onClose={() => setMobileMenu(false)}
          open={mobileMenu}
        >
          <ul style={{ width: "250px" }} className="flex flex-col gap-6 ">
            {navList?.map((item, i) => (
              <NavItem
                item={item}
                key={i}
                handleCloseMobileMenu={handleCloseMobileMenu}
              />
            ))}
          </ul>
        </Drawer>
      </div>
    </nav>
  );
}

function NavItem({ item, handleCloseMobileMenu }) {
  const router = useRouter();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  return (
    <li className="w-full lg:w-auto px-2 content-center">
      {item?.subMenu ? (
        <>
          <div className="xl:hidden">
            <button
              onClick={toggleSubmenu}
              className="p-3 text-black xl:text-white cursor-pointer transition-all ease-in-out hover:font-bold hover:text-orange-primary"
            >
              {item?.title}
            </button>
            <ul className="ml-4 mt-2 flex flex-col gap-2 ">
              {item?.subMenu?.map((menu, i) => (
                <li
                  key={i}
                  onClick={() => {
                    router.push(menu?.linkTo);

                    handleCloseMobileMenu();
                  }}
                  className={`p-2 text-black cursor-pointer transition-all ease-in-out${
                    router.pathname === menu?.linkTo
                      ? " font-bold text-orange-primary"
                      : "border-transparent"
                  } hover:font-bold hover:text-orange-primary`}
                >
                  {menu?.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <Popover
              content={
                <div className="flex flex-col">
                  {item?.subMenu?.map((menu, i) => (
                    <span
                      key={i}
                      onClick={() => {
                        router.push(menu?.linkTo);
                      }}
                      className={`p-3 text-black cursor-pointer transition-all ease-in-out${
                        router.pathname === menu?.linkTo
                          ? " font-bold text-orange-primary"
                          : "border-transparent"
                      } hover:font-bold hover:text-orange-primary`}
                    >
                      {menu?.title}
                    </span>
                  ))}
                </div>
              }
              title=""
              // trigger="click"
              visible={popoverVisible}
              onVisibleChange={(visible) => setPopoverVisible(visible)}
            >
              <button onClick={() => setPopoverVisible(!popoverVisible)}>
                <span
                  className={`p-3 text-black xl:text-white cursor-pointer transition-all ease-in-out${
                    router.pathname === item?.activeLink
                      ? " font-bold text-orange-primary"
                      : "border-transparent"
                  } hover:font-bold hover:text-orange-primary`}
                >
                  {item?.title}
                </span>
              </button>
            </Popover>
          </div>
        </>
      ) : (
        <span
          onClick={() => {
            router.push(item?.activeLink);
            handleCloseMobileMenu && handleCloseMobileMenu();
          }}
          className={`p-3 text-black xl:text-white cursor-pointer transition-all ease-in-out${
            router.pathname === item?.activeLink
              ? " font-bold  !text-orange-primary "
              : "border-transparent"
          } hover:font-bold hover:text-orange-primary`}
        >
          {item?.title}
        </span>
      )}
    </li>
  );
}
