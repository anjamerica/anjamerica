import React from "react";
import BannerV2 from "../../../components/common/BannerV2";

const Management = () => {
  const bannerContent = {
    title: "What is Cloud Management? ",
    description:
      "The evolution and advancement of technology have paved the way to make mankind's life hassle-free! Cloud management is a type of software and technology that ensures seamless.",
    background: "checklistimg",
  };
  const items = [
    {
        title: "What is Cloud Management?",
        para: "The evolution and advancement of technology have paved the way to make mankind's life hassle-free! Cloud management is a type of software and technology that ensures seamless, compilation, storage, and management of data that can be done in the blink of an eye! Cloud management can be used for all industries, during one's everyday way of life. Examples include Google Drive and iCloud for Apple Devices."
    },
    {
        title:"Benefits of Cloud Management Services:",
        para: "Be provided with a simple view - The cloud environment, when managed efficiently, enables IT and business leaders to get a comprehensive view of IT assets, including cloud services and software. This, in turn, helps organizations use these tools more effectively. It would be easy for staff members, accountants, the operations team, etc. to track down accurate data when required. They wouldn't need to search on their hard drives or “click” various folders. This would lead to saving time in an office environment. Timely delivery to their customers can be accomplished with a cloud management system. In a cloud management system, people do not need to keep exchanging data back and forth, with the software's implementation—people can edit or view documents (depending on the option chosen).",
    },
    {
        para: "Minimize the risk of data loss - Why don't we think of this scenario: an instance where an individual is taking on his/her work in an energetic manner. Due to some virus or malware that were downloaded, the device tends to shut down on its own. There is a possibility that a segment of the data can be lost. This would lead to unnecessary havoc in one's life. Cloud management ensures that when a person is in the process of executing their work, it is always saved, automatically. Effective cloud management practices promote security and reduce the number of vulnerabilities that could be exposed to malicious outsiders. This would also ensure that the data is properly secured and the operational continuity is maintained.",
    },
    {
        para: "Cut down on wasted IT spending - Assessments have been made, and various sources have said that the portion of cloud spending wasted through inefficiency is at 35 percent or higher. When we think about it, there is an opportunity here! We can cause a positive impact, without having an adverse effect. Let&#39;s say that in an organization that wastes 35 percent of an annual $1 million in cloud spending through inefficiency, the same organization could implement cloud management systems that could nearly save $200,000 in savings every year! Effective cloud management helps organizations get rid of unneeded cloud expenses and optimize cloud resources, resulting in better results for less money."
    },
    {
        title:"Consequences when you do not have CMS:",
        list: [
            "Your team is absolutely sick of manual labor when you think about it! One of the keys to success is, “Don't work harder, work smarter.”",
            "Not wearing a bulletproof vest and going into battle is an analogy to a firm not having a cloud management system.",
            "Not wearing a bulletproof vest and going into battle is an analogy to a firm not having a cloud management system.",
            "This could be one of those instances when departments are not transparent. This would lead to internal challenges and issues, which can be solved if everyone is just in sync. The cloud helps you do that! And finally,",
            "You’re always anxious about budgeting and costs. The implementation of cloud system management would help save on costs. Through CMS, we can track unused and underused resources. We should be able to put our capital on resources where it's required. Recurring costs certainly requires our attention.",
        ]
    },
    {
        title: "Don't fret&semi; ANJ America's got your back:",
        para: "ANJ America is absolutely customer-driven as we focus on building the infrastructure for your success. One of ANJ’s key services is Cloud Management Services. We wish to create a world where managing the Cloud system is simple, without any complexity. We insist on transforming cloud systems for enterprises by improving performance, adding new capabilities and driving down costs. When you think CMS, you think ANJ America!",
    },

]

  return (
    <div className="w-full -mt-[62px]">
      <BannerV2 item={bannerContent} />
      <div className="rounded-[20px] flex flex-col gap-3 p-5 my-5 bg-white">
        {items?.map((item, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            key={i}
            className="mb-3 flex flex-col gap-2"
          >
            <p className="font-bold text-base">{item.title}</p>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              className="flex flex-col gap-1"
            >
              {item?.para && (
                <p className="text-gray-dark text-justify md:text-start">
                  {item?.para}
                </p>
              )}

              {item?.list?.map((item, i) => (
                <p
                  className="text-gray-dark pl-2 text-justify md:text-start"
                  key={i}
                >
                  • {item}
                </p>
              ))}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
