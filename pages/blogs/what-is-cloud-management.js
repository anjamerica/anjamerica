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
      <Header />
      <section>
        <div>
          <div className="relative w-full h-full">
            <div className="relative">
              <div className="img-gradient">
                <img
                  src="/assets/landing/blog/blog_6.jpg"
                  className="w-full h-[45vh] md:h-[80vh] object-cover"
                />
              </div>
              <div className="absolute top-[30%] right-[50%] -translate-y-[19%] translate-x-[50%] md:translate-y-[50%]">
                <div className="flex flex-col text-center">
                  <span className="text-normal-landing font-semibold text-white">
                    January 28, 2021
                  </span>
                  <span className="text-anim-blog text-white text-[1.2rem] md:text-[2rem] font-semibold">
                    What is Cloud Management?
                  </span>
                </div>
              </div>
            </div>
            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-[1rem] text-[#333] break-words  font-semibold">
                    What is Cloud Management?
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-light break-words">
                    The evolution and advancement of technology have paved the
                    way to make mankind&apos;s life hassle-free! Cloud
                    management is a type of software and technology that ensures
                    seamless, compilation, storage, and management of data that
                    can be done in the blink of an eye! Cloud management can be
                    used for all industries, during one&apos;s everyday way of
                    life. Examples include Google Drive and iCloud for Apple
                    Devices.
                  </p>
                  <p className="text-sm md:text-[1rem] text-[#333] break-words  font-semibold">
                    Benefits of Cloud Management Services
                  </p>

                  <div>
                    {subContent.map((data, i) => {
                      return (
                        <div className="gap-4 flex" key={i}>
                          <div className="flex flex-row my-2 ml-8 gap-1">
                            <span className="text-[#333] text-xs xl:text-base font-light ">
                              {count++}.
                            </span>{" "}
                            &nbsp; &nbsp;
                            <p className="text-sm md:text-[1rem] text-[#333] break-words  font-semibold">
                              {data.header}{" "}
                              <span className="text-[#333] text-xs xl:text-base font-light break-words">
                                {data.content}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-sm md:text-[1rem] text-[#333] break-words  font-semibold">
                    Consequences when you do not have CMS
                  </p>
                  <div className="ml-12">
                    <ol className="list-decimal">
                      <li className="my-1 text-[#333] text-xs xl:text-base font-light break-words">
                        Your team is absolutely sick of manual labor when you
                        think about it! One of the keys to success is,
                        “Don&apos;t work harder, work smarter.”
                      </li>
                      <li className="px-[10px] py-[5px] text-[#333] text-xs xl:text-base font-light break-words">
                        Not wearing a bulletproof vest and going into battle is
                        an analogy to a firm not having a cloud management
                        system.
                      </li>
                      <li className="px-[10px] py-[5px] text-[#333] text-xs xl:text-base font-light break-words">
                        Think about it! Your infrastructure is not immune to
                        disasters pertaining to the advanced and developed
                        world.
                      </li>
                      <li className="px-[10px] py-[5px] text-[#333] text-xs xl:text-base font-light break-words">
                        This could be one of those instances when departments
                        are not transparent. This would lead to internal
                        challenges and issues, which can be solved if everyone
                        is just in sync. The cloud helps you do that! And
                        finally,
                      </li>
                      <li className="px-[10px] py-[5px] text-[#333] text-xs xl:text-base font-light break-words">
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
                    <p className="text-[1rem] text-[#333] break-words  font-semibold">
                      Don&apos;t fret&semi; ANJ America&apos;s got your back
                    </p>
                    <span className="text-[#333] text-xs xl:text-base font-light break-words">
                      ANJ America is absolutely customer-driven as we focus on
                      building the infrastructure for your success. One of ANJ’s
                      key services is Cloud Management Services. We wish to
                      create a world where managing the Cloud system is simple,
                      without any complexity. We insist on transforming cloud
                      systems for enterprises by improving performance, adding
                      new capabilities and driving down costs. When you think
                      CMS, you think ANJ America!
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
            Don&apos;t miss these stories;
          </span>
          <div className="p-5 md:p-10 grid grid-cols-1 w-full h-full gap-4 md:gap-4 xl:gap-10 md:grid-cols-3">
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                src="/blog/blog-7.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs  xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 29, 2021
                </span>
                <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
                  Software and IT Industry In The USA
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
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
                src="/assets/landing/blog/blog_7.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs  xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 12, 2021
                </span>
                <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
                  5 Ways To Learn New Skills To Boost Your CV
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
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
                src="/blog/blog-8.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 5, 2021
                </span>
                <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
                  Networking At Your Workplace
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
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
