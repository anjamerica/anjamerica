import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Global Remote Workforce Solutions",
    description:
      "We offer Global Remote Workforce Solutions, connecting businesses with top talent worldwide. Our expertise in managing remote teams ensures seamless integration of professionals, regardless of location.",
    background: "business-solutions-banner-four",
  };

  const servicePageContent = {
    img: "/V3/images/landing/businessSuccess/4.png",
    imageStyle: "w-full !md:w-[500px] !h-[350px] !object-cover rounded-[20px]",
    title:
      "Our solutions streamline remote team management and enhance collaboration, handling recruitment, onboarding, and time zone coordination, so you can focus on growth and innovation.",
    para: [
      "With ANJ America's Global Remote Workforce Solutions, you gain access to a global network of highly skilled professionals tailored to your industry and needs. Our smooth onboarding process ensures that remote employees are quickly integrated into your culture and workflow. We also provide secure, user-friendly communication tools for real-time collaboration across time zones and expertly manage time zone coordination to ensure seamless project timelines.",
      "We offer ongoing support for both employers and remote employees, helping to maintain productivity, engagement, and performance. Our solutions expand your talent pool, increase flexibility, and build a collaborative, efficient, and cost-effective remote team that propels your business forward.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
