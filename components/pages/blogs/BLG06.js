import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG06() {
  const router = useRouter();

  const points = [
    {
      title: "Plan To Not Procrastinate:",
      description:
        "Since school, we’ve been taught to plan the course of our day. It’s easy to come up with a timeline of what needs to be done in 24 hours. However, keeping up with the plan and not procrastinating is a whole other thing. Very often people find themselves stressed and gasping for time. Proper planning will not only help you manage your time better but will also give you the satisfaction of meeting all your deadlines. If you’re struggling with keeping up with the plan for your workday, try not to be too stringent with your deadlines. You know your pace and how many time-outs you may require. Giving yourself legitimate time to complete a task will reduce stress levels, invariably helping you balance work and life.",
    },
    {
      title: "Leave Work At Work:",
      description:
        "You should remember that your life doesn’t just revolve around work. You have family and friends who need your time, as well. Don’t fear saying “no” to duty calls post working hours. With most people working from home these days (and even if not), the line between work and home is seemingly disappearing. Employees are expected to work extra hours, attend late-night client calls, and be available to the company 24x7. Although it is the responsibility of every employee to meet deadlines and produce quality work, it is vital for employers to be empathetic and encourage them to cultivate healthy lifestyles.",
    },
    {
      title: "Voice Out Problems:",
      description:
        "You can’t just assume that your employer or family knows the problems and stress you’re facing. It is up to you to be vocal about it. If you need to leave a few minutes early every week so that you can catch-up with your Zumba classes, ask your boss. If you are unable to cook on Tuesdays because you need to attend a pre-scheduled meeting, talk to your family about it. Ultimately, it all comes down to you not having to take on any extra stress about the little things. Be upfront and explain your situation.",
    },
    {
      title: "Make Some “Me-Time”:",
      description:
        "Think about the last time you unwound with a long hot bath or cozied up with your favorite novel. Doesn’t the thought itself seem relaxing? It’s perfectly normal to want to pause your fast-paced life just for an hour or two. Sometimes, the best way to enjoy that time is to just be by yourself. You can even reignite a lost hobby or find a new one. Setting aside your me-time lets you reconnect with yourself and the things you love to do the most. Block out all other thoughts and distractions, and simply enjoy that little time you have.",
    },
    {
      title: "Live In The Moment:",
      description:
        "Most people keep thinking about the future while at work or at home. It only leads to additional worries and stress that disrupts your work-life balance. Instead, live in the present moment and live it to the fullest. Be aware of the things and the people around you and the job at hand. Let your focus be on that alone.",
    },
    {
      description:
        "Enjoy the moment and believe that those things that are beyond your control will fall into place at the right time",
    },
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
                  How to achieve Work-Life Balance
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b6.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">March 2, 2021</p>
        <p className="heading-1 md:my-3">How to achieve Work-Life Balance</p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Achieving work-life balance isn’t intangible or even impossible. It’s
          simply being able to handle the stress of your work and personal life
          on the go. The ultimate goal is that at the end of each day you go to
          bed with zero stress, and wake up the next morning with a smile on
          your face and a spring in your steps. Many people consider work and
          their personal lives to be two separate entities, when in fact they go
          hand-in-hand. Rather than trying to separate the two, this blog is
          aimed at helping you cope with both so that you can lead a stress-free
          and balanced life.
        </p>
        <div className="w-full mt-6 flex flex-col gap-4">
          {points?.map((item, i) => (
            <div key={i}>
              {item?.title && <p className="text-2xl">{item?.title}</p>}
              <p
                className={` ${
                  item?.title && " mt-4"
                } font-thin text-justify text-md md:text-lg leading-[25px] md:leading-[40px]] text-gray-tertiary`}
              >
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-5 font-thin text-justify text-gray-tertiary">
          Achieving the perfect work-life balance solely depends on you knowing
          your priorities. Be passionate about the job you do and the people in
          your life. Appreciate both and you’ll invariably be getting the best
          of both worlds.
        </p>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-03"]} />
        </div>
      </div>
    </Container>
  );
}
