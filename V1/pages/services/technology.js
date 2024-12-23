import React from "react";
import ServicesPageContent from "../../components/common/ServicesPageContent";

export default function Index() {
  const content = {
    bannerContent: {
      title: "Technology",
      description:
        "Technology, a powerful force shaping our world, presents both the promise of progress and the challenge of ethical responsibility in its relentless pursuit of innovation.",
      bannerStyle: "banner-bg-technology",
    },
    header: "When Technology Transcends Words, Innovations Speak",
    paragraph:
      "We welcome you to the future, where technology revolutionises the market to propel your brand-story in extraordinary ways. At our core, we are conquerors of the dynamic and ever-evolving challenges within the digital landscape encountered by businesses. Our unwavering focus lies in elevating sustainable innovation. With a resolute commitment, we empower organisations to thrive in the ever-shifting tides of the technological realm, all while delivering profound and impactful outcomes.",
  };
  return <ServicesPageContent key={Index} item={content} />;
}
