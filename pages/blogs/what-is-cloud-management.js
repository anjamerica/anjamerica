import Link from "next/link";
import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";

const subContent = [
  {
    header: "Be provided with a simple view - ",
    content:
      "The cloud environment, when managed efficiently, enables IT and business leaders to get a comprehensive view of IT assets, including cloud services and software. This, in turn, helps organizations use these tools more effectively. It would be easy for staff members, accountants, the operations team, etc. to track down accurate data when required. They wouldn't need to search on their hard drives or “click” various folders. This would lead to saving time in an office environment. Timely delivery to their customers can be accomplished with a cloud management system. In a cloud management system, people do not need to keep exchanging data back and forth, with the software's implementation—people can edit or view documents (depending on the option chosen).",
  },
  {
    header: "Minimize the risk of data loss - ",
    content:
      "Why don't we think of this scenario: an instance where an individual is taking on his/her work in an energetic manner. Due to some virus or malware that were downloaded, the device tends to shut down on its own. There is a possibility that a segment of the data can be lost. This would lead to unnecessary havoc in one's life. Cloud management ensures that when a person is in the process of executing their work, it is always saved, automatically. Effective cloud management practices promote security and reduce the number of vulnerabilities that could be exposed to malicious outsiders. This would also ensure that the data is properly secured and the operational continuity is maintained.",
  },
  {
    header: "Cut down on wasted IT spending - ",
    content:
      "Assessments have been made, and various sources have said that the portion of cloud spending wasted through inefficiency is at 35 percent or higher. When we think about it, there is an opportunity here! We can cause a positive impact, without having an adverse effect. Let&#39;s say that in an organization that wastes 35 percent of an annual $1 million in cloud spending through inefficiency, the same organization could implement cloud management systems that could nearly save $200,000 in savings every year! Effective cloud management helps organizations get rid of unneeded cloud expenses and optimize cloud resources, resulting in better results for less money.",
  },
];

export default function BlogSix() {
  var count = 1;
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <section>
        <div>
          <div className="relative w-full h-full lg:-mt-[80px]">
            <div
              style={{
                background: `url(${"/assets/landing/blog/blog_6.jpg"})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
              className="w-full h-[45vh] md:min-h-[541px] object-cover"
            >
              <div className="img-gradient"></div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col text-center justify-center md:w-[80%] xl:w-[70%]">
                  <span className="text-date-blog"> January 28, 2021</span>
                  <span className="heading-blog-content w-full max-w-[960px]">
                    What is Cloud Management?
                  </span>
                </div>
              </div>
            </div>

            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="blog-subheading">What is Cloud Management?</p>
                  <p className="blog-paragraph">
                    The evolution and advancement of technology have paved the
                    way to make mankind&apos;s life hassle-free! Cloud
                    management is a type of software and technology that ensures
                    seamless, compilation, storage, and management of data that
                    can be done in the blink of an eye! Cloud management can be
                    used for all industries, during one&apos;s everyday way of
                    life. Examples include Google Drive and iCloud for Apple
                    Devices.
                  </p>
                  <p className="blog-subheading">
                    Benefits of Cloud Management Services
                  </p>

                  <div>
                    {subContent.map((data, i) => {
                      return (
                        <div className="gap-4 flex" key={i}>
                          <div className="flex flex-row my-2 sm:ml-8 gap-1">
                            <span className="blog-paragraph">{count++}.</span>{" "}
                            &nbsp; &nbsp;
                            <p>
                              <span className="blog-subheading">
                                {data.header}{" "}
                              </span>

                              <span className="blog-paragraph">
                                {data.content}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="blog-subheading">
                    Consequences when you do not have CMS
                  </p>
                  <div className="ml-12">
                    <ol className="list-decimal">
                      <li className="my-1 blog-paragraph">
                        Your team is absolutely sick of manual labor when you
                        think about it! One of the keys to success is,
                        “Don&apos;t work harder, work smarter.”
                      </li>
                      <li className="px-[10px] py-[5px] blog-paragraph">
                        Not wearing a bulletproof vest and going into battle is
                        an analogy to a firm not having a cloud management
                        system.
                      </li>
                      <li className="px-[10px] py-[5px] blog-paragraph">
                        Think about it! Your infrastructure is not immune to
                        disasters pertaining to the advanced and developed
                        world.
                      </li>
                      <li className="px-[10px] py-[5px] blog-paragraph">
                        This could be one of those instances when departments
                        are not transparent. This would lead to internal
                        challenges and issues, which can be solved if everyone
                        is just in sync. The cloud helps you do that! And
                        finally,
                      </li>
                      <li className="px-[10px] py-[5px] blog-paragraph">
                        You’re always anxious about budgeting and costs. The
                        implementation of cloud system management would help
                        save on costs. Through CMS, we can track unused and
                        underused resources. We should be able to put our
                        capital on resources where it&#39;s required. Recurring
                        costs certainly requires our attention.
                      </li>
                    </ol>
                  </div>
                  <div className="flex flex-col gap-2 my-4">
                    <p className="text-[1rem] heading-main text-[#333] break-words  font-semibold">
                      Don&apos;t fret; Future Forward&apos;s got your back
                    </p>
                    <span className="blog-paragraph">
                      Future Forward is absolutely customer-driven as we focus on
                      building the infrastructure for your success. One of Future Forward’s
                      key services is Cloud Management Services. We wish to
                      create a world where managing the Cloud system is simple,
                      without any complexity. We insist on transforming cloud
                      systems for enterprises by improving performance, adding
                      new capabilities and driving down costs. When you think
                      CMS, you think Future Forward!
                    </span>
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
