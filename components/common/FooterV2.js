import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function FooterV2() {
  const company = [
    {
      label: "About",
      linkTo: "/about",
    },
    {
      label: "Services",
      linkTo: "/services",
    },
    {
      label: "Portfolio",
      linkTo: "/portfolio",
    },
    {
      label: "Careers",
      linkTo: "/careers",
    },
    {
      label: "Contact us",
      linkTo: "/get-in-touch",
    },
    {
      label: "Our engineers",
      linkTo: "/our-team",
    },
  ];

  const services = [
    {
      label: "Branding",
      linkTo: "/services/branding",
    },
    {
      label: "Experience Design",
      linkTo: "/services/experience-design",
    },
    {
      label: "Technology",
      linkTo: "/services/technology",
    },
    {
      label: "Digital Marketing",
      linkTo: "/services/digital-marketing",
    },
    {
      label: "Training Course",
      linkTo: "/courses",
    },
  ];

  const otherLinks = [
    {
      label: "Our Clients",
      linkTo: "/our-clients",
    },
    {
      label: "Send a feedback",
      linkTo: "/feedback",
    },
  ];

  const getInTouch = [
    {
      label: "+1 (901) 310 0451 (USA)",
      linkTo: "#",
    },
    {
      label: "+44 798 878 2024 (UK)",
      linkTo: "#",
    },
    {
      label: "+91 9895445280 (IND)",
      linkTo: "#",
    },
    {
      label: "contact@anjamerica.com",
      linkTo: "mailto:contact@anjamerica.com",
    },
    {
      label:
        "6B, Tower 2, Trans Asia corporate park, Kakkanad, Kochi, Kerala, 682037",
      linkTo: "#",
    },
  ];
  const socialLinks = [
    {
      linkTo: "https://www.facebook.com/anjamericadotcom/about/",
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/footer/facebook.svg",
    },
    {
      linkTo: "https://www.linkedin.com/company/anj-america",
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/footer/linkedIn.svg",
    },
    {
      linkTo: "https://www.instagram.com/anj.america/?igshwid=YmMyMTA2M2Y%3D",
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/footer/instagram.svg",
    },
  ];

  return (
    <div className="footer-bg relative">
      <div className="absolute inset-0 bg-white opacity-[0.92]"></div>

      <div className="px-5 py-6 md:py-14">
        <div className="w-full flex justify-center ">
          <div className="relative max-w-[1300px] w-full gap-6 lg:gap-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <p className="text-septenary font-medium text-lg md:text-[20px]">
                Company
              </p>
              {company?.map((item, i) => (
                <NavItem item={item} key={i} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-septenary font-medium text-lg md:text-[20px]">
                Services
              </p>
              {services?.map((item, i) => (
                <NavItem item={item} key={i} />
              ))}
            </div>{" "}
            <div className="flex flex-col gap-4">
              <p className="text-septenary font-medium text-lg md:text-[20px]">
                Others
              </p>
              {otherLinks?.map((item, i) => (
                <NavItem item={item} key={i} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-septenary font-medium text-lg md:text-[20px]">
                Get in touch
              </p>
              {getInTouch?.map((item, i) => (
                <NavItem item={item} key={i} />
              ))}

              <div className="w-full justify-center sm:justify-start flex items-center flex-wrap gap-3">
                {socialLinks?.map((item, i) => (
                  <SocialLinkCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className="relative w-full mt-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p className="text-base font-normal text-center text-black">
              © 2024 ANJ America Career. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

function NavItem({ item }) {
  return (
    <Link href={item?.linkTo}>
      <p className="text-septenary font-light text-base md:text-[20px] cursor-pointer">
        {item?.label}
      </p>
    </Link>
  );
}

function SocialLinkCard({ item }) {
  return (
    <a target="_blank" rel="noreferrer" href={item?.linkTo}>
      <img
        className="w-[31px] h-[31px] object-contain"
        src={item?.image}
        alt="social-icon"
        onError={(e) => {
          console.error(`Image failed to load: ${item?.image}`);
          e.target.style.display = "none";
        }}
      />
    </a>
  );
}
