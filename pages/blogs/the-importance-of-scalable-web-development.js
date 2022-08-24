import Link from "next/link";
import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";

export default function BlogFour() {
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <Header />
      <section>
        <div>
          <div className="relative w-full h-full">
            <div
              style={{
                background: `url(${"/assets/landing/blog/blog_4.jpg"})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
              className="w-full h-[45vh] md:min-h-[541px] object-cover"
            >
              <div className="img-gradient"></div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col text-center justify-center md:w-[80%] xl:w-[70%]">
                  <span className="text-date-blog">February 1, 2021</span>
                  <span className="heading-blog-content w-full max-w-[960px]">
                    The Importance of Scalable Web Development
                  </span>
                </div>
              </div>
            </div>

            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="blog-paragraph">
                    Scalable Web Development refers to the ability of a system,
                    network, and the process of using the website to handle the
                    workload that would increase as time passes by.
                    <br />
                    <br />
                    This is usually calculated, to help the Operations&apos; ;
                    team to assess, evaluate, and ensure the process does not go
                    out of hand. It is calculated through the ratio of the
                    increase in system performance to the rise in resources
                    used.
                    <br />
                    <br />
                    It must be understood that building scalable websites helps
                    in high productivity and it would further improve the
                    working style of the company. When we look at websites of
                    well-established and renowned companies, most of us
                    don&#39;t realize the kind of workload that these websites
                    can withstand.
                    <br />
                    <br />
                    This is why, when small businesses wish to develop a
                    website, they must have a buffer stock and must consider the
                    number of customers who might visit their website at once.
                    This would help their customers to not experience any
                    obstacles like:
                    <br />
                    <br />
                    <div className="ml-[3rem]">
                      <ul className="list-disc">
                        <li className="px-[10px] py-[5px] blog-paragraph">
                          The web page not loading
                        </li>
                        <li className="px-[10px] py-[5px] blog-paragraph">
                          Taking a lot of time to load
                        </li>
                        <li className="px-[10px] py-[5px] blog-paragraph">
                          Not being able to produce relevant data, due to a high
                          number of people using the page, and much more.
                        </li>
                      </ul>
                    </div>
                    <br />
                    For e-commerce websites, expansion of the product range
                    negatively affects the page load time; updating the
                    inventory of an e-commerce shop also becomes problematic,
                    Changing the code structure becomes dangerous and
                    overcomplicated. Adding a new product or service takes too
                    much time and becomes expensive. Do all websites inevitably
                    face such problems?
                    <br />
                    <br />
                    To a certain extent, yes. Websites do face complex issues
                    during every step of the development process. It completely
                    depends on how well they have improvised with the current
                    trends and technology advancements.
                    <br />
                    <br />
                    If certain rules are followed concerning the application
                    setup, it would pave the way to:
                    <br />
                    <br />
                    <div className="ml-[3rem]">
                      <ul className="list-disc">
                        <li className="px-[10px] py-[5px] blog-paragraph">
                          Update the site.
                        </li>
                        <li className="px-[10px] py-[5px] blog-paragraph">
                          Improve the user experience
                        </li>
                        <li className="px-[10px] py-[5px] blog-paragraph">
                          Extend the life cycle of the services or products
                          offered
                        </li>
                        <li className="px-[10px] py-[5px] blog-paragraph">
                          As a positive externality, increase sales and brand
                          loyalty.
                        </li>
                      </ul>
                    </div>
                  </p>
                </div>
                <div className="flex flex-col gap-2 my-4">
                  <p className="blog-subheading">
                    How can ANJ America help?
                  </p>
                  <span className="blog-paragraph">
                    Our team of well-experienced and tech-savvy individuals is
                    here to make your life easier. We offer cutting-edge web
                    development services that are customized for every business
                    need to create engaging websites built with
                    high-responsiveness, scalability, minimalistic design, and
                    maximum cyber resilience.
                    <br />
                    <br />
                    We understand that there&apos;s only one boss, and it is our
                    customer. Fulfilling your needs and requirements is our top
                    priority. We would like your business to prosper and
                    succeed, preferably without any obstacles in the way. We
                    would pave the way to ensure your customers have an
                    optimized journey while viewing your website.
                    <br />
                    <br />
                    Leave your challenges to us, we always have end-to-end
                    solutions! Visit our website at https://anjamerica.com/ to
                    schedule a consult.
                  </span>
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
                <span className="text-blog-date">April 29, 2021</span>
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
                <span className="text-blog-date">April 12, 2021</span>
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
