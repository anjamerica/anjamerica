import React from "react";
import Container from "../../common/Container";
import BreadCrumbList from "../../common/BreadCrumb";
import { useRouter } from "next/router";
import RelatedContent from "./RelatedContent";

export default function BLG10() {
  const router = useRouter();

  const points = [
    {
      title: "Visa",
      description:
        "Double check your visa details and carefully note the Entry and Exit dates speculated.",
    },
    {
      title: "Passport",
      description:
        "Check the expiry date of your passport. If it is about to expire, get it renewed before your travel. If you are going overseas for a longer duration, getting your passport renewed would be a challenge and cause a lot of complexities in the foreign country.",
    },
    {
      title: "Personal documents",
      description:
        "Keep the hard copies of all your personal documents safely - Passport, National ID Cards, Birth Certificate, Wedding certificate, International Driving license, and Bank statements. Also, get your essential documents photocopied before your travel.",
    },
    {
      title: "Adaptors",
      description:
        "Your electrical adaptor won’t be suitable for use in the U.S. You would require an adaptor that would be suitable for the electric sockets.",
    },
    {
      title: "Money",
      description:
        "Bring some local currency in case it’s needed after disembarking.",
    },
    {
      title: "Outstanding bills and debts",
      description:
        "Some companies are into this sector and are on the lookout for hardworking labors. Many uneducated immigrants take up jobs here.",
    },
    {
      title: "Pay Taxes on time",
      description:
        "Intimate your local tax office that you are going to be abroad and make sure you pay your taxes (house, personal) before your travel.",
    },
    {
      title: "Insurance",
      description:
        "Arrange the appropriate travel and health insurance for yourself and your family members.",
    },
    {
      title: "Sell/rent out your properties",
      description:
        "Do sell/rent the furniture, car, and other tangible properties before your travel. Else you can also ask your friends to look after your belongings during your absence.",
    },
    {
      title: "Bank Accounts",
      description:
        "If you have multiple bank accounts and you are not going to access them when you are on travel, you could close the accounts. This would also prevent the penalty from being charged to your account for not maintaining the required balance.",
    },
    {
      title: "Redirecting mails",
      description:
        "Inform your post office about your travel and ask them not to deliver any letters to your home. If required open a PO Box and ask the post office to re-direct all your mails to the PO Box.",
    },
    {
      title: "Medical Examination",
      description:
        "Get medical examinations done for you and your family, This would be necessary once you land in the United States. The immigration officials might ask for your medical reports upon arrival.",
    },
    ,
    {
      title: "Cost of Living",
      description:
        "Compute the cost of living for the place where you are going to stay in. This would give you a brief idea of how much you can save from your salary and also guide you during house-hunting.",
    },
    {
      title: "Pets",
      description:
        "You need not leave your pet(s) behind. You can obtain a health certificate from your local veterinarian and take your pet along with you. A health certificate is enough for taking your dog or cat. In case you have a feathered pet, you also need confirmation from your Government to take your bird along with you.",
    },
    {
      title: "Connectivity",
      description:
        "Create an online Skype account and share it with your friends and family. This would be helpful for you to stay in touch with them. Also, get an international SIM Card for your mobile phone. Once you land in the country, you would be able to make calls from your mobile phone and also inform them.",
    },
    {
      title: "American slang",
      description:
        "Familiarize yourself with a few American lingo statements to avoid confusion in the new country.",
    },
    {
      title: "Know the route",
      description:
        "Familiarize yourself with the route from the airport to your place of accommodation and your workplace.",
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
                  Migrating To The USA? Here Is A Consolidated Checklist
                </p>
              ),
            },
          ]}
        />
        <img
          src="/v2/images/blogs/b10.jpg"
          className="w-full h-[200px] md:h-[500px] mt-8 object-cover"
        />
      </div>
      <div className="mb-10 md:mb-14">
        <p className="font-light text-md md:text-lg">January 30, 2021</p>
        <p className="heading-1 md:my-3">
          Migrating To The USA? Here Is A Consolidated Checklist
        </p>
        <p className="text-md md:text-lg font-thin text-justify leading-[25px] md:leading-[40px] text-gray-tertiary">
          When you are planning to pursue your ‘American Dream’, you must get a
          few things ready on your front. Before you get onto your flight to
          America, take a look at this checklist, and prepare yourself
          accordingly:
        </p>
        <div className="w-full mt-3 md:mt-6 flex flex-col gap-4">
          {points?.map((item, i) => (
            <div key={i}>
              <p className="text-lg md:text-2xl">{item?.title}</p>
              <p className="text-md md:text-lg leading-[25px] md:leading-[40px] mt-2 md:mt-4 font-thin text-justify text-gray-tertiary">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-20">
          <RelatedContent ids={["ANJBLG-01", "ANJBLG-02", "ANJBLG-03"]} />
        </div>
      </div>
    </Container>
  );
}
