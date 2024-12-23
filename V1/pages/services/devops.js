import React from "react";
import ServicesPageContent from "../../components/common/ServicesPageContent";

export default function Index() {
  const content = {
    bannerContent: {
      title: "Cloud and DevOps",
      description:
        "Cloud and DevOps together enhance software development by enabling continuous integration and delivery, scalable infrastructure, and efficient collaboration across teams.",
      bannerStyle: "banner-bg-devops",
    },
  };
  return (
    <ServicesPageContent key={Index} item={content} otherChildren={<List />} />
  );
}

function List() {
  const points = [
    {
      header: "Cloud",
      description:
        "Branding is more than just a logo or a tagline—it's the heart of your business identity. It defines how your audience perceives and connects with your brand, setting you apart in a crowded marketplace. Effective branding weaves together visuals, messaging, and experiences to create a lasting impression that resonates with your target audience. It builds trust, fosters loyalty, and drives engagement by consistently delivering on your promise. Whether it’s through striking design, compelling storytelling, or seamless user experiences, branding is the key to creating a memorable and impactful presence that inspires growth and success.",
    },
    {
      header: "DevOps",
      description:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. It emphasizes collaboration, automation, and integration between developers and IT operations teams to improve efficiency, reduce errors, and accelerate deployment.",
    },
    {
      header: "Cloud and DevOps Integration",
      description:
        "When combined, Cloud and DevOps create a powerful synergy. The cloud provides the scalable and flexible infrastructure needed to support DevOps practices. This integration enables continuous integration and continuous delivery (CI/CD), automated testing, and rapid deployment, allowing organizations to innovate faster and respond more effectively to market changes and customer needs.",
    },
  ];
  return (
    <div>
      {points?.map((item, i) => (
        <div key={i} className="flex flex-col gap-3 items-start">
          <p className=" mt-3 text-lg md:text-[30px] font-normal">
            {item?.header}
          </p>
          <p className="text-md md:text-[20px] font-light text-justify leading-[21px] md:leading-[45px]">
            {item?.description}
          </p>
        </div>
      ))}
    </div>
  );
}
