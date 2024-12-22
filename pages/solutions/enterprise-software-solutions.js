import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Enterprise Software Solutions",
    description:
      "We provide tailored enterprise software solutions to streamline operations, enhance productivity, and drive growth for businesses across industries.",
    background: "banner-bg-ess",
  };

  const servicePageContent = {
    img: "/V3/images/landing/solutions/ess.svg",
    title:
      "Our scalable, flexible, and secure enterprise software solutions offer automation, real-time insights, and seamless integration to meet your evolving business needs.",
    para: [
      "Our Enterprise Software Solutions are designed to optimize and streamline your business operations. From Enterprise Resource Planning (ERP) systems that centralize functions like finance, HR, supply chain, and inventory management to Customer Relationship Management (CRM) tools that enhance customer engagement and sales strategies, we provide comprehensive solutions to meet your needs. Our Business Intelligence (BI) solutions deliver actionable insights through advanced analytics, enabling data-driven decision-making for your organization.",
      "Additionally, we offer custom software development to create tailored solutions that align with your unique workflows, ensuring maximum efficiency and performance. With a focus on integration, security, and scalability, our solutions help businesses stay competitive and fully leverage technology. Transform your operations and achieve new heights with our innovative enterprise software offerings.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
