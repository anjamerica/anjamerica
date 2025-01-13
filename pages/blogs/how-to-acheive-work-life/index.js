import React from "react";
import BannerV2 from "../../../components/common/BannerV2";

export default function Index() {
  const bannerContent = {
    title: "How to achieve Work-Life Balance",
    description:
      "Achieving work-life balance isn’t intangible or even impossible. It’s simply being able to handle the stress of your work and personal life on the go. The ultimate goal is that at the end of each day you go to bed with zero stress,",
    background: "work-life",
  };

  const items = [
    {
      para: "Achieving work-life balance isn’t intangible or even impossible. It’s simply being able to handle the stress of your work and personal life on the go. The ultimate goal is that at the end of each day you go to bed with zero stress, and wake up the next morning with a smile on your face and a spring in your steps. Many people consider work and their personal lives to be two separate entities, when in fact they go hand-in-hand. Rather than trying to separate the two, this blog is aimed at helping you cope with both so that you can lead a stress-free and balanced life.",
    },
    {
      title: "Plan To Not Procrastinate",
      para: "Since school, we’ve been taught to plan the course of our day. It’s easy to come up with a timeline of what needs to be done in 24 hours. However, keeping up with the plan and not procrastinating is a whole other thing. Very often people find themselves stressed and gasping for time. Proper planning will not only help you manage your time better but will also give you the satisfaction of meeting all your deadlines. If you’re struggling with keeping up with the plan for your workday, try not to be too stringent with your deadlines. You know your pace and how many time-outs you may require. Giving yourself legitimate time to complete a task will reduce stress levels, invariably helping you balance work and life.",
    },
    {
      title: "Leave Work At Work",
      para: "You should remember that your life doesn’t just revolve around work. You have family and friends who need your time, as well. Don’t fear saying “no” to duty calls post working hours. With most people working from home these days (and even if not), the line between work and home is seemingly disappearing. Employees are expected to work extra hours, attend late-night client calls, and be available to the company 24x7. Although it is the responsibility of every employee to meet deadlines and produce quality work, it is vital for employers to be empathetic and encourage them to cultivate healthy lifestyles.",
    },
    {
      title: "Voice Out Problems:",
      para: "You can’t just assume that your employer or family knows the problems and stress you’re facing. It is up to you to be vocal about it. If you need to leave a few minutes early every week so that you can catch-up with your Zumba classes, ask your boss. If you are unable to cook on Tuesdays because you need to attend a pre-scheduled meeting, talk to your family about it. Ultimately, it all comes down to you not having to take on any extra stress about the little things. Be upfront and explain your situation.",
    },
    {
      title: "Make Some “Me-Time” ",
      para: "Think about the last time you unwound with a long hot bath or cozied up with your favorite novel. Doesn’t the thought itself seem relaxing? It’s perfectly normal to want to pause your fast-paced life just for an hour or two. Sometimes, the best way to enjoy that time is to just be by yourself. You can even reignite a lost hobby or find a new one. Setting aside your me-time lets you reconnect with yourself and the things you love to do the most. Block out all other thoughts and distractions, and simply enjoy that little time you have.",
    },
    {
      title: "Live In The Moment: ",
      para: "Most people keep thinking about the future while at work or at home. It only leads to additional worries and stress that disrupts your work-life balance. Instead, live in the present moment and live it to the fullest. Be aware of the things and the people around you and the job at hand. Let your focus be on that alone.",
    },
    {
      title:
        "Enjoy the moment and believe that those things that are beyond your control will fall into place at the right time",
      para: "Most people keep thinking about the future while at work or at home. It only leads to additional worries and stress that disrupts your work-life balance. Instead, live in the present moment and live it to the fullest. Be aware of the things and the people around you and the job at hand. Let your focus be on that alone.",
    },
    {
      title:
        "Enjoy the moment and believe that those things that are beyond your control will fall into place at the right time",
    },
    {
      para: "Achieving the perfect work-life balance solely depends on you knowing your priorities. Be passionate about the job you do and the people in your life. Appreciate both and you’ll invariably be getting the best of both worlds.",
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
}
