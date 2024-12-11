import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG08() {
  const router = useRouter();

  const points = [
    {
      title: "Military",
      description:
        "The military is the backbone of every nation. The managerial roles in the US military are usually handled by immigrants from various countries.",
    },
    {
      title: "Legal",
      description:
        "Immigrants constitute a total of 8% of the jobs in this sector. The jobs which are usually allotted to immigrants would be in the clerical and attorney level.",
    },
    {
      title: "Community and Social Service",
      description:
        "The job requirements in this sector are predominantly filled by immigrants. The expatriate parents take up this work for their kids to easily fit into the schools. Immigrants willing to work for a relief agency usually take up these jobs.",
    },
    {
      title: "Education",
      description:
        "This is one of the sectors where there is an increase of immigrants taking up employment opportunities. The types of available jobs are: administrative jobs, teachers, and librarians.",
    },
    {
      title: "Business Operations",
      description:
        "Any business must run ceaselessly and subject experts are necessary for this arduous task. The companies who operate from the United States of America have understood this underlying need very clearly and are open to hiring the right immigrant for the job. They constitute about 11% of the total workforce in this arena.",
    },
    {
      title: "Extraction",
      description:
        "Some companies are into this sector and are on the lookout for hardworking labors. Many uneducated immigrants take up jobs here.",
    },
    {
      title: "Management",
      description:
        "The most coveted position in any company is also the target for many of the immigrants. Some immigrants work tirelessly to reach the top position and some have the required credentials and obtain the job. These jobs are available in the entire spectrum of the work arena.",
    },
    {
      title: "Sales",
      description:
        "This is a booming department where the retailers are ready to hire immigrants from any origin. The goals are already pre-defined, if the employee can bring in more customers to the business, they are paid higher.",
    },
    {
      title: "Maintenance",
      description:
        "The natives of the country rely on maintenance and repair persons for their household chores. This is where immigrants play a major role and take up maintenance jobs.",
    },
    {
      title: "Finance",
      description:
        "According to a recent survey, 14% of the financial specialists working in the United States of America are immigrants. They are specialized in selling insurance, advising investments, and deal with money on a routine basis.",
    },
    {
      title: "Health care",
      description:
        "America needs more doctors and health care practitioners - immigrants are also interested in this employment opportunity. They are also interested in hiring more immigrants for this job.",
    },
    {
      title: "Transportation & Logistics",
      description:
        "This is an integral part of every business. The products need to be transported to the destination without any delay. They rely on immigrants for transporting several consignments.",
    },
    ,
    {
      title: "Food & Beverage",
      description:
        "Many immigrants are employed in this department. There are job opportunities either in the food production industries or in restaurants.",
    },
  ];
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
                  Job Scenario in the USA for Immigrants
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b8.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">February 5, 2021</p>
        <p className="heading-1 md:my-3">
          Job Scenario in the USA for Immigrants
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          The world-famous animator, Walt Disney told, “All of our dreams come
          true, if we have the courage to pursue them.” For many, working in the
          United States of America is their life’s dream. They aspire to study
          in the USA, work there, and some wish to complete their graduate
          studies from their home country and migrate for work.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          There are various occupations available for immigrants in the United
          States of America. Few of the most sought after jobs are:-
        </p>

        <div className="w-full mt-6 flex flex-col gap-4">
          {points?.map((item, i) => (
            <div key={i}>
              <p className="text-2xl">{item?.title}</p>
              <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-2 md:mt-4 font-thin text-justify text-gray-tertiary">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Whatever is your educational qualification, if you possess the right
          skill, you would get the appropriate opportunity to work in the United
          States of America and also fulfill your dreams. You must always be on
          the lookout for ways to turn a problem into an opportunity.
        </p>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-03"]} />
        </div>
      </div>
    </Container>
  );
}
