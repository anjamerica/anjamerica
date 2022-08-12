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

export default function BlogEight() {
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
                  alt="cover image"
                  src="/assets/landing/blog/blog_7.jpg"
                  className="w-full h-[45vh] md:h-[80vh] object-cover"
                />
              </div>
              <div className="absolute top-[30%] right-[48%] -translate-y-[19%] translate-x-[50%] md:translate-y-[50%]">
                <div className="flex flex-col text-center">
                  <span className="text-normal-landing text-white font-semibold">
                    April 12, 2021
                  </span>
                  <span className="text-anim-blog text-white text-[1.2rem] md:text-[2rem] font-semibold">
                    5 Ways To Learn New Skills To Boost Your CV
                  </span>
                </div>
              </div>
            </div>
            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    When looking for a career change or wanting to get back into
                    the professional space after a break, it is highly essential
                    to have your CV updated with the right skills. Most often
                    gaining a new skill is acquainted with having already gained
                    experience by utilizing that skill at work.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    However, that isn’t the case. You don’t always have to be
                    employed to acquire a new skill. There are quite a few other
                    ways to develop a new set of skills to boost your resume.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    We’ve compiled the top five ways to help you gain a fresh
                    skillset.
                  </p>
                  <p className="text-sm md:text-[1rem] text-[#333] break-words heading-main font-semibold">
                    Try Taking Up An Online Skills Courses
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    There are plenty of online platforms that offer courses to
                    boost your professional skills. You can learn at your own
                    pace without the pressure of adhering to a strict timetable.
                    There are courses that even help you develop soft skills to
                    give your CV the cutting edge.
                  </p>

                  <p className="text-sm md:text-[1rem] text-[#333] break-words heading-main font-semibold">
                    Invest In Online Certifications
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    Certifications are yet another way to prove that you’ve
                    acquired a new skill. The fact that you’ve spent time and
                    effort into completing a whole course is commending. Not all
                    certifications are paid ones- you can find free online
                    certification courses that pertain to your industry with
                    just a little search on Google.
                  </p>

                  <p className="text-sm md:text-[1rem] text-[#333] break-words heading-main font-semibold">
                    Take LinkedIn Tests And Get Endorsements
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    We cannot leave LinkedIn out of the professional talks when
                    it comes to upgrading your resume. Most hiring managers
                    nowadays don’t pass a CV on without having looked into the
                    applicant’s LinkedIn profile. Apart from keeping your
                    profile updated, try taking on a few of the tests that
                    LinkedIn offers pertaining to the skill that you want to be
                    hired for. Ask connections to endorse you for the same.
                  </p>

                  <p className="text-sm md:text-[1rem] text-[#333] break-words heading-main font-semibold">
                    Grow Your Peer-Network
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    Often you may want to develop a skill that could help you
                    make the switch to a more desirable department within your
                    organization, or you may just want to be better at the job
                    you’re already doing. Networking with peers can help you out
                    greatly. Start casual conversations and ease into asking
                    professional questions. You can also try joining
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    volunteer groups or professional online groups on social
                    media.
                  </p>

                  <p className="text-sm md:text-[1rem] text-[#333] break-words heading-main font-semibold">
                    Get A Mentor
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    If you know an expert in your field or someone who has
                    accomplished significantly with the skill that you are
                    wanting to develop, ask them if they’d be willing to mentor
                    you. Having a mentor could be beneficial to freshmen too, as
                    you’d have someone to help you right from the start.
                    Revamping your resume with a new skillset doesn’t have to be
                    tedious. You can easily follow the methods mentioned above
                    without having to take much time off your regular schedule.
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
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                alt="cover image"
                src="/blog/blog-9.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-[#5d3eff] xl:font-semibold">
                  March 18, 2021
                </span>
                <p className="blog-title">
                  Common Yet Tricky Interview Questions That You Need To Be
                  Cautious About
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-normal break-words h-fit">
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
