import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG07() {
  const router = useRouter();

  const points = [
    {
      title: "Content matters:",
      description:
        "There is no need to add loads of content to your website. Just make sure that your content talks about your brand and what it’s trying to convey to visitors. Make sure that all the mandatory details are available, and think and decide what elements should show on the mobile website.",
    },
    {
      title: "Page speed:",
      description:
        "Did you know that 73% of people abandon a slow loading website? If you don’t have a fast website, people will bounce faster than you can say “conversion”. Most of us do not like to visit a website that takes a lot of time to load. If your mobile website is not responsive, it might take a while for it to load properly. As a result, visitors to your website will be fed up with waiting and will leave the page. You cannot afford to lose visitors because of this. That’s why you need to optimize the page speed and increase conversions.",
    },
    {
      title: "Do the statistics:",
      description:
        "Visualize your website visitors by using various heat map tools available in the market. It helps you analyze user behavior and target the right people. The right heat map tool finds out where your users are browsing/clicking and their complete journey. This ensures that you know what exactly your user wants and do what’s needed to address the pain points and optimize your mobile website efficiently.",
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
                  Is Your Website Ready For A Mobile-First World?
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b7.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">February 22, 2021</p>
        <p className="heading-1 md:my-3">
          Is Your Website Ready For A Mobile-First World?
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          With the extraordinary increase and usage of smart devices like mobile
          phones and tablets, Google has decided to do an innovative change in
          the way its search engines work. Based on the quality and
          responsiveness of a website’s mobile version, Google will rank it high
          or low. So, the way your mobile website works will determine your
          search engine ranking.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Mobile optimization is a crucial factor for small and large
          enterprises and businesses. If your company’s website doesn’t have an
          optimized mobile responsive website then it’s time to make it ideal
          for a mobile-first world.
        </p>

        <div className="w-full mt-6 flex flex-col gap-4">
          <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
            Check out these tips below to make your website mobile-responsive.
          </p>
          {points?.map((item, i) => (
            <div key={i}>
              <p className="text-2xl">{item?.title}</p>
              <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-4 font-thin text-justify text-gray-tertiary">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-2xl my-4">Think Mobile-First to act Mobile-First</p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Businesses will have to shift to mobile-first thinking in everything
          they do—design, development, UI, UX, and then worry about desktop
          viewing later. If there is no change in mindset, you will still
          persist in designing and developing for desktop viewing and then think
          about converting it to mobile. Just because a website is responsive,
          it doesn’t mean it is optimized for mobile. Start today and make the
          decision to leave your desktop behind. Make a mark digitally by basing
          all your discussions around the mobile experience. Here is an
          opportunity to embrace the mobile-first world that your competitors
          are racing into. Driving organizational change is not easy, but it’s
          totally worth it.
        </p>
        <p className="text-2xl my-4">Get Scalable Websites with ANJ America</p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          ANJ America can help your company build a mobile-responsive website.
          We offer cutting-edge web development services that are customized for
          every business need to create engaging websites built with
          high-responsiveness, scalability, minimalistic design, and aximum
          cyber resilience.
        </p>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-03"]} />
        </div>
      </div>
    </Container>
  );
}
