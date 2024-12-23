import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";
import Link from "next/link";

const subContent = [
  {
    header: "Keep it short and simple!",
    content:
      "You might have extensive work experience, but your actual skills lie in how you project them. It isn’t necessary to list all your experiences on the resume. Ensure information that’s relevant to the role you are seeking is present. Deliberately skipping some information will also help you emphasize and explain your skills when asked for. Since recruiters go through numerous profiles per day, a long, laborious one may not have the necessary impact. Try to restrict your resume to a single page.",
  },
  {
    header: "Display your certifications  ",
    content:
      "Did you take an additional course relevant to your field? Mention it. The soft-skill certification you completed? Mention that too. In the current scenario, recruiters are actively looking for people who have a passion for upskilling themselves. It is advisable to mention your educational credentials even if you are continuing education and not wait till you complete it. This gives your recruiter an idea of the additional skills you might possess.",
  },
  {
    header: "Explain Breaks and Job-Hops",
    content:
      "Potential recruiters are wary of multiple jumps and breaks in a profile. If there is a reason why you jumped a few companies or took a break, it is advisable to mention it in the simplest way possible. Although not mandatory, this might help save your profile from getting rejected before even proceeding for the first chance.",
  },
  {
    header: "Format; Check, Reformat! ",
    content:
      "You can have a creative resume; one that is meticulously designed but don’t forget to check for formatting errors. Check for double spacing, inconsistent spacing, paragraph breaks, fonts, and all of the other possible formatting errors that you can think of. Avoiding these errors immediately makes your resume neat and aligned.",
  },
  {
    header: "Proofread. Proofread and Proofread, Again!",
    content:
      "If you are looking to catch the attention of your recruiter, make sure it’s not via errors! Nothing can get matters worse than grammatical errors in your resume. Make use of tools that will help you proofread your content for simple errors and edit them to make it error-free. Focus on irregular capitalization, spellings, and also lingos that might hamper your way to success. In short, if you are doubtful of your content, get it checked and keep it straight!",
  },
];

export default function BlogTen() {
  var count = 1;
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <section>
        <div>
          <div className="relative w-full h-full lg:-mt-[80px]">
            <div
              style={{
                background: `url(${"/assets/landing/blog/blog_7.jpg"})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
              className="w-full h-[45vh] md:min-h-[541px] object-cover"
            >
              <div className="img-gradient"></div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col text-center justify-center md:w-[80%] xl:w-[70%]">
                  <span className="text-date-blog"> March 8, 2021</span>
                  <span className="heading-blog-content w-full max-w-[960px]">
                    Points To Remember While Updating Your Resume
                  </span>
                </div>
              </div>
            </div>

            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="blog-paragraph">
                    If there’s a task that one can never quite get acquainted
                    with, no matter how many times they do it, it has to be
                    updating a Resume. With the world becoming increasingly
                    competitive, the race to find a suitable job is getting
                    tougher by the day.
                  </p>
                  <p className="blog-paragraph">
                    Here are a few tips to not skip while working on your
                    Resume.
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
                  <p className="blog-paragraph">
                    You don’t have to fret over updating your resume. Start with
                    a clean slate and remember to keep it simple. Include the
                    information that you think is absolutely necessary. Most of
                    all, if you were to remember the tips we’ve listed for you,
                    you can update your resume without breaking a sweat!
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
