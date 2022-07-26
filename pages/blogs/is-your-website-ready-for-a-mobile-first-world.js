import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";
import Link from "next/link";

const subContent = [
  {
    header: "Content matters:",
    content:
      "There is no need to add loads of content to your website. Just make sure that your content talks about your brand and what it’s trying to convey to visitors. Make sure that all the mandatory details are available, and think and decide what elements should show on the mobile website.",
  },
  {
    header: "Page speed:",
    content:
      "Did you know that 73% of people abandon a slow loading website? If you don’t have a fast website, people will bounce faster than you can say “conversion”. Most of us do not like to visit a website that takes a lot of time to load. If your mobile website is not responsive, it might take a while for it to load properly. As a result, visitors to your website will be fed up with waiting and will leave the page. You cannot afford to lose visitors because of this. That’s why you need to optimize the page speed and increase conversions.",
  },
  {
    header: "Do the statistics: ",
    content:
      "Visualize your website visitors by using various heat map tools available in the market. It helps you analyze user behavior and target the right people. The right heat map tool finds out where your users are browsing/clicking and their complete journey. This ensures that you know what exactly your user wants and do what’s needed to address the pain points and optimize your mobile website efficiently.  ",
  },
];

const paragraph = [
  {
    header: "Think Mobile-First to act Mobile-First",
    content:
      "Businesses will have to shift to mobile-first thinking in everything they do—design, development, UI, UX, and then worry about desktop viewing later. If there is no change in mindset, you will still persist in designing and developing for desktop viewing and then think about converting it to mobile. Just because a website is responsive, it doesn’t mean it is optimized for mobile. Start today and make the decision to leave your desktop behind. Make a mark digitally by basing all your discussions around the mobile experience. Here is an opportunity to embrace the mobile-first world that your competitors are racing into. Driving organizational change is not easy, but it’s totally worth it.",
  },
  {
    header: "Get Scalable Websites with ANJ America",
    content:
      "ANJ America can help your company build a mobile-responsive website. We offer cutting-edge web development services that are customized for every business need to create engaging websites built with high-responsiveness, scalability, minimalistic design, and aximum cyber resilience.",
  },
];

export default function BlogTwo() {
  var count = 1;
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <section>
        <div>
          <div className="relative w-full h-full lg:-mt-[80px]">
           

            <div
              style={{
                background: `url(${"/assets/landing/blog/blog_2.jpg"})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
              className="w-full h-[45vh] md:min-h-[541px] object-cover"
            >
              <div className="img-gradient"></div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col text-center justify-center md:w-[80%] xl:w-[70%]">
                  <span className="text-date-blog">February 22, 2021</span>
                  <span className="heading-blog-content w-full max-w-[960px]">
                  Is Your Website Ready For A Mobile-First World?
                  </span>
                </div>
              </div>
            </div>

            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="blog-paragraph">
                    With the extraordinary increase and usage of smart devices
                    like mobile phones and tablets, Google has decided to do an
                    innovative change in the way its search engines work. Based
                    on the quality and responsiveness of a website’s mobile
                    version, Google will rank it high or low. So, the way your
                    mobile website works will determine your search engine
                    ranking.
                    <br />
                    <br />
                    Mobile optimization is a crucial factor for small and large
                    enterprises and businesses. If your company’s website
                    doesn’t have an optimized mobile responsive website then
                    it’s time to make it ideal for a mobile-first world.
                  </p>
                  <p className="blog-subheading">
                    Check out these tips below to make your website
                    mobile-responsive.
                  </p>
                  <div>
                    {subContent.map((data, i) => {
                      return (
                        <div className="gap-4 flex" key={i}>
                          <div className="flex flex-row my-2 ml-8 gap-1">
                            <span className="blog-paragraph">
                              {count++}.
                            </span>{" "}
                            &nbsp; &nbsp;
                            <div className="flex flex-col">
                              <p className="blog-subheading">
                                {data.header}
                              </p>
                              <span className="blog-paragraph">
                                {data.content}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {paragraph.map((item, i) => {
                      return (
                        <div className="flex flex-col gap-2 my-4" key={i}>
                          <p className="blog-paragraph">
                            {item.header}
                          </p>
                          <span className="blog-paragraph">
                            {item.content}
                          </span>
                        </div>
                      );
                    })}
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
            Don&apos;t miss these stories&#x3A;
          </span>
          <div className="p-5 md:p-10 grid grid-cols-1 w-full h-full gap-4 md:gap-4 xl:gap-10 md:grid-cols-3">
            <div className="blog-card">
              <img
                alt="cover image"
                src="/blog/blog-7.jpg"
                className="w-full rounded-t-xl h-[40%] min-h-[230px]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-blog-date">
                  April 29, 2021
                </span>
                <p className="blog-title">
                  Software and IT Industry In The USA
                </p>
                <p className="text-blog-content">
                  The business intelligence (BI) software industry is rapidly
                  becoming one of the leading software categories in terms of
                  market size.
                </p>
                <Link
                  href="/blogs/software-and-it-industry-in-the-usa"
                  passHref
                >
                  <span className="read-more">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="blog-card">
              <img
                alt="cover image"
                src="/assets/landing/blog/blog_7.jpg"
                className="w-full rounded-t-xl h-[40%] min-h-[230px]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-blog-date">
                  April 12, 2021
                </span>
                <p className="blog-title">
                  5 Ways To Learn New Skills To Boost Your CV
                </p>
                <p className="text-blog-content">
                  When looking for a career change or wanting to get back into
                  the professional space after a break, it is highly essential
                  to have your CV updated with the right skills.
                </p>
                <Link
                  href="/blogs/5-ways-to-learn-new-skills-to-boost-your-cv"
                  passHref
                >
                  <span className="read-more">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="blog-card">
              <img
                alt="cover image"
                src="/blog/blog-8.jpg"
                className="w-full rounded-t-xl h-[40%] min-h-[230px]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 5, 2021
                </span>
                <p className="blog-title">Networking At Your Workplace</p>
                <p className="text-blog-content">
                  Networking at your workplace isn’t far-fetched. After all
                  “it’s not what you know, it’s whom you know.” How many times
                  have you heard that being said?
                </p>
                <Link href="/blogs/networking-at-your-workplace" passHref>
                  <span className="read-more">
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
