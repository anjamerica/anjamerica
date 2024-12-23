import React from "react";
import Container from "../../common/Container";
import { GoArrowRight } from "react-icons/go";

export default function Services() {
  const services = [
    {
      image: "/V2/images/services/1.png",
      title: "Experience Design",
      description:
        "UI/UX Design/ Web Experience / Mobile Experience / Commerce Experience / Applications and Dashboards/ Cross-Wearable App Design/Design Support Platform Experience Design and Maintenance",
      linkTo: "/services/experience-design",
    },
    {
      image: "/V2/images/services/2.png",
      title: "Technology",
      description:
        "DevOps Consulting / Data & Analytics/ Al & Machine Learning/ Web Development / Mobile App Development / E-commerce / Quality Assurance & Testing/ Cloud Services / Cyber Security",
      linkTo: "/services/technology",
    },
    {
      image: "/V2/images/services/3.png",
      title: "Digital Marketing",
      description:
        "Social Media Management/ Performance Marketing/ Search Engine Optimisation/ Content Marketing/ Marketing Automation/ Analytics",
      linkTo: "/services/digital-marketing",
    },
    {
      image: "/V2/images/services/4.png",
      title: "Branding",
      description:
        "Brand Consulting / Logo Design/ Brand Collateral/ Graphic Design / 2D / 3D Visualisation/ Brand Identity/ Industrial Product Design",
      linkTo: "/services/branding",
    },
    {
      image: "/V2/images/services/5.png",
      title: "Safe Agile",
      description:
        "Plan & initiate project/ Requirements/ Development/ Integrate& Test for QA/ Release/ Feedback & Review/ Release to market/ Incorporate changes/ Adjust & track re-prioritize feature(s)/ Next iteration / Development/….",
      linkTo: "/services/agile",
    },
    {
      image: "/V2/images/services/6.png",
      title: "ERP Implementation and Integration",
      description:
        "ERP Consulting /Custom ERP Development/Integration Services/ERP Migration/ Training and Support/ERP Support",
      linkTo: "/services/erp",
    },
    {
      image: "/V2/images/services/7.png",
      title: "Cyber Security",
      description:
        "Security Assessments and Audits/ Penetration Testing/Security Information and Event Management (SIEM)/Incident Response/Compliance and Risk Management",
      linkTo: "/services/cyber-security",
    },
    {
      image: "/V2/images/services/8.png",
      title: "Cloud and DevOps",
      description:
        "DevOps Consulting/ CI/CD pipeline Development/Infrastucture As code(IAC)/Monitoring And Logging/Containerization and Orchestration",
      linkTo: "/services/devops",
    },
  ];
  return (
    <Container>
      <div className="w-full flex flex-col my-5 md:my-20 gap-5 md:gap-10 lg:gap-14 xl:gap-20">
        {services?.map((item, i) => (
          <Card item={item} key={i} i={i} />
        ))}
      </div>
    </Container>
  );
}

function Card({ item, i }) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row justify-between items-center ${
        i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img className="w-full h-full max-h-[440px] md:w-1/2" src={item?.image} />
      <div
        className={`flex flex-col gap-3 ${
          i > 0 && i % 2 !== 0 && "md:pl-6 lg:pl-14"
        }`}
      >
        <p className="text-lg md:text-[27px] font-normal">{item?.title}</p>
        <p className="text-md md:text-lg text-justify md:text-start font-light leading-[21px] md:leading-[45px]">
          {item?.description}
        </p>
        <a
          href={item?.linkTo}
          className={`mt-3 flex items-center cursor-pointer gap-4 `}
        >
          <p className="text-primary md:text-xl text-normal text-md">
            Explore more
          </p>
          <GoArrowRight className="w-5 h-5 object-contain text-primary" />
        </a>
      </div>
    </div>
  );
}
