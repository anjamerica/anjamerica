import React from "react";
import BannerV2 from "../../../components/common/BannerV2";

export default function Index() {
  const bannerContent = {
    title: "Points To Remember While Updating Your Resume",
    description:
      "If there’s a task that one can never quite get acquainted with, no matter how many times they do it, it has to be updating a Resume.",
    background: "points-to-remember",
  };

  const items = [
    {
      title: "Keep it short and simple!",
      para: "You might have extensive work experience, but your actual skills lie in how you project them. It isn’t necessary to list all your experiences on the resume. Ensure information that’s relevant to the role you are seeking is present. Deliberately skipping some information will also help you emphasize and explain your skills when asked for. Since recruiters go through numerous profiles per day, a long, laborious one may not have the necessary impact. Try to restrict your resume to a single page",
    },
    {
      title: "Display your certifications",
      para: "You should remember that your life doesn’t just revolve around work. You have family and friends who need your time, as well. Don’t fear saying “no” to duty calls post working hours. With most people working from home these days (and even if not), the line between work and home is seemingly disappearing. Employees are expected to work extra hours, attend late-night client calls, and be available to the company 24x7. Although it is the responsibility of every employee to meet deadlines and produce quality work, it is vital for employers to be empathetic and encourage them to cultivate healthy lifestyles.",
    },
    {
      title: "Explain Breaks and Job-Hops",
      para: "Potential recruiters are wary of multiple jumps and breaks in a profile. If there is a reason why you jumped a few companies or took a break, it is advisable to mention it in the simplest way possible. Although not mandatory, this might help save your profile from getting rejected before even proceeding for the first chance.",
    },
    {
      title: "Format; Check, Reformat!",
      para: "You can have a creative resume; one that is meticulously designed but don’t forget to check for formatting errors. Check for double spacing, inconsistent spacing, paragraph breaks, fonts, and all of the other possible formatting errors that you can think of. Avoiding these errors immediately makes your resume neat and aligned.",
    },
    {
      title: "Proofread. Proofread and Proofread, Again! ",
      para: "If you are looking to catch the attention of your recruiter, make sure it’s not via errors! Nothing can get matters worse than grammatical errors in your resume. Make use of tools that will help you proofread your content for simple errors and edit them to make it error-free. Focus on irregular capitalization, spellings, and also lingos that might hamper your way to success. In short, if you are doubtful of your content, get it checked and keep it straight!",
    },

    {
      para: "You don’t have to fret over updating your resume. Start with a clean slate and remember to keep it simple. Include the information that you think is absolutely necessary. Most of all, if you were to remember the tips we’ve listed for you, you can update your resume without breaking a sweat!",
    },
  ];
  return (
    <div className="w-full -mt-[62px]">
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
                <p className="text-gray-dark text-justify md:text-start">
                  {item?.para}
                </p>
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
}
