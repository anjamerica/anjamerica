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
    header: "Display your certifications ",
    content:
      "You should remember that your life doesn’t just revolve around work. You have family and friends who need your time, as well. Don’t fear saying “no” to duty calls post working hours. With most people working from home these days (and even if not), the line between work and home is seemingly disappearing. Employees are expected to work extra hours, attend late-night client calls, and be available to the company 24x7. Although it is the responsibility of every employee to meet deadlines and produce quality work, it is vital for employers to be empathetic and encourage them to cultivate healthy lifestyles.",
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
    header: "Proofread. Proofread and Proofread, Again! ",
    content:
      "f you are looking to catch the attention of your recruiter, make sure it’s not via errors! Nothing can get matters worse than grammatical errors in your resume. Make use of tools that will help you proofread your content for simple errors and edit them to make it error-free. Focus on irregular capitalization, spellings, and also lingos that might hamper your way to success. In short, if you are doubtful of your content, get it checked and keep it straight!",
  },
];

export default function BlogSeven() {
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
                  src="/assets/landing/blog/blog_7.jpg"
                  className="w-full h-[45vh] md:h-[80vh] object-cover"
                />
              </div>
              <div className="absolute top-[30%] right-[50%] -translate-y-[19%] translate-x-[50%] md:translate-y-[50%]">
                <div className="flex flex-col text-center">
                  <span className="text-normal-landing font-semibold">
                    March 8, 2021
                  </span>
                  <span className="text-anim-blog text-white text-[1.2rem] md:text-[2rem] font-semibold">
                    Points To Remember While Updating Your Resume
                  </span>
                </div>
              </div>
            </div>
            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="text-[#333] text-xs xl:text-base font-light break-words">
                    If there’s a task that one can never quite get acquainted
                    with, no matter how many times they do it, it has to be
                    updating a Resume. With the world becoming increasingly
                    competitive, the race to find a suitable job is getting
                    tougher by the day.
                    <br />
                    <br />
                    Here are a few tips to not skip while working on your
                    Resume.
                  </p>
                  <div>
                    {subContent.map((data, i) => {
                      return (
                        <div className="gap-4 flex" key={i}>
                          <div className="flex flex-row my-2 ml-8 gap-1">
                            <span className="text-[#333] text-xs  xl:text-base font-light ">
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
                  <div className="text-[#333] text-xs xl:text-base font-light break-words">
                    You don’t have to fret over updating your resume. Start with
                    a clean slate and remember to keep it simple. Include the
                    information that you think is absolutely necessary. Most of
                    all, if you were to remember the tips we’ve listed for you,
                    you can update your resume without breaking a sweat!
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
                src="/assets/landing/blog/blog_1.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col text-left justify-evenly gap-4">
                <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
                  March 2, 2021
                </span>
                <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
                  How to achieve Work-Life Balance
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
                  Achieving work-life balance isn’t intangible or even
                  impossible. It’s simply being able to handle the stress of
                  your work and personal life on the go. The ultimate goal is
                  that at the end of each day you go to bed with zero stress,
                </p>
                <Link href="/blogs/how-to-achieve-work-life-balance" passHref>
                  <span className="text-primary-green text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                src="/assets/landing/blog/blog_2.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
                  February 22, 2021
                </span>
                <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
                  Is Your Website Ready For A Mobile-First World?
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
                  With the extraordinary increase and usage of smart devices
                  like mobile phones and tablets, Google has decblogIded to do
                  an innovative change in the way its search engines work.
                </p>
                <Link
                  href="/blogs/is-your-website-ready-for-a-mobile-first-world"
                  passHref
                >
                  <span className="text-primary-green text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                src="/assets/landing/blog/blog_5.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
                  January 30, 2021
                </span>
                <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
                  Migrating To The USA? Here Is A ConsolblogIdated Checklist
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
                  When you are planning to pursue your ‘American Dream’, you
                  must get a few things ready on your front.
                </p>
                <Link
                  href="/blogs/migrating-to-the-usa-here-is-a-consolidated-checklist"
                  passHref
                >
                  <span className="text-primary-green text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
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
