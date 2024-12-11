import React from "react";
import Container from "../../components/common/Container";
import Banner from "../../components/common/Banner";
import Services from "../../components/pages/services/Services";

export default function Index() {
  const bannerContent = {
    title: "Comprehensive Business Services",
    description:
      "We are your trusted partner in digital transformation, offering innovative solutions tailored to your business needs. With a skilled team, we drive growth, streamline operations, and help organizations thrive in the digital age.",
    bannerStyle: "banner-bg-services",
  };
  return (
    <div>
      <Banner item={bannerContent} />
      <Services />
    </div>
  );
}
