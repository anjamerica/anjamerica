import React from "react";

import Banner from "../../components/common/Banner";
import OurTeam from "../../components/pages/our-team/OurTeam";

export default function Index() {
  const bannerContent = {
    title: "Hire from our top engineers",
    description:
      "ANJ is a marketplace for top UI, UX, Visual, and Interaction designers, as well as developers, engineers, programmers, coders, architects, and consultants. Top companies and start-ups hire freelance designers and developers from ANJ for their most mission-critical projects.",
    bannerStyle: "banner-bg-our-team",
  };

  return (
    <div className="w-full">
      <Banner item={bannerContent} />
      <OurTeam />
    </div>
  );
}
