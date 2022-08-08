import Link from "next/link";
import React from "react";
import Footer from "../../components/landin/Footer";
import Header from "../../components/landin/Header";

const subContent = [
  {
    header: "Visa - ",
    content:
      "Double check your visa details and carefully note the Entry and Exit dates speculated.",
  },
  {
    header: "Passport - ",
    content:
      "Check the expiry date of your passport. If it is about to expire, get it renewed before your travel. If you are going overseas for a longer duration, getting your passport renewed would be a challenge and cause a lot of complexities in the foreign country.",
  },
  {
    header: "Personal documents - ",
    content:
      "Keep the hard copies of all your personal documents safely - Passport, National ID Cards, Birth Certificate, Wedding certificate, International Driving license, and Bank statements. Also, get your essential documents photocopied before your travel.",
  },
  {
    header: "Adaptors - ",
    content:
      "Your electrical adaptor won’t be suitable for use in the U.S. You would require an adaptor that would be suitable for the electric sockets.",
  },
  {
    header: "Money - ",
    content:
      "Bring some local currency in case it’s needed after disembarking.",
  },
  {
    header: "Outstanding bills and debts - ",
    content:
      "If there is any outstanding debt, do clear it out before migrating. This would have an impact on your credit rating after you return.",
  },
  {
    header: "Pay Taxes on time - ",
    content:
      "Intimate your local tax office that you are going to be abroad and make sure you pay your taxes (house, personal) before your travel.",
  },
  {
    header: "Insurance - ",
    content:
      "Arrange the appropriate travel and health insurance for yourself and your family members.",
  },
  {
    header: "Sell/rent out your properties - ",
    content:
      "Do sell/rent the furniture, car, and other tangible properties before your travel. Else you can also ask your friends to look after your belongings during your absence.",
  },
  {
    header: "Bank Accounts - ",
    content:
      "If you have multiple bank accounts and you are not going to access them when you are on travel, you could close the accounts. This would also prevent the penalty from being charged to your account for not maintaining the required balance.",
  },
  {
    header: "Redirecting mails - ",
    content:
      "Inform your post office about your travel and ask them not to deliver any letters to your home. If required open a PO Box and ask the post office to re-direct all your mails to the PO Box.",
  },
  {
    header: "Medical Examination - ",
    content:
      "Get medical examinations done for you and your family, This would be necessary once you land in the United States. The immigration officials might ask for your medical reports upon arrival.",
  },
  {
    header: "Cost of Living - ",
    content:
      "Compute the cost of living for the place where you are going to stay in. This would give you a brief idea of how much you can save from your salary and also guide you during house-hunting.",
  },
  {
    header: "Pets - ",
    content:
      " You need not leave your pet(s) behind. You can obtain a health certificate from your local veterinarian and take your pet along with you. A health certificate is enough for taking your dog or cat. In case you have a feathered pet, you also need confirmation from your Government to take your bird along with you.",
  },
  {
    header: "Connectivity - ",
    content:
      "Create an online Skype account and share it with your friends and family. This would be helpful for you to stay in touch with them. Also, get an international SIM Card for your mobile phone. Once you land in the country, you would be able to make calls from your mobile phone and also inform them.",
  },
  {
    header: "American slang - ",
    content:
      "Familiarize yourself with a few American lingo statements to avoid confusion in the new country.",
  },
  {
    header: "Know the route - ",
    content:
      "Familiarize yourself with the route from the airport to your place of accommodation and your workplace.",
  },
];

