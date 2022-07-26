import Link from "next/link";
import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";

const subContent = [
  {
    header: "Military - ",
    content:
      "The military is the backbone of every nation. The managerial roles in the US military are usually handled by immigrants from various countries.",
  },
  {
    header: "Legal -",
    content:
      "Immigrants constitute a total of 8% of the jobs in this sector. The jobs which are usually allotted to immigrants would be in the clerical and attorney level.",
  },
  {
    header: "Community and Social Service - ",
    content:
      "The job requirements in this sector are predominantly filled by immigrants. The expatriate parents take up this work for their kids to easily fit into the schools. Immigrants willing to work for a relief agency usually take up these jobs.",
  },
  {
    header: "Education - ",
    content:
      "This is one of the sectors where there is an increase of immigrants taking up employment opportunities. The types of available jobs are: administrative jobs, teachers, and librarians.",
  },
  {
    header: "Business Operations -",
    content:
      "Any business must run ceaselessly and subject experts are necessary for this arduous task. The companies who operate from the United States of America have understood this underlying need very clearly and are open to hiring the right immigrant for the job. They constitute about 11% of the total workforce in this arena.",
  },
  {
    header: "Extraction -",
    content:
      "Some companies are into this sector and are on the lookout for hardworking labors. Many uneducated immigrants take up jobs here.",
  },
  {
    header: "Management - ",
    content:
      "The most coveted position in any company is also the target for many of the immigrants. Some immigrants work tirelessly to reach the top position and some have the required credentials and obtain the job. These jobs are available in the entire spectrum of the work arena.",
  },
  {
    header: "Sales -",
    content:
      "This is a booming department where the retailers are ready to hire immigrants from any origin. The goals are already pre-defined, if the employee can bring in more customers to the business, they are paid higher.",
  },
  {
    header: "Maintenance -",
    content:
      "The natives of the country rely on maintenance and repair persons for their household chores. This is where immigrants play a major role and take up maintenance jobs.",
  },
  {
    header: "Finance -",
    content:
      "According to a recent survey, 14% of the financial specialists working in the United States of America are immigrants. They are specialized in selling insurance, advising investments, and deal with money on a routine basis.",
  },
  {
    header: "Health care - ",
    content:
      "America needs more doctors and health care practitioners - immigrants are also interested in this employment opportunity. They are also interested in hiring more immigrants for this job.",
  },
  {
    header: "Transportation & Logistics -",
    content:
      "This is an integral part of every business. The products need to be transported to the destination without any delay. They rely on immigrants for transporting several consignments.",
  },
  {
    header: "Food & Beverage - ",
    content:
      "Many immigrants are employed in this department. There are job opportunities either in the food production industries or in restaurants.",
  },
];

export default function BlogThree() {
  var count = 1;
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <section>
        <div>
          <div className="relative w-full h-full lg:-mt-[80px]">
            <div
              style={{
                background: `url(${"/assets/landing/blog/blog_3.jpg"})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
              className="w-full h-[45vh] md:min-h-[541px] object-cover"
            >
              <div className="img-gradient"></div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col text-center justify-center md:w-[80%] xl:w-[70%]">
                  <span className="text-date-blog">February 5, 2021</span>
                  <span className="heading-blog-content w-full max-w-[960px]">
                    Job Scenario in the USA for Immigrants
                  </span>
                </div>
              </div>
            </div>

            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="blog-paragraph">
                    The world-famous animator, Walt Disney told, “All of our
                    dreams come true, if we have the courage to pursue them.”
                    For many, working in the United States of America is their
                    life’s dream. They aspire to study in the USA, work there,
                    and some wish to complete their graduate studies from their
                    home country and migrate for work.
                    <br />
                    <br />
                    There are various occupations available for immigrants in
                    the United States of America. Few of the most sought after
                    jobs are:-
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
                  <div className="blog-paragraph">
                    Whatever is your educational qualification, if you possess
                    the right skill, you would get the appropriate opportunity
                    to work in the United States of America and also fulfill
                    your dreams. You must always be on the lookout for ways to
                    turn a problem into an opportunity.
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
                <span className="text-blog-date">
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
