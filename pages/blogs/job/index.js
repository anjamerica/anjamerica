import React from "react";
import BannerV2 from "../../../components/common/BannerV2";

const index = () => {
  const bannerContent = {
    title: "Job Scenario in the USA for Immigrants",
    description:
      "The world-famous animator, Walt Disney told, “All of our dreams come true if we have the courage to pursue them.",
    background: "checklistimg",
    descriptionStyle: "max-w-[660px]",
  };

  const items = [
    {
      para: "The world-famous animator, Walt Disney told, “All of our dreams come true, if we have the courage to pursue them.” For many, working in the United States of America is their life’s dream. They aspire to study in the USA, work there, and some wish to complete their graduate studies from their home country and migrate for work.",
    },
    {
      para: "There are various occupations available for immigrants in the United States of America. Few of the most sought after jobs are:-",
    },
    {
      title: "Military:",
      para: "The military is the backbone of every nation. The managerial roles in the US military are usually handled by immigrants from various countries.",
    },
    {
      title: "Legal:",
      para: "Immigrants constitute a total of 8% of the jobs in this sector. The jobs which are usually allotted to immigrants would be in the clerical and attorney level.",
    },
    {
      title: "Community and Social Service:",
      para: "The job requirements in this sector are predominantly filled by immigrants. The expatriate parents take up this work for their kids to easily fit into the schools. Immigrants willing to work for a relief agency usually take up these jobs.",
    },
    {
      title: "Education:",
      para: "This is one of the sectors where there is an increase of immigrants taking up employment opportunities. The types of available jobs are: administrative jobs, teachers, and librarians.",
    },
    {
      title: "Business Operations:",
      para: "Any business must run ceaselessly and subject experts are necessary for this arduous task. The companies who operate from the United States of America have understood this underlying need very clearly and are open to hiring the right immigrant for the job. They constitute about 11% of the total workforce in this arena.",
    },
    {
      title: "Extraction:",
      para: "Some companies are into this sector and are on the lookout for hardworking labors. Many uneducated immigrants take up jobs here.",
    },
    {
      title: "Management:",
      para: "The most coveted position in any company is also the target for many of the immigrants. Some immigrants work tirelessly to reach the top position and some have the required credentials and obtain the job. These jobs are available in the entire spectrum of the work arena.",
    },
    {
      title: "Sales:",
      para: "This is a booming department where the retailers are ready to hire immigrants from any origin. The goals are already pre-defined, if the employee can bring in more customers to the business, they are paid higher.",
    },
    {
      title: "Maintenance:",
      para: "The natives of the country rely on maintenance and repair persons for their household chores. This is where immigrants play a major role and take up maintenance jobs.",
    },
    {
      title: "Finance:",
      para: "According to a recent survey, 14% of the financial specialists working in the United States of America are immigrants. They are specialized in selling insurance, advising investments, and deal with money on a routine basis.",
    },
    {
      title: "Health care:",
      para: "America needs more doctors and health care practitioners - immigrants are also interested in this employment opportunity. They are also interested in hiring more immigrants for this job.",
    },
    {
      title: "Transportation & Logistics:",
      para: "This is an integral part of every business. The products need to be transported to the destination without any delay. They rely on immigrants for transporting several consignments.",
    },
    {
      title: "Food & Beverage:",
      para: "Many immigrants are employed in this department. There are job opportunities either in the food production industries or in restaurants.",
    },
    {
      para: "Whatever is your educational qualification, if you possess the right skill, you would get the appropriate opportunity to work in the United States of America and also fulfill your dreams. You must always be on the lookout for ways to turn a problem into an opportunity.",
    },
  ];
  return (
    <div>
      <BannerV2 item={bannerContent} />
      <div className="rounded-[20px] flex flex-col gap-3 p-5 my-5 bg-white">
        {items?.map((item, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            key={i}
            className="mb-3 flex flex-col gap-2"
          >
            <p className="font-bold text-base">{item.title}</p>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              className="flex flex-col gap-1"
            >
              {item?.para && (
                <p className="text-gray-dark text-justify">{item?.para}</p>
              )}

              {item?.list?.map((item, i) => (
                <p
                  className="text-gray-dark pl-2 text-justify md:text-start"
                  key={i}
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
