import React from "react";
import { GoArrowRight } from "react-icons/go";

import Container from "../../common/Container";
import Link from "next/link";

export default function InsideAnj() {
  const list = [
    {
      title: "Experience Design",
      description:
        "UI/UX Design/ Web Experience / Mobile Experience / Commerce Experience / Applications and Dashboards/ Cross-Wearable App Design/Design Support Platform Experience Design and Maintenance",
      linkTo: "/services/experience-design",
    },
    {
      title: "Technology",
      description:
        "DevOps Consulting /Data & Analytics /AI & Machine Learning /Web Development /Mobile App Development /E-commerce /Quality Assurance & Testing /Cloud Services /Cyber Security",
      linkTo: "/services/technology",
    },
    {
      title: "Digital Marketing",
      description:
        "Maintenance Social Media Management /Performance Marketing /Search Engine Optimization /Content Marketing /Marketing Automation /Analytics",
      linkTo: "/services/experience-design",
    },
  ];
  return (
    <div className="py-5 md:py-8">
      <Container>
        <p className="text-gray-quarternery text-justify md:text-start text-[20px] md:text-[25px] max-w-[1000px] leading-[40px] font-extralight">
          We believe in a world where technology fosters your every day
          experience. And our mission is to make it happen!{" "}
        </p>
        <p className="mt-3 md:mt-6 text-primary text-[20px] md:text-[40px] font-light">
          Inside ANJ
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {list?.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg md:text-[30px] font-normal">{item?.title}</p>
      <p className="text-md md:text-[20px] leading-[21px] font-light md:leading-[45px] text-justify xl:text-start">
        {item?.description}
      </p>
      <Link href={item?.linkTo}>
        <div className="md:mt-3 flex cursor-pointer items-center gap-4">
          <p className="text-primary text-md md:text-lg text-normal">Explore</p>
          <GoArrowRight className="w-5 h-5 object-contain text-primary" />
        </div>
      </Link>
    </div>
  );
}
