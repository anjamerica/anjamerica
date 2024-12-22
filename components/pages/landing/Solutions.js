import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Solutions() {
  const services = [
    {
      image: "/V3/images/landing/solutions/ess.svg",
      title: "Enterprise Software Solutions",
      description:
        "Revolutionize your business processes with powerful enterprise systems, including ERP, CRM, and HRM, tailored to streamline operations and improve productivity.",
      linkTo: "/solutions/enterprise-software-solutions",
    },
    {
      image: "/V3/images/landing/solutions/css.svg",
      title: "Custom Software Solutions",
      description:
        "We design and develop bespoke software solutions that address your unique challenges, ensuring seamless integration with your workflows and delivering measurable results.",
      linkTo: "/solutions/custom-software-solutions",
    },
    {
      image: "/V3/images/landing/solutions/aiss.svg",
      title: "AI-Powered Software Solutions",
      description:
        "Transform your systems with AI-driven intelligence. Our services include predictive analytics, automation, and AI-powered tools like chatbots and virtual assistants to enhance efficiency and decision-making.",
      linkTo: "/solutions/ai-powered-software-solutions",
    },
    {
      image: "/V3/images/landing/solutions/cbss.svg",
      title: "Cloud-Based Software Solutions",
      description:
        "Leverage the scalability and flexibility of the cloud with our cutting-edge solutions. From SaaS applications to full cloud migration, we future-proof your business operations.",
      linkTo: "/solutions/cloud-based-software-solutions",
    },
    {
      image: "/V3/images/landing/solutions/mas.svg",
      title: "Mobile App Solutions",
      description:
        "Expand your digital presence with intuitive and user-friendly mobile applications for iOS and Android, crafted to elevate customer experiences and engage your audience.",
      linkTo: "/solutions/mobile-app-solutions",
    },
    {
      image: "/V3/images/landing/solutions/ecs.svg",
      title: "E-Commerce Solutions",
      description:
        "Build and scale your online presence with secure and dynamic e-commerce platforms. From storefront design to payment integration, we provide end-to-end solutions for online success.",
      linkTo: "/solutions/e-commerce-solutions",
    },
    {
      image: "/V3/images/landing/solutions/cct.svg",
      title: "Collaboration and Communication Tools",
      description:
        "Enhance teamwork and communication with advanced tools for messaging, video conferencing, and project management, designed to keep your team connected and productive.",
      linkTo: "/solutions/collaboration-and-communication-tools",
    },
    {
      image: "/V3/images/landing/solutions/uus.svg",
      title: "UI/UX Solutions",
      description:
        "At ANJ America, we act as an extension of your team, specializing in UX-focused design solutions for software companies. Our mission is to help you deliver seamless, user-friendly experiences that enhance the functionality and value of your software products.",
      linkTo: "/solutions/ui-ux-solutions",
    },
  ];

  return (
    <div className="w-full p-5 md:pb-0 md:px-5 md:pt-5 pt-8 bg-white rounded-[20px] flex flex-col gap-6 items-center justify-center">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-lg text-center pt-5 uppercase text-orange-primary font-bold"
      >
        Our Spectrum of Software Solutions
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
        className="text-xl text-center leading-[40px] md:leading-[57px] md:text-[40px] font-light max-w-[927px]"
      >
        Empowering Your Digital Transformation with a Full Spectrum of
        Cutting-Edge Software Solutions
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex -mb-2 flex-col mt-5 md:mt-20 gap-10 lg:gap-14 xl:gap-20">
          {services?.map((item, i) => (
            <Card item={item} key={i} i={i} />
          ))}
        </div>
      </div>
      <section className="h-1" id="talent-solutions"></section>
    </div>
  );
}

function Card({ item, i }) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row justify-between items-center ${
        i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
        data-aos="flip-left"
        className="w-full h-full max-h-[440px] md:w-1/2 object-contain flex items-end"
        src={item?.image}
      />
      <div
        className={`flex flex-col max-w-[500px] gap-3 ${
          i > 0 && i % 2 !== 0 && "md:pl-6 lg:pl-14"
        }`}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
      >
        <p className="text-xl md:text-[30px]  font-bold">{item?.title}</p>
        <p className="text-base text-[#1E1E1E] text-justify md:text-start font-light leading-[29px]">
          {item?.description}
        </p>
        <a
          href={item?.linkTo}
          className={`mt-3 flex items-center cursor-pointer gap-4 `}
        >
          <p className="text-orange-primary text-md">More Info</p>
          <img
            src="/V3/logos/common/arrow.svg"
            className="w-10 h-3 object-contain text-orange-primary"
          />
        </a>
      </div>
    </div>
  );
}
