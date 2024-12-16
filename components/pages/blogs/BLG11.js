import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG11() {
  const router = useRouter();

  const benefits = [
    {
      title: "Be provided with a simple view",
      description:
        "The cloud environment, when managed efficiently, enables IT and business leaders to get a comprehensive view of IT assets, including cloud services and software. This, in turn, helps organizations use these tools more effectively. It would be easy for staff members, accountants, the operations team, etc. to track down accurate data when required. They wouldn't need to search on their hard drives or “click” various folders. This would lead to saving time in an office environment. Timely delivery to their customers can be accomplished with a cloud management system. In a cloud management system, people do not need to keep exchanging data back and forth, with the software's implementation—people can edit or view documents (depending on the option chosen).",
    },
    {
      title: "Minimize the risk of data loss",
      description:
        "Why don't we think of this scenario: an instance where an individual is taking on his/her work in an energetic manner. Due to some virus or malware that were downloaded, the device tends to shut down on its own. There is a possibility that a segment of the data can be lost. This would lead to unnecessary havoc in one's life. Cloud management ensures that when a person is in the process of executing their work, it is always saved, automatically. Effective cloud management practices promote security and reduce the number of vulnerabilities that could be exposed to malicious outsiders. This would also ensure that the data is properly secured and the operational continuity is maintained.",
    },
    {
      title: "Cut down on wasted IT spending",
      description:
        "Assessments have been made, and various sources have said that the portion of cloud spending wasted through inefficiency is at 35 percent or higher. When we think about it, there is an opportunity here! We can cause a positive impact, without having an adverse effect. Let&#39;s say that in an organization that wastes 35 percent of an annual $1 million in cloud spending through inefficiency, the same organization could implement cloud management systems that could nearly save $200,000 in savings every year! Effective cloud management helps organizations get rid of unneeded cloud expenses and optimize cloud resources, resulting in better results for less money.",
    },
  ];

  const consequences = [
    "Your team is absolutely sick of manual labor when you think about it! One of the keys to success is, “Don't work harder, work smarter.”",
    "Not wearing a bulletproof vest and going into battle is an analogy to a firm not having a cloud management system.",
    "Think about it! Your infrastructure is not immune to disasters pertaining to the advanced and developed world.",
    "This could be one of those instances when departments are not transparent. This would lead to internal challenges and issues, which can be solved if everyone is just in sync. The cloud helps you do that! And finally,",
    "You’re always anxious about budgeting and costs. The implementation of cloud system management would help save on costs. Through CMS, we can track unused and underused resources. We should be able to put our capital on resources where it's required. Recurring costs certainly requires our attention.",
  ];
  return (
    <Container>
      <div className="my-10 mt-[120px]">
        <BreadCrumbList
          items={[
            {
              title: (
                <p
                  className="text-md md:text-base cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Home
                </p>
              ),
            },
            {
              title: (
                <p
                  className="text-md md:text-base cursor-pointer"
                  onClick={() => router.push("/blogs")}
                >
                  Blogs
                </p>
              ),
            },
            {
              title: (
                <p className="text-md md:text-base">
                  What is Cloud Management?
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b11.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">January 28, 2021</p>
        <p className="heading-1 md:my-3">What is Cloud Management?</p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          The evolution and advancement of technology have paved the way to make
          mankind&apos;s life hassle-free! Cloud management is a type of
          software and technology that ensures seamless, compilation, storage,
          and management of data that can be done in the blink of an eye! Cloud
          management can be used for all industries, during one&apos;s everyday
          way of life. Examples include Google Drive and iCloud for Apple
          Devices.
        </p>
        <p className="text-2xl my-4">Benefits of Cloud Management Services</p>
        <div className="w-full  md:mt-6 flex flex-col gap-4">
          {benefits?.map((item, i) => (
            <div key={i}>
              <p className="text-lg">{item?.title}</p>
              <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-2 md:mt-4 font-thin text-justify text-gray-tertiary">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-2xl my-4">Consequences when you do not have CMS</p>
        <div className="w-full mt-6 flex flex-col gap-2 md:gap-4">
          {consequences?.map((item, i) => (
            <div key={i}>
              <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
                {item}
              </p>
            </div>
          ))}
        </div>
        <p className="text-2xl my-4">
          Don&apos;t fret; ANJ America&apos;s got your back
        </p>
        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-4 font-thin text-justify text-gray-tertiary">
          ANJ America is absolutely customer-driven as we focus on building the
          infrastructure for your success. One of ANJ&apos;s key services is
          Cloud Management Services. We wish to create a world where managing
          the Cloud system is simple, without any complexity. We insist on
          transforming cloud systems for enterprises by improving performance,
          adding new capabilities and driving down costs. When you think CMS,
          you think ANJ America!
        </p>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-03"]} />
        </div>
      </div>
    </Container>
  );
}
