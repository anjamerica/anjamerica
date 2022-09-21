import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";
import Link from "next/link";

const subContent = [
  {
    header: "Sport a smile!  ",
    content:
      "As obvious as it is; by being friendly you can connect better with people, but it remains a rigorous task for many. It’s easy to pass every day at work by just minding your own business. Colleagues will simply remain colleagues.Don’t walk around with a stern face. Instead, try to open up a little more. Smile when you meet someone in the hallways or the elevator. Say “hi” when you bump into someone you’ve never spoken to yet in the office. Start discussing their job and tell them about yours. That’s a start!",
  },
  {
    header: "Coffee breaks and lunch is for conversations! ",
    content:
      "If you prefer to drive home for lunch or rather sit alone with a book or a podcast, it’s perfectly fine. It’s your time and you can spend it the way you want to. However, if you do go to the cafeteria grab your chance to socialize. Capitalize on coffee breaks in the break room as well. Small talk over coffee is proven to ignite a spark! Here’s a tip: If you find someone buried in a book or having earphones on, they’re probably not in the mood for a conversation. Read the signs that people give out.",
  },
  {
    header: "Newcomer? Extend a hand! ",
    content:
      "This may well be the easiest way to network within your workplace. People who have just joined may be new to your organization but they still possess experience, skills, and a network that you can tap into. Welcome newcomers and try initiating conversations about the office. It may be something simple like quirks about the coffee machine or handy parking tips. You can also share work tips from your expertise with the company. Bear in mind never to comment on co-workers though.",
  },
  {
    header: "Take part in special projects",
    content:
      "Does your company organize CSRs, stretch assignments, or other special projects? Participate in at least one per month. Is there a cross-functional committee? Join them. These projects and committees open doors for you to network with colleagues from other teams and departments. If you are contemplating a switch to one of these teams, this network could be your catapult.",
  },
  {
    header: "Leverage LinkedIn",
    content:
      "LinkedIn is a professional social networking platform where people share work expertise, experiences, and skills. Most of your peers are on LinkedIn. If you aren’t on LinkedIn yet, go ahead and create a profile. With LinkedIn, you can see your colleague’s professional experience and assets without knocking into their",
  },
  {
    header: "personal life",
    content:
      " Be sure to connect with colleagues. While at it, look into the tab on the right that lists people and skills you and your new connection may have in common. You may be surprised at how much you get from your LinkedIn network. Explore and get connecting!",
  },
];

export default function BlogNine() {
  var count = 1;
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <section>
        <div>
          <div className="relative w-full h-full lg:-mt-[80px]">
            <div
              style={{
                background: `url(${"/blog/blog-8.jpg"})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
              className="w-full h-[45vh] md:min-h-[541px] object-cover"
            >
              <div className="img-gradient"></div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col text-center justify-center md:w-[80%] xl:w-[70%]">
                  <span className="text-date-blog">April 5, 2021</span>
                  <span className="heading-blog-content w-full max-w-[960px]">
                    Networking At Your Workplace
                  </span>
                </div>
              </div>
            </div>

            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="blog-paragraph">
                    Networking at your workplace isn’t far fetched. After all
                    “it’s not what you know, it’s whom you know.” How many times
                    have you heard that being said?
                  </p>
                  <p className="blog-paragraph">
                    Although this sentence is overrated, its essence is true.
                    Professional networking leads you to people who may know a
                    great opportunity that you’re interested in or they may just
                    become your trusted mentor. As you develop a good
                    professional rapport with people, you can tap into their
                    network and meet experts in the industry you are pursuing
                  </p>
                  <p className="blog-paragraph">
                    We’ve compiled the top five ways to help you gain a fresh
                    skillset.
                  </p>

                  <p className="blog-paragraph">
                    or wish to pursue a career in.
                  </p>

                  <p className="blog-paragraph">Where to begin? Your office.</p>
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
                  <p className="blog-paragraph">
                    Professional networking is more than just a formal handshake
                    or handing out your business card to someone. It’s about
                    making real connections with people so that you can help
                    each other progress in your career. Take an effort to greet
                    colleagues with a smile, or grab a bite with them.
                  </p>
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
                src="/blog/blog-9.jpg"
                className="w-full rounded-t-xl h-[40%] min-h-[230px]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-[#5d3eff] xl:font-semibold">
                  March 18, 2021
                </span>
                <p className="blog-title">
                  Common Yet Tricky Interview Questions That You Need To Be
                  Cautious About
                </p>
                <p className="text-blog-content">
                  Interviews can be stressful. Every question that the hiring
                  manager asks may seem intended to churn out information that
                  will put you in a disadvantageous position. How do you tackle
                  this? Simply by preparing ahead of time.
                </p>
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
