import React from "react";

export default function Index() {
  const items = [
    {
      title: "No Guarantee of Accuracy",
      para: "While we strive to provide accurate, up-to-date information, we make no representations or warranties regarding the completeness, reliability, or accuracy of the content on our website. Any reliance you place on such information is at your own risk.",
    },
    {
      title: "External Links",
      para: "Our website may contain links to third-party websites. We do not control and are not responsible for the content, policies, or practices of these third-party sites. Accessing them is at your own discretion and risk.",
    },
    {
      title: "Limitation of Liability",
      para: "ANJ America is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website, services, or any third-party links. This includes, but is not limited to, data loss, service interruptions, or personal harm.",
    },
    {
      title: "No Endorsement",
      para: "The inclusion of any third-party services or content on our website does not imply endorsement or recommendation by ANJ America. We are not responsible for any transactions or agreements made with third parties.",
    },
    {
      title: "Changes to Content and Services",
      para: "We reserve the right to modify or remove content and services on our website without notice. We are not responsible for any interruptions, errors, or downtime that may occur on our platform.",
    },
  ];
  return (
    <div className="w-full -mt-[62px]">
      <div className="w-full flex flex-col items-center rounded-[20px] p-5 pt-[145px] bg-white">
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          className="text-2xl md:text-[60px] text-center font-bold"
        >
          Disclaimer Policy
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="w-full text-lg md:text-[22px] mt-6 md:mt-10 text-center leading-[30px] opacity-80 font-medium max-w-[1335px]"
        >
          The information provided on the ANJ America website
          (www.anjamerica.com) and through our services is for general
          informational purposes only. By accessing or using our website or
          services, you agree to the terms outlined in this Disclaimer Policy.
        </p>
      </div>
      <div className="rounded-[20px] flex flex-col gap-3 p-5 mt-5 bg-white">
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
              <p className="text-gray-dark text-justify md:text-start">
                {item?.para}
              </p>
            </div>
          </div>
        ))}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="mt-3 opacity-80 leading-[30px] text-justify md:text-start"
        >
          By using our website and services, you accept the terms of this
          Disclaimer Policy. For any questions or concerns, please contact us
          at:&nbsp;
          <a href="mailto:info@anjamerica.com" className="text-[#3561E1]">
            info@anjamerica.com
          </a>
          .
        </div>
      </div>
    </div>
  );
}
