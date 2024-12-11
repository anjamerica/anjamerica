import React from "react";
import Marquee from "react-fast-marquee";

import Container from "../../common/Container";

export default function OurClients() {
  const clients = [
    "/V2/logos/landing/clients/aladdin.svg",
    "/V2/logos/landing/clients/pp.svg",
    "/V2/logos/landing/clients/aki.svg",
    "/V2/logos/landing/clients/ues.svg",
    "/V2/logos/landing/clients/abc.svg",
    "/V2/logos/landing/clients/texcoms.svg",
  ];
  return (
    <div className="w-full my-4 md:my-8">
      <Container>
        <p className="text-xl md:text-[30px] font-normal">Our Clients</p>
      </Container>
      <div className="w-screen mt-4 md:mt-8 border-gray-normal-y py-8">
        <Container>
          <Marquee speed={50} gradient={false} direction="left" loop={0}>
            {clients?.map((item, i) => (
              <img
                key={i}
                src={item}
                className="mx-4 w-[80px] h-[37px] md:w-auto md:h-auto object-contain"
                alt={`Client ${i}`}
              />
            ))}
          </Marquee>
        </Container>
      </div>
    </div>
  );
}
