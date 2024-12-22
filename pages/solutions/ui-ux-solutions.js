import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "UI/UX Solutions",
    description:
      "We create seamless, intuitive, and visually appealing UI/UX solutions, combining creativity with user-centred design to enhance usability and satisfaction.",
    background: "banner-bg-uus",
  };

  const servicePageContent = {
    img: "/V3/images/landing/solutions/uus.svg",
    title:
      "We design UI/UX solutions that ensure smooth, enjoyable user interactions, boosting retention and conversion rates for websites, apps, and enterprise software.",
    para: [
      "At ANJ America, we conduct in-depth user research to understand your target audience, their needs, preferences, and behaviors. Our process includes creating interactive wireframes and prototypes to visualize your product’s structure and flow before development. We focus on crafting visually engaging and user-friendly UI designs that align with your brand identity, while optimizing the user experience (UX) by enhancing navigation and interactions to reduce friction and improve satisfaction.",
      "We also prioritize usability testing to refine designs based on real user feedback, ensuring your digital products provide seamless and enjoyable experiences. With ANJ America's UI/UX solutions, we deliver functional yet delightful products that stand out in today’s competitive market, ensuring superior user experiences for your audience.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
