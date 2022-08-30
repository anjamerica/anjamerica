import Link from "next/link";
import React from "react";
import BlogCard from "../../components/blog/BlogCard";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";

export default function index() {
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <div className="w-full h-fit bg-white shadow-sm sticky top-0 left-0 z-50">
        <Header />
      </div>
      <div className="w-full px-5 pt-5 md:pt-[60px] md:px-[6.3%] bg-white">
        <div className="rounded-xl flex flex-col md:flex-row w-full md:min-h-[510px]  h-full bg-[#FFF] drop-shadow-xl">
          <img
            alt="cover image"
            src="/blog/blog-7.jpg"
            className="w-full h-[40%]  rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-[50%] md:min-h-[510px]  md:h-[100%] object-cover"
          />
          <div className="p-5 flex flex-col text-left justify-center gap-4">
            <span className="text-blog-date">April 29, 2021</span>
            <p className="text-[#0a1f44] heading-main text-[28px] md:text-[34px] xl:leading-[41px] md:w-[90%] font-bold break-words">
              Software and IT Industry In The USA
            </p>
            <p className="text-blog-content w-[97%]">
              The business intelligence (BI) software industry is rapidly
              becoming one of the leading software categories in terms of market
              size.
            </p>
            <Link href="/blogs/software-and-it-industry-in-the-usa" passHref>
              <span className="read-more">READ MORE</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full h-full gap-4  p-5 md:gap-4 xl:gap-10 md:grid-cols-3 bg-white  md:py-10 md:px-[6.3%]">
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
              When looking for a career change or wanting to get back into the
              professional space after a break, it is highly essential to have
              your CV updated with the right skills.
            </p>
            <Link
              href="/blogs/5-ways-to-learn-new-skills-to-boost-your-cv"
              passHref
            >
              <span className="read-more">READ MORE</span>
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
            <span className="text-blog-date">April 5, 2021</span>
            <p className="blog-title">Networking At Your Workplace</p>
            <p className="text-blog-content">
              Networking at your workplace isn’t far-fetched. After all “it’s
              not what you know, it’s whom you know.” How many times have you
              heard that being said?
            </p>
            <Link href="/blogs/networking-at-your-workplace" passHref>
              <span className="read-more">READ MORE</span>
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
            <span className="text-blog-date">March 18, 2021</span>
            <p className="blog-title">
              Common Yet Tricky Interview Questions That You Need To Be Cautious
              About
            </p>
            <p className="text-blog-content">
              Interviews can be stressful. Every question that the hiring
              manager asks may seem intended to churn out information that will
              put you in a disadvantageous position. How do you tackle this?
              Simply by preparing ahead of time.
            </p>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="cover image"
            src="/assets/landing/blog/blog_7.jpg"
            className="w-full rounded-t-xl h-[40%] min-h-[230px]"
          />
          <div className="p-5 flex flex-col justify-evenly text-left gap-4">
            <span className="text-blog-date">March 8, 2021</span>
            <p className="blog-title">
              Points To Remember While Updating Your Resume
            </p>
            <p className="text-blog-content">
              If there’s a task that one can never quite get acquainted with, no
              matter how many times they do it, it has to be updating a Resume.
            </p>
            <Link
              href="/blogs/points-to-remember-while-updating-your-resume"
              passHref
            >
              <span className="read-more">READ MORE</span>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="cover image"
            src="/assets/landing/blog/blog_1.jpg"
            className="w-full rounded-t-xl h-[40%] min-h-[230px]"
          />
          <div className="p-5 flex flex-col text-left justify-evenly gap-4">
            <span className="text-blog-date">March 2, 2021</span>
            <p className="blog-title">How to achieve Work-Life Balance</p>
            <p className="text-blog-content">
              Achieving work-life balance isn’t intangible or even impossible.
              It’s simply being able to handle the stress of your work and
              personal life on the go. The ultimate goal is that at the end of
              each day you go to bed with zero stress,
            </p>
            <Link href="/blogs/how-to-achieve-work-life-balance" passHref>
              <span className="read-more">READ MORE</span>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="cover image"
            src="/assets/landing/blog/blog_2.jpg"
            className="w-full rounded-t-xl h-[40%] min-h-[230px]"
          />
          <div className="p-5 flex flex-col justify-evenly text-left gap-4">
            <span className="text-blog-date">February 22, 2021</span>
            <p className="blog-title">
              Is Your Website Ready For A Mobile-First World?
            </p>
            <p className="text-blog-content">
              With the extraordinary increase and usage of smart devices like
              mobile phones and tablets, Google has decblogIded to do an
              innovative change in the way its search engines work.
            </p>
            <Link
              href="/blogs/is-your-website-ready-for-a-mobile-first-world"
              passHref
            >
              <span className="read-more">READ MORE</span>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="cover image"
            src="/assets/landing/blog/blog_3.jpg"
            className="w-full rounded-t-xl h-[40%] min-h-[230px]"
          />
          <div className="p-5 flex flex-col justify-evenly text-left gap-4">
            <span className="text-blog-date">February 5, 2021</span>
            <p className="blog-title">Job Scenario in the USA for Immigrants</p>
            <p className="text-blog-content">
              The world-famous animator, Walt Disney told, “All of our dreams
              come true if we have the courage to pursue them.”
            </p>
            <Link href="/blogs/job-scenario-in-the-usa-for-immigrants" passHref>
              <span className="read-more">READ MORE</span>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="cover image"
            src="/assets/landing/blog/blog_4.jpg"
            className="w-full rounded-t-xl h-[40%] min-h-[230px]"
          />
          <div className="p-5 flex flex-col justify-evenly text-left gap-4">
            <span className="text-blog-date">February 1, 2021</span>
            <p className="blog-title">
              The Importance of Scalable Web Development
            </p>
            <p className="text-blog-content">
              Scalable Web Development refers to the ability of a system,
              network, and the process of using the website to handle the
              workload that would increase as time passes by.
            </p>
            <Link
              href="/blogs/the-importance-of-scalable-web-development"
              passHref
            >
              <span className="read-more">READ MORE</span>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="cover image"
            src="/assets/landing/blog/blog_5.jpg"
            className="w-full rounded-t-xl h-[40%] min-h-[230px]"
          />
          <div className="p-5 flex flex-col justify-evenly text-left gap-4">
            <span className="text-blog-date">January 30, 2021</span>
            <p className="blog-title">
              Migrating To The USA? Here Is A Consolidated Checklist
            </p>
            <p className="text-blog-content">
              When you are planning to pursue your ‘American Dream’, you must
              get a few things ready on your front.
            </p>
            <Link
              href="/blogs/migrating-to-the-usa-here-is-a-consolidated-checklist"
              passHref
            >
              <span className="read-more">READ MORE</span>
            </Link>
          </div>
        </div>
        <div className="blog-card">
          <img
            alt="cover image"
            src="/assets/landing/blog/blog_6.jpg"
            className="w-full rounded-t-xl h-[40%] min-h-[230px]"
          />
          <div className="p-5 flex flex-col justify-evenly text-left gap-4">
            <span className="text-blog-date">January 28, 2021</span>
            <p className="blog-title">What is Cloud Management?</p>
            <p className="text-blog-content">
              The evolution and advancement of technology have paved the way to
              make mankind&apos;s life hassle-free! Cloud management is a type
              of software and technology that ensures seamless
            </p>
            <Link href="/blogs/what-is-cloud-management" passHref>
              <span className="read-more">READ MORE</span>
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
