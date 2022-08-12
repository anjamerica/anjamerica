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
                  alt="cover image"
                  src="/blog/blog-7.jpg"
                  className="w-full h-[45vh] md:h-[80vh] object-cover"
                />
              </div>
              <div className="absolute top-[30%] right-[50%] -translate-y-[19%] translate-x-[50%] md:translate-y-[50%]">
                <div className="flex flex-col text-center">
                  <span className="text-normal-landing text-white font-semibold">
                    April 29, 2021
                  </span>
                  <span className="text-anim-blog text-white text-[1.2rem] md:text-[2rem] font-semibold">
                    Software and IT Industry In The USA
                  </span>
                </div>
              </div>
            </div>
            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    The business intelligence (BI) software industry is rapidly
                    becoming one of the leading software categories in terms of
                    market size. According to industry analysts at Gartner, the
                    size of the global software industry was about $3.5 billion
                    in 2013, up from $2.2 billion in 2012.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    According to Global Industry Analysts, Software as a Service
                    (SaaS) is a huge growth driver, growing by 20 percent
                    annually. If you are interested in a position in high
                    technology, you need to focus on Software as a Service
                    (SaaS) and Business Intelligence (BI) software.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    It should be noted that the software industry is not limited
                    to independent software vendors, but also includes hardware
                    offerings provided by programming services and software
                    products as well as large software vendors.
                  </p>
                  <p className="text-sm md:text-[1rem] heading-main text-[#333] break-words  font-semibold">
                    How IT and Software Sectors Have Grown In The US
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    The economic crisis has had a significant impact on the IT
                    software sector compared to other segments of the IT
                    industry. In 2017, more than one-third of successful visa
                    applications were for computer and IT professions. According
                    to the US Immigration Service (USCIS), computer and
                    information technology certified bodies are in the fields of
                    computer science, engineering, mathematics and computer
                    programming, and computer systems technology.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    According to a report by the American Enterprise Institute
                    (AEI) and the Carolina Institute of Technology (CEI),
                    software value-added in the United States has increased by
                    more than 20% since 1990. In Massachusetts alone, over 1,800
                    software companies are employing more than 62,000 people:
                    33,000 of who work in software units of computer hardware
                    companies and 2,500 work for software-based
                    telecommunications and network equipment companies.
                    Together, IT software and services represent a significant
                    share of the entire IT industry in the US market.
                  </p>
                  <p className="text-sm md:text-[1rem]  heading-main text-[#333] break-words  font-semibold">
                    What To Look Forward To
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    IT software development companies have become stronger, with
                    technology services and software accounting for more than
                    80% of the total US software market. For example, software
                    development companies in the US will work with the federal
                    government to create new solutions to problems in areas such
                    as health care, education, transportation, energy, and
                    infrastructure.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    The Computing and Technology Industry Association (CompTIA)
                    is the world&apos;s leading industry association for those
                    who design, implement, manage and protect technologies that
                    drive our global economy. The technology sector consists of
                    companies selling software, computer products, and
                    information technology (IT) related services. This sector
                    includes companies engaged in the development, marketing,
                    sale, and marketing of software, computer products, and
                    service-related information technologies.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    Network and database management is the leading segment in
                    the US software market, accounting for over 40% of total
                    software sales in the US. One might argue that it makes no
                    sense to call cloud computing companies &amp; &quot;software
                    companies&quot; but this is an arbitrary separation. The
                    software industry includes software used for cloud-based,
                    premise-based licensing and maintenance, as well as
                    cloud-based applications.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    The software industry is classified as a service industry
                    and manufactures packaged products such as software,
                    hardware, software, and software services. It is
                    manufactured by manufacturers of computer equipment,
                    computer systems, computers, and other computer components,
                    as well as packaging products.
                  </p>
                  <p className="text-sm md:text-[1rem]  heading-main text-[#333] break-words  font-semibold">
                    In Conclusion
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    The NYSE - listed IBM - has the most employees and the
                    second-largest share of its workforce in the industry. More
                    than 99% of software employees in the USA work for top
                    companies like IBM, Microsoft, Oracle, Hewlett-Packard
                    Enterprise, etc. The industry is known to have the highest
                    number of certified technicians and professionals in the
                    United States and the second- highest percentage of IT
                    employees in America.
                  </p>
                  <p className="text-[#333] text-xs xl:text-base font-normal break-words">
                    If you are looking to get into the software and IT services
                    industry in the USA, you’re future couldn’t look brighter.
                    We can help direct you to the right companies. Check out our
                    website to know more!
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
                src="/assets/landing/blog/blog_7.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs  xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 12, 2021
                </span>
                <p className="blog-title">
                  5 Ways To Learn New Skills To Boost Your CV
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-normal break-words h-fit">
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
