import Link from "next/link";
import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";

export default function index() {
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <Header />
      <div className="w-full px-5 pt-5 md:pt-10 md:px-10">
        <div className="rounded-xl flex flex-col md:flex-row w-full  h-full bg-white drop-shadow-xl">
          <img
            src="/assets/landing/blog/blog_7.jpg"
            className="w-full h-[40%]  rounded-t-xl md:rounded-l-xl md:w-[50%]  md:h-auto object-cover"
          />
          <div className="p-5 flex flex-col text-left justify-center gap-4">
            <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
              March 8, 2021
            </span>
            <p className="text-[#0a1f44] leading-[41px] w-[70%] md:text-base xl:text-3xl font-bold break-words">
              Points To Remember While Updating Your Resume
            </p>
            <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
              If there’s a task that one can never quite get acquainted with, no
              matter how many times they do it, it has to be updating a Resume.
            </p>
            <Link href="/blogs/points-to-remember-while-updating-your-resume" passHref>
              <span className="text-primary-green text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                READ MORE
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full h-full gap-4  p-5 md:gap-4 xl:gap-10 md:grid-cols-3  md:py-10 md:px-10">
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
              Achieving work-life balance isn’t intangible or even impossible.
              It’s simply being able to handle the stress of your work and
              personal life on the go. The ultimate goal is that at the end of
              each day you go to bed with zero stress,
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
          <div className="p-5 flex flex-col text-left justify-evenly gap-4">
            <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
              February 22, 2021
            </span>
            <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
              Is Your Website Ready For A Mobile-First World?
            </p>
            <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
              With the extraordinary increase and usage of smart devices like
              mobile phones and tablets, Google has decblogIded to do an
              innovative change in the way its search engines work.
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
            src="/assets/landing/blog/blog_3.jpg"
            className="w-full rounded-t-xl h-[40%]"
          />
          <div className="p-5 flex flex-col text-left justify-evenly gap-4">
            <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
              February 5, 2021
            </span>
            <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
              Job Scenario in the USA for Immigrants
            </p>
            <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
              The world-famous animator, Walt Disney told, “All of our dreams
              come true if we have the courage to pursue them.
            </p>
            <Link href="/blogs/job-scenario-in-the-usa-for-immigrants" passHref>
              <span className="text-primary-green text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                READ MORE
              </span>
            </Link>
          </div>
        </div>
        <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
          <img
            src="/assets/landing/blog/blog_4.jpg"
            className="w-full rounded-t-xl h-[40%]"
          />
          <div className="p-5 flex flex-col text-left justify-evenly gap-4">
            <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
              February 1, 2021
            </span>
            <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
              The Importance of Scalable Web Development
            </p>
            <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
              Scalable Web Development refers to the ability of a system,
              network, and the process of using the website to handle the
              workload that would increase as time passes by.
            </p>
            <Link
              href="/blogs/the-importance-of-scalable-web-development"
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
          <div className="p-5 flex flex-col text-left justify-evenly gap-4">
            <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
              January 30, 2021
            </span>
            <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
              Migrating To The USA? Here Is A ConsolblogIdated Checklist
            </p>
            <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
              When you are planning to pursue your ‘American Dream’, you must
              get a few things ready on your front.
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
        <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
          <img
            src="/assets/landing/blog/blog_6.jpg"
            className="w-full rounded-t-xl h-[40%]"
          />
          <div className="p-5 flex flex-col text-left justify-evenly gap-4">
            <span className="text-xs xl:text-sm text-primary-green xl:font-semibold">
              January 28, 2021
            </span>
            <p className="text-[#0a1f44] md:text-base xl:text-xl font-bold break-words">
              What is Cloud Management?{" "}
            </p>
            <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
              The evolution and advancement of technology have paved the way to
              make mankind&apos;s life hassle-free! Cloud management is a type of
              software and technology that ensures seamless.
            </p>
            <Link href="/blogs/what-is-cloud-management" passHref>
              <span className="text-primary-green text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                READ MORE
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* <section>
        <Footer />
      </section> */}
    </main>
  );
}
