import React from "react";
import BannerV2 from "../../../components/common/BannerV2";

export default function Index() {
  const bannerContent = {
    title: "Is Your Website Ready For A Mobile-First World?",
    description:
      "With the extraordinary increase and usage of smart devices like mobile phones and tablets,Google has decblogIded to do an innovative change in the way its search engines work.",
    background: "web-ready",
  };

  const items = [
    {
      para: "With the extraordinary increase and usage of smart devices like mobile phones and tablets, Google has decided to do an innovative change in the way its search engines work. Based on the quality and responsiveness of a website’s mobile version, Google will rank it high or low. So, the way your mobile website works will determine your search engine ranking. Mobile optimization is a crucial factor for small and large enterprises and businesses. If your company’s website doesn’t have an optimized mobile responsive website then it’s time to make it ideal for a mobile-first world.",
    },
    {
      title: "Content matters:",
      para: "There is no need to add loads of content to your website. Just make sure that your content talks about your brand and what it’s trying to convey to visitors. Make sure that all the mandatory details are available, and think and decide what elements should show on the mobile website..",
    },
    {
      title: "Page speed",
      para: "Did you know that 73% of people abandon a slow loading website? If you don’t have a fast website, people will bounce faster than you can say “conversion”. Most of us do not like to visit a website that takes a lot of time to load. If your mobile website is not responsive, it might take a while for it to load properly. As a result, visitors to your website will be fed up with waiting and will leave the page. You cannot afford to lose visitors because of this. That’s why you need to optimize the page speed and increase conversions",
    },
    {
      title: "Do the statistics",
      para: "Visualize your website visitors by using various heat map tools available in the market. It helps you analyze user behavior and target the right people. The right heat map tool finds out where your users are browsing/clicking and their complete journey. This ensures that you know what exactly your user wants and do what’s needed to address the pain points and optimize your mobile website efficiently.  ",
    },
    {
      title: "Get Scalabe Websites with ANJ America",
      para: "Businesses will have to shift to mobile-first thinking in everything they do—design, development, UI, UX, and then worry about desktop viewing later. If there is no change in mindset, you will still persist in designing and developing for desktop viewing and then think about converting it to mobile. Just because a website is responsive, it doesn’t mean it is optimized for mobile. Start today and make the decision to leave your desktop behind. Make a mark digitally by basing all your discussions around the mobile experience. Here is an opportunity to embrace the mobile-first world that your competitors are racing into. Driving organizational change is not easy, but it’s totally worth it.",
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
