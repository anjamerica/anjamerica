import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Cloud-Based Software Solutions",
    description:
      "We offer cloud-based software solutions that enhance flexibility, scalability, and accessibility. Our secure and cost effective cloud alternatives enable seamless collaboration and real-time data access from anywhere.",
    background: "banner-bg-cbss",
  };

  const servicePageContent = {
    img: "/V3/images/landing/solutions/cbss.svg",
    title:
      "We help businesses streamline operations, reduce costs, and boost productivity with cloud-based applications, storage, and custom solutions, ensuring scalability, performance, and security.",
    para: [
      "Our Cloud-Based Software Solutions include custom-built cloud applications designed for scalability and performance, secure cloud storage for seamless data management, and cloud integration to unify your systems for an efficient workflow. We also offer disaster recovery and backup solutions to ensure business continuity and data protection, along with robust cloud security measures to safeguard your data and maintain industry compliance.",
      "With [Your Company Name]'s cloud solutions, you can enhance operational efficiency, reduce IT overhead, and keep your business agile in an ever-evolving digital landscape.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