export default function BlogFive() {
  var count = 1;
  return (
    <main className="mx-auto w-full h-full snap-y bg-[#F4F4F4]">
      <Header />
      <section>
        <div>
          <div className="relative w-full h-full">
            <div className="relative">
              <div className="img-gradient">
                <img
                  src="/assets/landing/blog/blog_5.jpg"
                  className="w-full h-[45vh] md:h-[80vh] object-cover"
                />
              </div>
              <div className="absolute top-[30%] right-[50%] -translate-y-[19%] translate-x-[50%] md:translate-y-[50%]">
                <div className="flex flex-col text-center">
                  <span className="text-normal-landing font-semibold text-white">
                    January 30, 2021
                  </span>
                  <span className="text-anim-blog text-white text-[1.2rem] md:text-[2rem] font-semibold">
                    Migrating To The USA? Here Is A Consolidated Checklist
                  </span>
                </div>
              </div>
            </div>
            <div className="-mt-[15%] md:-mt-[8%] p-5 md:p-10 w-full">
              <div className="w-full h-fit bg-white rounded-sm md:rounded-md drop-shadow-lg p-5 md:p-10">
                <div className="flex flex-col gap-4">
                  <p className="text-[#333] text-xs xl:text-base font-light break-words">
                    When you are planning to pursue your ‘American Dream’, you
                    must get a few things ready on your front. Before you get
                    onto your flight to America, take a look at this checklist,
                    and prepare yourself accordingly:
                  </p>
                  <div>
                    {subContent.map((data, i) => {
                      return (
                        <div className="gap-4 flex" key={i}>
                          <div className="flex flex-row my-2 ml-8 gap-1">
                            <span className="text-[#333] text-xs xl:text-base font-light ">
                              {count++}.
                            </span>{" "}
                            &nbsp; &nbsp;
                            <div>
                              <p className="text-sm md:text-[1rem] heading-main text-[#333] break-words  font-semibold">
                                {data.header}{" "}
                              </p>
                              <span className="text-[#333] text-xs xl:text-base font-light break-words">
                                {data.content}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-4 mt-4 text-center w-full">
          <span className="text-[#b6b6b6] text-xl w-full self-center">
            Don&apos;t miss these stories;
          </span>
          <div className="p-5 md:p-10 grid grid-cols-1 w-full h-full gap-4 md:gap-4 xl:gap-10 md:grid-cols-3">
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                src="/blog/blog-7.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs  xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 29, 2021
                </span>
                <p className="blog-title">
                  Software and IT Industry In The USA
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
                  The business intelligence (BI) software industry is rapidly
                  becoming one of the leading software categories in terms of
                  market size.
                </p>
                <Link
                  href="/blogs/software-and-it-industry-in-the-usa"
                  passHref
                >
                  <span className="text-[#5d3eff] text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                src="/assets/landing/blog/blog_7.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs  xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 12, 2021
                </span>
                <p className="blog-title">
                  5 Ways To Learn New Skills To Boost Your CV
                </p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
                  When looking for a career change or wanting to get back into
                  the professional space after a break, it is highly essential
                  to have your CV updated with the right skills.
                </p>
                <Link
                  href="/blogs/5-ways-to-learn-new-skills-to-boost-your-cv"
                  passHref
                >
                  <span className="text-[#5d3eff] text-xs underline xl:font-semibold xl:text-sm cursor-pointer hover:text-primary-black">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-xl w-fit  h-full bg-white drop-shadow-xl">
              <img
                src="/blog/blog-8.jpg"
                className="w-full rounded-t-xl h-[40%]"
              />
              <div className="p-5 flex flex-col justify-evenly text-left gap-4">
                <span className="text-xs xl:text-sm text-[#5d3eff] xl:font-semibold">
                  April 5, 2021
                </span>
                <p className="blog-title">Networking At Your Workplace</p>
                <p className="text-[#4e5d78] text-xs xl:text-base font-light break-words h-fit">
                  Networking at your workplace isn’t far-fetched. After all
                  “it’s not what you know, it’s whom you know.” How many times
                  have you heard that being said?
                </p>
                <Link href="/blogs/networking-at-your-workplace" passHref>
                  <span className="text-[#5d3eff] text-xs underline xl:font-semibold xl:text-sm cursor-pointer">
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
