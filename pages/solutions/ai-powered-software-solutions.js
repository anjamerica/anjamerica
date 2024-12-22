import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Ai powered software solutions",
    description:
      "We deliver AI-powered solutions to transform your operations, boost efficiency, automate processes, and provide actionable insights for smarter decision-making.",
    background: "banner-bg-aiss",
  };

  const servicePageContent = {
    img: "/V3/images/landing/solutions/aiss.svg",
    title:
      "We use AI to unlock opportunities, enhance experiences, and drive innovation with tailored solutions like predictive analytics and automation.",
    para: [
      "Our AI-powered software solutions leverage predictive analytics to forecast trends, customer behavior, and market conditions, helping you make informed decisions. We incorporate intelligent automation to streamline repetitive tasks, allowing your teams to focus on strategic initiatives. With Natural Language Processing (NLP), we enhance customer support through AI-powered chatbots and voice assistants. Additionally, our machine learning solutions offer custom models to improve your products, services, and internal operations.",
      "By using AI to analyze large datasets, we provide data-driven insights that optimize performance and drive growth. With ANJ America's AI solutions, your business stays ahead of the curve, fostering innovation and efficiency in an increasingly data-driven world.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
