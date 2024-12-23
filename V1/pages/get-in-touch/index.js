import React from "react";

import Banner from "../../components/common/Banner";
import Container from "../../components/common/Container";
import Enquiry from "../../components/pages/landing/Enquiry";

export default function index() {
  const bannerContent = {
    title: "Contact ANJ AMerica",
    description:
      "Grow with us, where your success is our purpose. Together, we’ll break barriers, overcome challenges, and unlock possibilities through trust, collaboration, and determination. Your growth fuels our progress, and our partnership drives us toward greatness.",
    bannerStyle: "banner-bg-contact-us",
  };
  return (
    <div className="md:pb-10">
      <Banner item={bannerContent} />
      <Container>
        <Enquiry />
        <div className="my-10 md:my-14">
          <img
            src="/v2/images/contact-us/gp.svg"
            className="w-full h-fit object-contain"
          />
        </div>
      </Container>
    </div>
  );
}
