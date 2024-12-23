import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG02() {
  const router = useRouter();

  const points = [
    {
      title: "Try Taking Up An Online Skills Courses",
      description:
        "There are plenty of online platforms that offer courses to boost your professional skills. You can learn at your own pace without the pressure of adhering to a strict timetable. There are courses that even help you develop soft skills to give your CV the cutting edge.",
    },
    {
      title: "Invest In Online Certifications",
      description:
        "Certifications are yet another way to prove that you’ve acquired a new skill. The fact that you’ve spent time and effort into completing a whole course is commending. Not all certifications are paid ones- you can find free online certification courses that pertain to your industry with just a little search on Google.",
    },
    {
      title: "Take LinkedIn Tests And Get Endorsements",
      description:
        "We cannot leave LinkedIn out of the professional talks when it comes to upgrading your resume. Most hiring managers nowadays don’t pass a CV on without having looked into the applicant’s LinkedIn profile. Apart from keeping your profile updated, try taking on a few of the tests that LinkedIn offers pertaining to the skill that you want to be hired for. Ask connections to endorse you for the same.",
    },
    {
      title: "Grow Your Peer-Network",
      description:
        "Often you may want to develop a skill that could help you make the switch to a more desirable department within your organization, or you may just want to be better at the job you’re already doing. Networking with peers can help you out greatly. Start casual conversations and ease into asking professional questions. You can also try joining <br/> volunteer groups or professional online groups on social media.",
    },
    {
      title: "Get A Mentor",
      description:
        "If you know an expert in your field or someone who has accomplished significantly with the skill that you are wanting to develop, ask them if they’d be willing to mentor you. Having a mentor could be beneficial to freshmen too, as you’d have someone to help you right from the start. Revamping your resume with a new skillset doesn’t have to be tedious. You can easily follow the methods mentioned above without having to take much time off your regular schedule.",
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
                  5 Ways To Learn New Skills To BoostYour CV
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
        <p className="font-light text-md md:text-lg">April 12, 2021</p>
        <p className="heading-1 md:my-3">
          5 Ways To Learn New Skills To BoostYour CV
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          When looking for a career change or wanting to get back into the
          professional space after a break, it is highly essential to have your
          CV updated with the right skills. Most often gaining a new skill is
          acquainted with having already gained experience by utilizing that
          skill at work.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          However, that isn’t the case. You don’t always have to be employed to
          acquire a new skill. There are quite a few other ways to develop a new
          set of skills to boost your resume.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          We’ve compiled the top five ways to help you gain a fresh skillset.
        </p>
        <div className="w-full mt-6 flex flex-col gap-4">
          {points?.map((item, i) => (
            <div key={i}>
              <p className="text-2xl">{item?.title}</p>
              <p
                className="text-md md:text-lg mt-2 md:mt-4 font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-03", "ANJBLG-04"]} />
        </div>
      </div>
    </Container>
  );
}
