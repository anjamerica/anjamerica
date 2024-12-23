import React from "react";
import Marquee from "react-fast-marquee";

import Container from "../../common/Container";

export default function OurClients() {
  const clients = [
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/aladdin.svg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/aki.svg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/texcoms.svg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/planet.svg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/corenroll.svg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/wheeliyo.svg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/radheys.svg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/clients/prakria.svg",
  ];
  return (
    <div className="w-full bg-white rounded-[20px] py-5 mb-2 md:mb-5">
      <div className="w-full">
        <Container>
          <Marquee speed={50} gradient={false} direction="left" loop={0}>
            {clients?.map((item, i) => (
              <img
                key={i}
                src={item}
                className="mx-5 md:mx-10 w-[80px] h-[37px] md:w-auto md:h-auto object-contain"
                alt={`Client ${i}`}
              />
            ))}
          </Marquee>
        </Container>
      </div>
    </div>
  );
}
