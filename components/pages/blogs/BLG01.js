import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG01() {
  const router = useRouter();

  return (
    <Container>
      <div className="my-10 mt-[120px]">
        <BreadCrumbList
          items={[
            {
              title: (
                <p
                  className="text-md md:text-base cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Home
                </p>
              ),
            },
            {
              title: (
                <p
                  className="text-md md:text-base cursor-pointer"
                  onClick={() => router.push("/blogs")}
                >
                  Blogs
                </p>
              ),
            },
            {
              title: (
                <p className="text-md md:text-base">
                  Software and IT Industry In The USA
                </p>
              ),
            },
          ]}
        />
        <img
          src="/V2/images/blogs/b1-banner.png"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">April 29, 2021</p>
        <p className="heading-1 md:my-3">Software and IT Industry In The USA</p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          The business intelligence (BI) software industry is rapidly becoming
          one of the leading software categories in terms of market size.
          According to industry analysts at Gartner, the size of the global
          software industry was about $3.5 billion in 2013, up from $2.2 billion
          in 2012.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          According to Global Industry Analysts, Software as a Service (SaaS) is
          a huge growth driver, growing by 20 percent annually. If you are
          interested in a position in high technology, you need to focus on
          Software as a Service (SaaS) and Business Intelligence (BI) software.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          It should be noted that the software industry is not limited to
          independent software vendors, but also includes hardware offerings
          provided by programming services and software products as well as
          large software vendors.
        </p>
        <div className="w-full mt-6 md:mt-10">
          <div className="flex flex-col gap-6 md:flex-row justify-between">
            <div className="w-full md:w1/2 lg:w-[40%]">
              <img
                src="/V2/images/blogs/b1-s2.png"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="w-full md:w1/2 lg:w-[60%]">
              <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
                The economic crisis has had a significant impact on the IT
                software sector compared to other segments of the IT industry.
                In 2017, more than one-third of successful visa applications
                were for computer and IT professions. According to the US
                Immigration Service (USCIS), computer and information technology
                certified bodies are in the fields of computer science,
                engineering, mathematics and computer programming, and computer
                systems technology.
              </p>

              <p className="text-md md:text-lg md:mt-4 font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
                According to a report by the American Enterprise Institute (AEI)
                and the Carolina Institute of Technology (CEI), software
                value-added in the United States has increased by more than 20%
                since 1990. In Massachusetts alone, over 1,800 software
                companies are employing more than 62,000 people: 33,000 of{" "}
              </p>
            </div>
          </div>
          <p className="text-md md:text-lg md:mt-4 font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
            who work in software units of computer hardware companies and 2,500
            work for software-based telecommunications and network equipment
            companies. Together, IT software and services represent a
            significant share of the entire IT industry in the US market.
          </p>
        </div>

        <div className="w-full mt-6 md:mt-10">
          <div className="flex flex-col gap-6 md:flex-row justify-between">
            <div className="w-full md:w1/2 lg:w-[60%]">
              <p className="text-2xl md:text-3xl">Qualifications</p>
              <p className="text-md md:text-lg md:mt-4 font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
                IT software development companies have become stronger, with
                technology services and software accounting for more than 80% of
                the total US software market. For example, software development
                companies in the US will work with the federal government to
                create new solutions to problems in areas such as health care,
                education, transportation, energy, and infrastructure.
              </p>

              <p className="md:mt-6 text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
                The Computing and Technology Industry Association (CompTIA) is
                the world&apos;s leading industry association for those who
                design, implement, manage and protect technologies that drive
                our global
              </p>
            </div>
            <div className="w-full md:w1/2 lg:w-[40%]">
              <img
                src="/V2/images/blogs/b1-s3.png"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <p className="text-md md:text-lg mt-4 md:mt-6 font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
            who work in software units of computer hardware companies and 2,500
            work for software-based telecommunications and network equipment
            companies. Together, IT software and services represent a
            significant share of the entire IT industry in the US market.
          </p>
        </div>
        <div className="w-full flex mt-6 flex-col gap-6 md:flex-row justify-between">
          <div className="w-full md:w1/2 lg:w-[40%]">
            <img
              src="/V2/images/blogs/b1-s4.png"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="w-full md:w1/2 lg:w-[60%]">
            <p className="text-2xl md:text-3xl">In Conclusion</p>
            <p className="text-md md:text-lg md:mt-4 font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
              The NYSE - listed IBM - has the most employees and the
              second-largest share of its workforce in the industry. More than
              99% of software employees in the USA work for top companies like
              IBM, Microsoft, Oracle, Hewlett-Packard Enterprise, etc. The
              industry is known to have the highest number of certified
              technicians and professionals in the United States and the second-
              highest percentage of IT employees in America.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-02", "ANJBLG-03", "ANJBLG-04"]} />
        </div>
      </div>
    </Container>
  );
}
