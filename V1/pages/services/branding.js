import React from "react";
import ServicesPageContent from "../../components/common/ServicesPageContent";

export default function Index() {
  const content = {
    bannerContent: {
      title: "Branding",
      description:
        "Unleash the Power of Precision Marketing. Beyond the Reach, We Deliver Results. Transforming Strategies into Measurable Success",
      bannerStyle: "banner-bg-branding",
    },
    header: "Building Bold Brands with Creative Precision",
    paragraph:
      "Branding is more than just a logo or a tagline—it's the heart of your business identity. It defines how your audience perceives and connects with your brand, setting you apart in a crowded marketplace. Effective branding weaves together visuals, messaging, and experiences to create a lasting impression that resonates with your target audience. It builds trust, fosters loyalty, and drives engagement by consistently delivering on your promise. Whether it’s through striking design, compelling storytelling, or seamless user experiences, branding is the key to creating a memorable and impactful presence that inspires growth and success.",
  };
  return <ServicesPageContent key={Index} item={content} />;
}
