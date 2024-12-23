import React from "react";

export default function Index() {
  const items = [
    {
      title: "Home",
      list: [
        "Overview of ANJ America",
        "Our Spectrum of Software Solutions",
        "Talent Solutions",
        "Our Domain Expertise",
        "Life at ANJ",
      ],
    },
    {
      title: "Our Spectrum of Software Solutions",
      list: [
        "Enterprise Software Solutions",
        "Custom Software Solutions",
        "AI Powered Software Solutions",
        "Cloud-Based Software Solutions",
        "Mobile App Solutions",
        "E-Commerce Solutions",
        "Collaboration and Communication Tools",
        "UI/UX Solutions",
      ],
    },
    {
      title: "Our Domain Expertise",
      list: [
        "Banking & Financial Services",
        "Insurance",
        "EduTech",
        "Social Media Applications",
        "E-Commerce Solutions: Smarter Insights, Better Decisions",
      ],
    },
    {
      title: "Domains",
      list: [
        "Staff Augmentation",
        "Permanent Staffing",
        "Dedicated Contract Staffing",
        "Global Remote Workforce Solutions",
        "Talent Development and Transformation",
      ],
    },
    {
      title: "Work With Us",
      list: [
        "Company Overview",
        "Our Services",
        "Our Domain Expertise",
        "Our Spectrum of Software Solutions",
      ],
    },
    {
      title: "Blog",
      list: ["Industry Insights", "ANJ America Updates"],
    },
    {
      title: "Contact Us",
      list: ["Contact Information", "Customer Support", "Enquiry Form"],
    },
  ];
  return (
    <div className="w-full -mt-[62px]">
      <div className="w-full flex flex-col items-center rounded-[20px] p-5 pt-[145px] bg-white">
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          className="text-2xl md:text-[60px] text-center font-bold"
        >
          Sitemap for ANJ America
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="w-full text-lg md:text-[22px] mt-6 md:mt-10 text-center leading-[30px] opacity-80 font-medium max-w-[1118px]"
        >
          Below is the sitemap for the ANJ America website, designed to provide
          easy navigation for users to locate the information and services they
          need.
        </p>
      </div>
      <div className="rounded-[20px] flex flex-col gap-3 p-5 my-5 bg-white">
        {items?.map((item, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            key={i}
            className="mb-3 flex flex-col gap-2"
          >
            <p className="font-bold text-base">{item.title}</p>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              className="flex flex-col gap-1"
            >
              {item?.para && (
                <p className="text-gray-dark text-justify md:text-start">
                  {item?.para}
                </p>
              )}

              {item?.list?.map((item, i) => (
                <p
                  className="text-gray-dark pl-2 text-justify md:text-start"
                  key={i}
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
