import Link from "next/link";
import React from "react";

export default function BusinessSuccess() {
  const services = [
    {
      background: "business-solutions-one",
      title: "Staff Augmentation",
      linkTo: "/talent-solutions/staff-augmentation",
      description:
        "Quickly scale your team with skilled professionals on a short-term or long-term basis. Access talent for specialized projects without the overhead of full-time hiring",
    },
    {
      background: "business-solutions-two",
      title: "Permanent Staffing",
      linkTo: "/talent-solutions/permenant-staffing",
      description:
        "Find the right candidates for permanent roles in your organization. Comprehensive hiring support, including sourcing, screening, and onboarding",
    },
    {
      background: "business-solutions-three",
      title: "Dedicated Contract Staffing",
      linkTo: "/talent-solutions/dedicated-staff-contracting",
      description:
        "Evaluate potential hires with a trial period before making a permanent offer. Reduce hiring risks and ensure the perfect fit for your team.",
    },
    {
      background: "business-solutions-four",
      title: "Global Remote Workforce Solutions",
      linkTo: "/talent-solutions/global-remote-workforce-solutions",
      description:
        "Build a global team with flexible remote working options. Access talent beyond geographic constraints while maintaining productivity.",
    },
    {
      background: "business-solutions-five",
      title: "Talent Development and Transformation",
      linkTo: "/talent-solutions/talent-development-and-transformation",
      description:
        "Equip your workforce with the latest skills and certifications. Tailored programs to bridge skill gaps and prepare teams for future challenges.",
    },
  ];

  return (
    <div>
      <div className="w-full my-2 md:my-5 p-5 py-8 bg-white rounded-[20px] flex flex-col gap-6 items-center justify-center">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="text-lg uppercase text-orange-primary font-bold"
        >
          Talent Solutions
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className="text-xl text-center leading-[40px] md:leading-[57px] md:text-[40px] font-light max-w-[880px]"
        >
          Connecting Exceptional Talent with Innovative Solutions to Drive
          Business Success.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 md:gap-5">
            {services?.map((item, i) => (
              <Card item={item} key={i} i={i} />
            ))}
          </div>
        </div>
        <section id="domains" className="md:h-10" />
      </div>
    </div>
  );
}

function Card({ item, i }) {
  return (
    <Link href={item?.linkTo}>
      <div
        key={i}
        className={`${i === 4 ? "col-span-1 md:col-span-2" : "col-span-1"} ${
          item?.background
        } cursor-pointer flex flex-col gap-3 md:gap-6 items-center justify-end p-6 rounded-[15px] px-5`}
      >
        <p
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          data-aos={"fade-top"}
          className="text-lg tracking-wide md:text-[30px] text-white font-bold text-center md:leading-[45px]"
        >
          {item?.title}
        </p>
        <p
          data-aos-duration="750"
          data-aos-anchor-placement="center-bottom"
          data-aos={"fade-top"}
          className="text-[18px] max-w-[670px] text-white opacity-80 font-normal text-center leading-[28px]"
        >
          {item?.description}
        </p>
      </div>
    </Link>
  );
}
