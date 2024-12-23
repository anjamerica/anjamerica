import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Custom Software Solutions",
    description:
      "We provide custom software solutions tailored to your business needs, aligning  with your goals, workflows, and operational requirements.",
    background: "banner-bg-css",
  };

  const servicePageContent = {
    img: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/solutions/css.svg",
    title:
      "We develop flexible, scalable solutions—be it new applications, system integrations, or upgrades—ensuring performance, security, and seamless user experiences from concept to deployment.",
    para: [
      "We offer tailored software development to address your unique business challenges and boost efficiency. Our expertise includes seamless system integration to enhance data flow and functionality, mobile app development to improve user engagement and support on-the-go operations, and scalable cloud solutions for secure, collaborative access across teams. Additionally, we provide ongoing maintenance and support to ensure your software remains optimized and up to date.",
      "At ANJ America, our solutions are designed not just to meet your current needs but to grow with your business. Stay ahead of the competition and drive innovation with our custom software services, crafted to empower your organization and deliver lasting value.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
