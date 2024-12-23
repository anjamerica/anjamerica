import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Staff Augmentation",
    description:
      "We offer staff augmentation services, providing skilled professionals on-demand to meet your resource needs for short-term or long-term projects.",
    background: "business-solutions-banner-one",
  };

  const servicePageContent = {
    img: "/V3/images/landing/businessSuccess/ws-1.png",
    imageStyle: "w-full !md:w-[500px] !h-[350px] !object-cover rounded-[20px]",
    title:
      "We handle recruitment end-to-end, securing top talent for technical, managerial, or key roles. Our permanent staffing solutions build strong teams for your organization's growth.",
    para: [
      "At ANJ America, we specialize in Talent Sourcing and Recruitment, identifying top-tier candidates with the skills and experience your business needs. Our comprehensive screening process, including background checks and technical assessments, ensures we find the perfect fit for your team. By prioritizing both technical expertise and cultural compatibility, we help foster long-term success and employee retention.",
      "From managing the end-to-end hiring process to facilitating seamless onboarding, we streamline every aspect of recruitment to save you time and effort. With our Permanent Staffing services, you can build a team of talented professionals committed to your company’s vision, driving innovation and long-term growth.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
