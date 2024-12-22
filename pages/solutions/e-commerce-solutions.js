import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "E-Commerce Solutions",
    description:
      "We offer comprehensive e-commerce solutions to help businesses build, grow, and optimize their online stores with user-friendly, scalable, and secure platforms that enhance customer experience and drive sales",
    background: "banner-bg-ecs",
  };

  const servicePageContent = {
    img: "/V3/images/landing/solutions/ecs.svg",
    title:
      "We provide complete e-commerce solutions, from product management to payment integration, marketing tools, and customer support, helping your business succeed online.",
    para: [
      "Our custom e-commerce solutions are designed to build a tailored online store that aligns with your brand and business objectives. We offer secure payment gateway integration for streamlined transactions, as well as inventory and order management tools to optimize product listings and order fulfillment. Our mobile-optimized solutions ensure a seamless shopping experience across devices, and our integrated e-commerce marketing tools help boost traffic, conversions, and customer engagement through SEO, analytics, and automation.",
      "With [Your Company Name]'s e-commerce solutions, you can establish a powerful online presence that drives sales, enhances customer satisfaction, and scales with your growing business needs.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
