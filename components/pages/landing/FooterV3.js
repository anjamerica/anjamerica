import React from "react";
import Enquiry from "./Enquiry";
import Link from "next/link";

export default function FooterV3() {
  const about = [
    {
      label: "Enterprise Software Solutions",
      linkTo: "/solutions/enterprise-software-solutions",
    },
    {
      label: "Custom Software Solutions",
      linkTo: "/solutions/custom-software-solutions",
    },
    {
      label: "AI-Powered Software Solutions",
      linkTo: "/solutions/ai-powered-software-solutions",
    },
    {
      label: "Cloud-Based Software Solutions",
      linkTo: "/solutions/cloud-based-software-solutions",
    },
    {
      label: "Mobile App Solutions",
      linkTo: "/solutions/mobile-app-solutions",
    },
    {
      label: "E-Commerce Solutions",
      linkTo: "/solutions/e-commerce-solutions",
    },
    {
      label: "Collaboration and Communication Tools",
      linkTo: "/solutions/collaboration-and-communication-tools",
    },
    {
      label: "UI/UX Solutions",
      linkTo: "/solutions/ui-ux-solutions",
    },
  ];

  const getInTouch = [
    {
      label: "info@anjamerica.com",
      linkTo: "mailto:info@anjamerica.com",
    },
    {
      label: "+1 614 535 5738 (USA)",
      linkTo: "tel:+1 614 535 5738",
    },
    {
      label: "+91 98954 45280 (IND)",
      linkTo: "tel:+91 98954 45280",
    },
  ];

  const addresses = [
    {
      address: "119 South Main Street, Suite #500 Memphis, TN 38103, USA",
    },
    {
      address: "8425 Pulsar Place, Suite #280, Columbus, OH 43240, USA",
    },
    {
      address:
        "6B - Tower 2, Trans Asia Corporate Park,  Seaport-Airport RD, Kakkanad, Cochin, India, 682037",
    },
  ];

  const socialLinks = [
    {
      linkTo: "https://x.com/AnjAmerica?t=PWTlzQLST3AQKpJgvd3bOw&s=09",
      image: "/V2/logos/landing/footer/x.svg",
    },
    {
      linkTo: "https://www.facebook.com/profile.php?id=61570826336653",
      image: "/V2/logos/landing/footer/facebook.svg",
    },
    {
      linkTo: "https://www.linkedin.com/company/anj-america",
      image: "/V2/logos/landing/footer/linkedIn.svg",
    },
    {
      linkTo: "https://www.instagram.com/anj.america/?igshwid=YmMyMTA2M2Y%3D",
      image: "/V2/logos/landing/footer/instagram.svg",
    },
  ];

  const tailLinks = [
    {
      label: "Terms and Conditions",
      linkTo: "/terms-and-condition",
    },
    {
      label: "Privacy Notice",
      linkTo: "/privacy-policy",
    },
    {
      label: "Accessibility",
      linkTo: "/accessibility",
    },
    {
      label: "Disclaimer",
      linkTo: "/disclaimer",
    },
    {
      label: "Sitemap",
      linkTo: "/sitemap",
    },
  ];

  return (
    <section id="contact-us">
      <div className="w-full mb-5 md:mt-3 footer-bg-black rounded-[20px] p-5">
        <div className="flex justify-center">
          <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-center md:border-b md:border-b-[#454545]">
            <div className="w-full md:w-[40%] md:pl-14 h-full flex flex-col justify-center items-start gap-4 md:border-r md:border-r-[#454545]">
              <div className="hidden md:grid grid-cols-2">
                <div className="w-4 h-4 rounded-full bg-tertiary" />
                <div className="w-4 h-4 rounded-full bg-orange-primary" />
                <div className="w-4 h-4 rounded-full bg-orange-primary" />
                <div className="w-4 h-4 rounded-full bg-tertiary" />
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
                className="text-white text-center md:text-start font-medium text-2xl md:text-[42px] md:leading-[55px] max-w-[360px]"
              >
                Are you interested in hearing more?
              </p>
            </div>
            <div className="w-full md:w-[60%] md:pl-10">
              <Enquiry />
            </div>
          </div>
        </div>

        <div className="md:px-5 pt-6 md:pt-14 ">
          <div className="w-full flex justify-center ">
            <div className="relative max-w-[1300px] w-full pb-6 md:pb-14  flex flex-wrap border-b border-b-[#4A4A49]">
              <div className="flex flex-col gap-4 w-full md:w-[35%] pb-6 md:pb-0">
                <Link href="/" passHref>
                  <img
                    alt="logo image"
                    src="https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/common/logo-white-two-line.svg"
                    className="w-fit h-[40px] md:w-[154px] object-contain cursor-pointer"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="center-bottom"
                  />
                </Link>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-justify font-normal md:max-w-[350px] text-md leading-[30px] text-white opacity-80"
                >
                  With 11+ years of expertise, ANJ America provides tailored IT
                  talent and software solutions, empowering Fortune 400+ clients
                  through innovation, collaboration, and scalable technologies.
                </p>

                <div className="w-full justify-center mt-4 sm:justify-start flex items-center flex-wrap gap-3">
                  {socialLinks?.map((item, i) => (
                    <SocialLinkCard item={item} key={i} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-[25%] pb-6 md:pb-0">
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-orange-primary uppercase font-bold text-md"
                >
                  Who we are?
                </p>
                {about?.map((item, i) => (
                  <NavItem item={item} key={i} />
                ))}
              </div>
              <div className="flex flex-col gap-4 w-full md:w-[20%] pb-6 md:pb-0">
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-orange-primary uppercase font-bold text-md"
                >
                  Get in touch
                </p>
                {getInTouch?.map((item, i) => (
                  <GetInTouch item={item} key={i} />
                ))}
              </div>{" "}
              <div className="flex flex-col gap-4 w-full md:w-[20%] pb-6 md:pb-0">
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  className="text-orange-primary uppercase font-bold text-md"
                >
                  Our footprints
                </p>
                {addresses?.map((item, i) => (
                  <AddressView item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex pt-5 justify-center">
            <div className="w-full flex max-w-[1300px] flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-4 items-center">
                {tailLinks?.map((item, i) => (
                  <NavItem item={item} key={i} />
                ))}
              </div>
              <div>
                <p className="text-white mt-8 md:mt-0 opacity-80">
                  ©2021 ANJ America - All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavItem({ item }) {
  return (
    <Link href={item?.linkTo}>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-white opacity-80 text-md font-normal cursor-pointer"
      >
        {item?.label}
      </p>
    </Link>
  );
}

function GetInTouch({ item }) {
  return (
    <Link href={item?.linkTo}>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-white opacity-80 text-md font-normal cursor-pointer poppins-regular"
      >
        {item?.label}
      </p>
    </Link>
  );
}

function AddressView({ item }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="flex items-start gap-2"
    >
      <img
        className="w-4 h-4 object-contain mt-1"
        src="/V2/logos/landing/footer/location.svg"
      />

      <p className="text-white opacity-80 text-md font-normal cursor-pointer poppins-regular">
        {item?.address}
      </p>
    </div>
  );
}

function SocialLinkCard({ item }) {
  return (
    <a target="_blank" rel="noreferrer" href={item?.linkTo}>
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="w-5 h-5 object-contain"
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
