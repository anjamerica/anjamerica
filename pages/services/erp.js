import React from "react";
import ServicesPageContent from "../../components/common/ServicesPageContent";

export default function Index() {
  const content = {
    bannerContent: {
      title: "Erp Implimentation",
      description:
        "ERP implementation and integration transform business operations by streamlining processes, improving data accuracy, and enhancing overall efficiency.",
      bannerStyle: "banner-bg-erp",
    },
    header: "Seamless ERP Implementation for Optimized Business Operations",
  };
  return (
    <ServicesPageContent key={Index} item={content} otherChildren={<List />} />
  );
}

function List() {
  const points = [
    "ERP implementation and integration is a multifaceted process that significantly transforms an organization's operations. It begins with meticulous planning and preparation, where objectives are defined, a dedicated project team is assembled, and a comprehensive project plan is developed. Selecting the right vendor involves thorough research, proposal evaluation, and conducting product demos. The next phase, business process reengineering, involves analyzing and redesigning existing workflows to align with the new system's capabilities. System design and data migration are critical steps where the ERP is configured to meet specific needs, and accurate, clean data is transferred from legacy systems. Rigorous testing ensures that the system functions correctly, and extensive user training and change management help in smooth transition and adoption. Deployment marks the go-live stage, where the system is officially launched, followed by ongoing post-implementation support to address any issues and optimize performance. Adhering to best practices, such as strategic alignment, stakeholder involvement, and continuous improvement, ensures that the ERP system not only integrates seamlessly with existing processes but also scales with the organization's growth and evolving needs.",
  ];
  return (
    <div>
      {points?.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <p className="text-md md:text-lg font-light text-justify leading-[21px] md:leading-[45px]">
            •
          </p>
          <p className="text-md md:text-lg font-light text-justify leading-[21px] md:leading-[45px]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
