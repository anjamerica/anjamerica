import React from "react";

export default function Campaign() {
  const item = {
    image:
      "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/assets/office.png",
    title: "Explore Our Trending Courses",
    description:
      "Take the next step in your career with our trending courses crafted by industry experts. Whether you're looking to master Business Analysis, lead teams as a Scrum Master, design exceptional experiences with UI/UX Design, or develop cutting-edge applications through Full Stack, Frontend, Backend Development, we’ve got you covered. Dive into Automation/Manual Testing or revolutionize workflows with DevOps—all tailored to meet today’s job market demands. Explore now and transform your ambitions into achievements!",
    linkTo: "/campaign-enquiry",
  };
  return (
    <div className="w-full  mt-5 p-5 md:pb-14 md:px-5 md:pt-5 pt-8 bg-white rounded-[20px] flex flex-col gap-6 items-center justify-center">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-lg text-center pt-5 uppercase text-orange-primary font-bold"
      >
        Empower Your Future With On-Demand Learning
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
        className="text-xl text-center leading-[40px] md:leading-[57px] md:text-[40px] font-light max-w-[1240px]"
      >
        Access Wxpertly Designed Courses By Industry Professionals, Learn At
        Your Own Pace, And Achieve Your Goals With Flexible, On-Demand Learning
        Anytime, Anywhere.
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex -mb-2 flex-col mt-5 md:mt-20 gap-10 lg:gap-14 xl:gap-20">
          <Card item={item} />
        </div>
      </div>
    </div>
  );
}

function Card({ item, i }) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row justify-between items-center `}
    >
      <img
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
        data-aos="flip-left"
        className="w-full h-full max-h-[352px] md:w-1/2 object-cover rounded-2xl flex items-end"
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
        <p className="text-base text-[#1E1E1E] font-light text-justify leading-[29px]">
          {item?.description}
        </p>
        <a
          href={item?.linkTo}
          className={`mt-3 flex items-center cursor-pointer gap-4 `}
        >
          <p className="text-orange-primary text-md">Register Now</p>
          <img
            src="/V3/logos/common/arrow.svg"
            className="w-10 h-3 object-contain text-orange-primary"
          />
        </a>
      </div>
    </div>
  );
}
