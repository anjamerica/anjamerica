import React from "react";
import { GoDotFill } from "react-icons/go";

import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";
import Link from "next/link";

export default function BLG09() {
  const router = useRouter();

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
                  The Importance of Scalable Web Development
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b9.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">February 1, 2021</p>
        <p className="heading-1 md:my-3">
          The Importance of Scalable Web Development
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Scalable Web Development refers to the ability of a system, network,
          and the process of using the website to handle the workload that would
          increase as time passes by.
        </p>
        <p className="mt-3 text-md md:text-lg leading-[25px] md:leading-[40px] font-thin text-justify text-gray-tertiary">
          This is usually calculated, to help the Operations&apos; ; team to
          assess, evaluate, and ensure the process does not go out of hand. It
          is calculated through the ratio of the increase in system performance
          to the rise in resources used.
        </p>
        <p className="mt-3 text-md md:text-lg leading-[25px] md:leading-[40px] font-thin text-justify text-gray-tertiary">
          It must be understood that building scalable websites helps in high
          productivity and it would further improve the working style of the
          company. When we look at websites of well-established and renowned
          companies, most of us don&apos;t realize the kind of workload that
          these websites can withstand.
        </p>
        <p className="mt-3 text-md md:text-lg leading-[25px] md:leading-[40px] font-thin text-justify text-gray-tertiary">
          This is why, when small businesses wish to develop a website, they
          must have a buffer stock and must consider the number of customers who
          might visit their website at once. This would help their customers to
          not experience any obstacles like:
        </p>

        <p className="text-md md:text-lg pl-3 flex my-3 items-start gap-3">
          <GoDotFill className="w-3 h-3 mt-2" /> The web page not loading
        </p>
        <p className="text-md md:text-lg pl-3 flex my-3 items-start gap-3">
          <GoDotFill className="w-3 h-3 mt-2" /> Taking a lot of time to load
        </p>
        <p className="text-md md:text-lg pl-3 flex my-3 items-start gap-3">
          <GoDotFill className="w-3 h-3 mt-2" /> Not being able to produce
          relevant data, due to a high number of people using the page, and much
          more.
        </p>
        <p className="mt-3 text-md md:text-lg leading-[25px] md:leading-[40px] font-thin text-justify text-gray-tertiary">
          For e-commerce websites, expansion of the product range negatively
          affects the page load time; updating the inventory of an e-commerce
          shop also becomes problematic, Changing the code structure becomes
          dangerous and overcomplicated. Adding a new product or service takes
          too much time and becomes expensive. Do all websites inevitably face
          such problems?
        </p>
        <p className="mt-3 text-md md:text-lg leading-[25px] md:leading-[40px] font-thin text-justify text-gray-tertiary">
          To a certain extent, yes. Websites do face complex issues during every
          step of the development process. It completely depends on how well
          they have improvised with the current trends and technology
          advancements.
        </p>
        <p className="mt-3 text-md md:text-lg leading-[25px] md:leading-[40px] font-thin text-justify text-gray-tertiary">
          If certain rules are followed concerning the application setup, it
          would pave the way to:
        </p>

        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] pl-3 flex my-3 items-start gap-3">
          <GoDotFill className="w-3 h-3 mt-2" /> Update the site.
        </p>
        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] pl-3 flex my-3 items-start gap-3">
          <GoDotFill className="w-3 h-3 mt-2" /> Improve the user experience
        </p>
        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] pl-3 flex my-3 items-start gap-3">
          <GoDotFill className="w-3 h-3 mt-2" /> Extend the life cycle of the
          services or products offered
        </p>

        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] pl-3 flex my-3 items-start gap-3">
          <GoDotFill className="w-3 h-3 mt-2" /> As a positive externality,
          increase sales and brand loyalty.
        </p>

        <p className="text-2xl mt-6">How can ANJ America help?</p>

        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-3 font-thin text-justify text-gray-tertiary">
          Our team of well-experienced and tech-savvy individuals is here to
          make your life easier. We offer cutting-edge web development services
          that are customized for every business need to create engaging
          websites built with high-responsiveness, scalability, minimalistic
          design, and maximum cyber resilience.
        </p>
        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-3 font-thin text-justify text-gray-tertiary">
          We understand that there&apos;s only one boss, and it is our customer.
          Fulfilling your needs and requirements is our top priority. We would
          like your business to prosper and succeed, preferably without any
          obstacles in the way. We would pave the way to ensure your customers
          have an optimized journey while viewing your website.
        </p>
        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-3 font-thin text-justify text-gray-tertiary">
          Leave your challenges to us, we always have end-to-end solutions!
          Visit our website at <Link href="/"> https://anjamerica.com/</Link> to
          schedule a consult.
        </p>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-03"]} />
        </div>
      </div>
    </Container>
  );
}
