import React from "react";

export default function About() {
  return (
    <div className="banner-bg-landing-about my-2 md:my-5 rounded-[20px] flex justify-end items-end pb-5 md:pb-24 w-full">
      <div className="w-full md:w-[65%] flex flex-col justify-end gap-6">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="text-2xl md:leading-[45px] text-center md:text-start md:text-[30px] font-bold max-w-[880px] w-full text-white"
        >
          Your B2B Experts: Building Technology, Teams, and Partnerships
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className="text-lg text-center md:text-start px-5 md:px-0 leading-[28px] font-medium max-w-[880px] w-full text-[#CECECE]"
        >
          We’re more than a software company—our innovative technology, skilled
          team members, strong customer relationships, and trusted business
          partnerships come together to drive success. Let’s grow and thrive
          together!
        </p>
      </div>
    </div>
  );
}
