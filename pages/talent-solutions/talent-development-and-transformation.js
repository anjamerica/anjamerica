import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Talent Development and Transformation",
    description:
      "We offer Talent Development and Transformation services to help your organization unlock its workforce's potential, fostering skill growth, leadership development, and organizational change to tackle evolving business challenges.",
    background: "business-soloutions-banner-five",
  };

  const servicePageContent = {
    img: "/V3/images/landing/businessSuccess/ws5.png",
    imageStyle: "w-full !md:w-[500px] !h-[350px] !object-cover rounded-[20px]",
    title:
      "We identify talent gaps, create tailored learning programs, and implement strategies to support upskilling, leadership development, and cultural transformation for long-term growth.",
    para: [
      "We offer tailored programs in skills training and upskilling to enhance technical, leadership, and soft skills across your team. Our leadership development initiatives provide personalized coaching and mentorship to cultivate future leaders. We also support your organization through change management, ensuring smooth transitions as you adapt to new technologies, processes, and structures. Additionally, our employee engagement programs are designed to boost motivation, satisfaction, and retention, fostering a positive and productive work environment.",
      "With a focus on building a continuous learning culture, we help your business stay competitive in a fast-evolving market. ANJ America's Talent Development and Transformation services enable you to develop a more agile, capable, and engaged workforce that drives business success and adapts to future challenges.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
