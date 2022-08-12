import Link from "next/link";
import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";

const subContent = [
  {
    header: "Plan To Not Procrastinate:",
    content:
      "Since school, we’ve been taught to plan the course of our day. It’s easy to come up with a timeline of what needs to be done in 24 hours. However, keeping up with the plan and not procrastinating is a whole other thing. Very often people find themselves stressed and gasping for time. Proper planning will not only help you manage your time better but will also give you the satisfaction of meeting all your deadlines. If you’re struggling with keeping up with the plan for your workday, try not to be too stringent with your deadlines. You know your pace and how many time-outs you may require. Giving yourself legitimate time to complete a task will reduce stress levels, invariably helping you balance work and life.",
  },
  {
    header: "Leave Work At Work:",
    content:
      "You should remember that your life doesn’t just revolve around work. You have family and friends who need your time, as well. Don’t fear saying “no” to duty calls post working hours. With most people working from home these days (and even if not), the line between work and home is seemingly disappearing. Employees are expected to work extra hours, attend late-night client calls, and be available to the company 24x7. Although it is the responsibility of every employee to meet deadlines and produce quality work, it is vital for employers to be empathetic and encourage them to cultivate healthy lifestyles.",
  },
  {
    header: "Voice Out Problems:",
    content:
      "You can’t just assume that your employer or family knows the problems and stress you’re facing. It is up to you to be vocal about it. If you need to leave a few minutes early every week so that you can catch-up with your Zumba classes, ask your boss. If you are unable to cook on Tuesdays because you need to attend a pre-scheduled meeting, talk to your family about it. Ultimately, it all comes down to you not having to take on any extra stress about the little things. Be upfront and explain your situation.",
  },
  {
    header: "Make Some “Me-Time”:",
    content:
      " Think about the last time you unwound with a long hot bath or cozied up with your favorite novel. Doesn’t the thought itself seem relaxing? It’s perfectly normal to want to pause your fast-paced life just for an hour or two. Sometimes, the best way to enjoy that time is to just be by yourself. You can even reignite a lost hobby or find a new one. Setting aside your me-time lets you reconnect with yourself and the things you love to do the most. Block out all other thoughts and distractions, and simply enjoy that little time you have.",
  },
  {
    header: "Live In The Moment:",
    content:
      "Most people keep thinking about the future while at work or at home. It only leads to additional worries and stress that disrupts your work-life balance. Instead, live in the present moment and live it to the fullest. Be aware of the things and the people around you and the job at hand. Let your focus be on that alone.",
  },
  {
    header: "",
    content:
      "Enjoy the moment and believe that those things that are beyond your control will fall into place at the right time",
  },
];

export default function BlogOne() {
  var count = 1;
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <Header />
      <section>
        <div>
          <div className="relative w-full h-full">
            <div className="relative">
              <div className="img-gradient">
                <img
                  alt="cover image"
                  src="/assets/landing/blog/blog_1.jpg"
                  className="w-full h-[45vh] md:h-[80vh]"
                />
              </div>
              <div className="absolute top-[30%] right-[50%] -translate-y-[19%] translate-x-[50%] md:translate-y-[50%]">
                <div className="flex flex-col text-center">
                  <span className="text-normal-landing font-semibold text-white">
                    March 2, 2021
                  </span>
                  <span className="text-anim-blog text-white text-[1.2rem] md:text-[2rem] font-semibold">
                    How to achieve Work-Life Balance
                  </span>
                </div>
              </div>
            </div>
            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    Achieving work-life balance isn’t intangible or even
                    impossible. It’s simply being able to handle the stress of
                    your work and personal life on the go. The ultimate goal is
                    that at the end of each day you go to bed with zero stress,
                    and wake up the next morning with a smile on your face and a
                    spring in your steps. Many people consider work and their
                    personal lives to be two separate entities, when in fact
                    they go hand-in-hand. Rather than trying to separate the
                    two, this blog is aimed at helping you cope with both so
                    that you can lead a stress-free and balanced life.
                  </p>
                  <div>
                    {subContent.map((data, i) => {
                      return (
                        <div className="gap-4 flex" key={i}>
                          <div className="flex flex-row my-2 ml-8 gap-1">
                            <span className="text-[#333] text-xs xl:text-base font-normal ">
                              {count++}.
                            </span>{" "}
                            &nbsp; &nbsp;
                            <div className="flex flex-col">
                              <p className="text-sm md:text-[1rem] text-[#333] break-words heading-main  font-semibold">
                                {data.header}{" "}
                              </p>
                              <span className="text-[#333] text-xs xl:text-base font-normal break-words">
                                {data.content}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-[#333] text-xs xl:text-base font-normal break-words">
                    Achieving the perfect work-life balance solely depends on
                    you knowing your priorities. Be passionate about the job you
                    do and the people in your life. Appreciate both and you’ll
                    invariably be getting the best of both worlds.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-4 mt-4 text-center w-full">
          <span className="text-[#b6b6b6] text-xl w-full self-center">
            Don&apos;t miss these stories;
          </span>
          <div className="p-5 md:p-10 grid grid-cols-1 w-full h-full gap-4 md:gap-4 xl:gap-10 md:grid-cols-3">
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                alt="cover image"
                src="/blog/blog-7.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs  xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 29, 2021
                </span>
                <p className="blog-title">
                  Software and IT Industry In The USA
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-normal break-words h-fit">
                  The business intelligence (BI) software industry is rapidly
                  becoming one of the leading software categories in terms of
                  market size.
                </p>
                <Link
                  href="/blogs/software-and-it-industry-in-the-usa"
                  passHref
                >
                  <span className="text-[#5d3eff] text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                alt="cover image"
                src="/assets/landing/blog/blog_7.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs  xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 12, 2021
                </span>
                <p className="blog-title">
                  5 Ways To Learn New Skills To Boost Your CV
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-normal break-words h-fit">
                  When looking for a career change or wanting to get back into
                  the professional space after a break, it is highly essential
                  to have your CV updated with the right skills.
                </p>
                <Link
                  href="/blogs/5-ways-to-learn-new-skills-to-boost-your-cv"
                  passHref
                >
                  <span className="text-[#5d3eff] text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                alt="cover image"
                src="/blog/blog-8.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 5, 2021
                </span>
                <p className="blog-title">Networking At Your Workplace</p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-normal break-words h-fit">
                  Networking at your workplace isn’t far-fetched. After all
                  “it’s not what you know, it’s whom you know.” How many times
                  have you heard that being said?
                </p>
                <Link href="/blogs/networking-at-your-workplace" passHref>
                  <span className="text-[#5d3eff] text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
