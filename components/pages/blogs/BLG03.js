import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG03() {
  const router = useRouter();

  const points = [
    {
      title: "Sport a smile!",
      description:
        "As obvious as it is; by being friendly you can connect better with people, but it remains a rigorous task for many. It’s easy to pass every day at work by just minding your own business. Colleagues will simply remain colleagues.Don’t walk around with a stern face. Instead, try to open up a little more. Smile when you meet someone in the hallways or the elevator. Say “hi” when you bump into someone you’ve never spoken to yet in the office. Start discussing their job and tell them about yours. That’s a start!",
    },
    {
      title: "Coffee breaks and lunch is for conversations!",
      description:
        "If you prefer to drive home for lunch or rather sit alone with a book or a podcast, it’s perfectly fine. It’s your time and you can spend it the way you want to. However, if you do go to the cafeteria grab your chance to socialize. Capitalize on coffee breaks in the break room as well. Small talk over coffee is proven to ignite a spark! Here’s a tip: If you find someone buried in a book or having earphones on, they’re probably not in the mood for a conversation. Read the signs that people give out.",
    },
    {
      title: "Newcomer? Extend a hand!",
      description:
        "This may well be the easiest way to network within your workplace. People who have just joined may be new to your organization but they still possess experience, skills, and a network that you can tap into. Welcome newcomers and try initiating conversations about the office. It may be something simple like quirks about the coffee machine or handy parking tips. You can also share work tips from your expertise with the company. Bear in mind never to comment on co-workers though.",
    },
    {
      title: "Take part in special projects",
      description:
        "Does your company organize CSRs, stretch assignments, or other special projects? Participate in at least one per month. Is there a cross-functional committee? Join them. These projects and committees open doors for you to network with colleagues from other teams and departments. If you are contemplating a switch to one of these teams, this network could be your catapult.",
    },
    {
      title: "Leverage LinkedIn",
      description:
        "LinkedIn is a professional social networking platform where people share work expertise, experiences, and skills. Most of your peers are on LinkedIn. If you aren’t on LinkedIn yet, go ahead and create a profile. With LinkedIn, you can see your colleague’s professional experience and assets without knocking into their",
    },
    {
      title: "Personal life",
      description:
        "Be sure to connect with colleagues. While at it, look into the tab on the right that lists people and skills you and your new connection may have in common. You may be surprised at how much you get from your LinkedIn network. Explore and get connecting!",
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
                  Networking At Your Workplace
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b3.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">April 5, 2021</p>
        <p className="heading-1 md:my-3">Networking At Your Workplace</p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Networking at your workplace isn’t far fetched. After all “it’s not
          what you know, it’s whom you know.” How many times have you heard that
          being said?
        </p>
        <p className="text-md md:text-lg leading-[25px] md:leading-[40px] font-thin text-justify  text-gray-tertiary">
          Although this sentence is overrated, its essence is true. Professional
          networking leads you to people who may know a great opportunity that
          you’re interested in or they may just become your trusted mentor. As
          you develop a good professional rapport with people, you can tap into
          their network and meet experts in the industry you are pursuing
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          We’ve compiled the top five ways to help you gain a fresh skillset.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          or wish to pursue a career in.
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          Where to begin? Your office.
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
          Professional networking is more than just a formal handshake or
          handing out your business card to someone. It’s about making real
          connections with people so that you can help each other progress in
          your career. Take an effort to greet colleagues with a smile, or grab
          a bite with them.
        </p>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-04"]} />
        </div>
      </div>
    </Container>
  );
}
