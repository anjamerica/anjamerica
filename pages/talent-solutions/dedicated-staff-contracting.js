import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Dedicated Contract Staffing",
    description:
      "We provide Dedicated Contract Staffing services, offering specialized professionals to scale your workforce for specific projects or timeframes. Access skilled experts without the commitment of permanent employment.",
    background: "business-solutions-banner-three",
  };

  const servicePageContent = {
    img: "/V3/images/landing/businessSuccess/ws-3.png",
    imageStyle: "w-full !md:w-[500px] !h-[350px] !object-cover rounded-[20px]",
    title:
      "We provide top talent for short-term support, seasonal demand, or specialized skills. Our contract staff integrate smoothly with your team for successful project delivery.",
    para: [
      "ANJ America’s Dedicated Contract Staffing services offer on-demand expertise, providing skilled professionals to meet specific business needs with the flexibility to adjust as your requirements evolve. Our flexible engagement models allow you to choose between full-time or part-time contract staffing, tailored to fit your project timelines and budget. Our contract staff integrate seamlessly with your in-house team, ensuring smooth transitions and consistent workflows.",
      "With rapid talent deployment, we reduce hiring time and accelerate project timelines, helping you meet deadlines effectively. Our cost-effective staffing solutions enable you to efficiently manage resources without the overhead of full-time employment. Augment your team with the right talent, boost productivity, and maintain flexibility with ANJ America.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
