import React from "react";
import Marquee from "react-fast-marquee";

import Container from "../../common/Container";

export default function OurClients() {
  const clients = [
    "/V2/logos/landing/clients/aladdin.svg",
    "/V2/logos/landing/clients/aki.svg",
    "/V2/logos/landing/clients/texcoms.svg",
    "/V2/logos/landing/clients/planet.svg",
    "/V2/logos/landing/clients/corenroll.svg",
    "/V2/logos/landing/clients/wheeliyo.svg",
    "/V2/logos/landing/clients/radheys.svg",
    "/V2/logos/landing/clients/prakria.svg",
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
