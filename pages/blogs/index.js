import React from "react";

import Banner from "../../components/common/Banner";
import Blogs from "../../components/pages/blogs/Blogs";

export default function Index() {
  const bannerContent = {
    title: "Start doing work Exploring the Tech Horizons",
    description:
      "Insights, Innovations, and IT Excellence Unveiled delves into the evolving tech world, showcasing innovations, trends, and IT mastery. It’s a journey of discovery, empowering individuals and organizations to embrace excellence.",
    bannerStyle: "banner-bg-blogs",
  };
  return (
    <div>
      <Banner item={bannerContent} />
      <Blogs />
    </div>
  );
}
