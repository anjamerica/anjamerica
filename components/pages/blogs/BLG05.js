import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG05() {
  const router = useRouter();

  const points = [
    {
      title: "Keep it short and simple!",
      description:
        "You might have extensive work experience, but your actual skills lie in how you project them. It isn’t necessary to list all your experiences on the resume. Ensure information that’s relevant to the role you are seeking is present. Deliberately skipping some information will also help you emphasize and explain your skills when asked for. Since recruiters go through numerous profiles per day, a long, laborious one may not have the necessary impact. Try to restrict your resume to a single page.",
    },
    {
      title: "Display your certifications",
      description:
        "Did you take an additional course relevant to your field? Mention it. The soft-skill certification you completed? Mention that too. In the current scenario, recruiters are actively looking for people who have a passion for upskilling themselves. It is advisable to mention your educational credentials even if you are continuing education and not wait till you complete it. This gives your recruiter an idea of the additional skills you might possess.",
    },
    {
      title: "Explain Breaks and Job-Hops",
      description:
        "Potential recruiters are wary of multiple jumps and breaks in a profile. If there is a reason why you jumped a few companies or took a break, it is advisable to mention it in the simplest way possible. Although not mandatory, this might help save your profile from getting rejected before even proceeding for the first chance.",
    },
    {
      title: "Format; Check, Reformat!",
      description:
        "You can have a creative resume; one that is meticulously designed but don’t forget to check for formatting errors. Check for double spacing, inconsistent spacing, paragraph breaks, fonts, and all of the other possible formatting errors that you can think of. Avoiding these errors immediately makes your resume neat and aligned.",
    },
    {
      title: "Proofread. Proofread and Proofread, Again! ",
      description:
        "If you are looking to catch the attention of your recruiter, make sure it’s not via errors! Nothing can get matters worse than grammatical errors in your resume. Make use of tools that will help you proofread your content for simple errors and edit them to make it error-free. Focus on irregular capitalization, spellings, and also lingos that might hamper your way to success. In short, if you are doubtful of your content, get it checked and keep it straight!",
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
                  Points To Remember While Updating Your Resume
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b2.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">March 8, 2021</p>
        <p className="heading-1 md:my-3">
          Points To Remember While Updating Your Resume
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          If there’s a task that one can never quite get acquainted with, no
          matter how many times they do it, it has to be updating a Resume. With
          the world becoming increasingly competitive, the race to find a
          suitable job is getting tougher by the day.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Here are a few tips to not skip while working on your Resume.
        </p>

        <div className="w-full mt-6 flex flex-col gap-4">
          {points?.map((item, i) => (
            <div key={i}>
              <p className="text-2xl">{item?.title}</p>
              <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-4 font-thin text-justify text-gray-tertiary">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          You don’t have to fret over updating your resume. Start with a clean
          slate and remember to keep it simple. Include the information that you
          think is absolutely necessary. Most of all, if you were to remember
          the tips we’ve listed for you, you can update your resume without
          breaking a sweat!
        </p>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-04"]} />
        </div>
      </div>
    </Container>
  );
}
