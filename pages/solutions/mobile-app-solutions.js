import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Mobile App Solutions",
    description:
      "We specialize in custom mobile app solutions for iOS and Android, helping businesses engage customers, streamline operations, and drive growth with seamless user experiences.",
    background: "banner-bg-mas",
  };

  const servicePageContent = {
    img: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/solutions/mas.svg",
    title:
      "We provide end-to-end mobile app development, delivering intuitive, scalable, and high-performance apps tailored to your business needs.",
    para: [
      "Our custom mobile app development services offer tailored solutions for both iOS and Android, designed to meet your unique business requirements. We focus on creating intuitive and engaging UI/UX designs to enhance user experience and drive engagement. Additionally, we specialize in building e-commerce apps that allow customers to shop seamlessly from their mobile devices.",
      "We also provide ongoing app maintenance and support, including updates, bug fixes, and performance enhancements to ensure smooth operation. Our mobile app integration services connect your app with existing systems and databases to optimize functionality and performance. With [Your Company Name]'s Mobile App Solutions, your business can deliver powerful, user-friendly mobile experiences that foster engagement, customer loyalty, and success.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
