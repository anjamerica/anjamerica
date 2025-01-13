import React from "react";
import BannerV2 from "../../../components/common/BannerV2";

const WebDev = () => {
  const bannerContent = {
    title: "The Importance of Scalable Web Development",
    description:
      "Scalable Web Development refers to the ability of a system, network, and the process of using the website to handle the workload that would increase as time passes by.",
    background: "webimg",
  };
  const items = [
    {
      para: "Scalable Web Development refers to the ability of a system, network, and the process of using the website to handle the workload that would increase as time passes by. This is usually calculated, to help the Operations' ; team to assess, evaluate, and ensure the process does not go out of hand. It is calculated through the ratio of the increase in system performance to the rise in resources used. It must be understood that building scalable websites helps in high productivity and it would further improve the working style of the company. When we look at websites of well-established and renowned companies, most of us don't realize the kind of workload that these websites can withstand. This is why, when small businesses wish to develop a website, they must have a buffer stock and must consider the number of customers who might visit their website at once. This would help their customers to not experience any obstacles like:",
      list: [
        "The web page not loading",
        "Taking a lot of time to load",
        "Not being able to produce relevant data, due to a high number of people using the page, and much more.",
      ],
    },
    {
      para: 
        "For e-commerce websites, expansion of the product range negatively affects the page load time; updating the inventory of an e-commerce shop also becomes problematic, Changing the code structure becomes dangerous and overcomplicated. Adding a new product or service takes too much time and becomes expensive. Do all websites inevitably face such problems? ",
    },
    {
       para: "To a certain extent, yes. Websites do face complex issues during every step of the development process. It completely depends on how well they have improvised with the current trends and technology advancements.",
    },
    {
        para: "If certain rules are followed concerning the application setup, it would pave the way to:",
        list: [
            "Update the site.",
            "Improve the user experience",
            "Extend the life cycle of the services or products offered",
            "As a positive externality, increase sales and brand loyalty.",
        ]
    },
    {
        title: "How can ANJ America help?",
        para: 
            "Our team of well-experienced and tech-savvy individuals is here to make your life easier. We offer cutting-edge web development services that are customized for every business need to create engaging websites built with high-responsiveness, scalability, minimalistic design, and maximum cyber resilience.",
    },
    {
       para: "We understand that there's only one boss, and it is our customer. Fulfilling your needs and requirements is our top priority. We would like your business to prosper and succeed, preferably without any obstacles in the way. We would pave the way to ensure your customers have an optimized journey while viewing your website.",
    },
    {
       para: "Leave your challenges to us, we always have end-to-end solutions! Visit our website at https://anjamerica.com/ to schedule a consult.",
    },

  ];
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

export default WebDev;
