import React from "react";
import BannerV2 from "../../../components/common/BannerV2";

const Checklist = () => {
  const bannerContent = {
    title: "Migrating To The USA? Here Is A consolidated Checklist",
    description:
      "When you are planning to pursue your ‘American Dream’, you must get a few things ready on your front.",
    background: "checklistimg",
    descriptionStyle: "max-w-[600px]",
    titleStyle: "max-w-[900px]",
  };
  const items = [
    {
      title: "Visa:",
      para: "Double check your visa details and carefully note the Entry and Exit dates speculated.",
    },
    {
      title: "Passport:",
      para: "Check the expiry date of your passport. If it is about to expire, get it renewed before your travel. If you are going overseas for a longer duration, getting your passport renewed would be a challenge and cause a lot of complexities in the foreign country.",
    },
    {
      title: "Personal documents:",
      para: "Keep the hard copies of all your personal documents safely - Passport, National ID Cards, Birth Certificate, Wedding certificate, International Driving license, and Bank statements. Also, get your essential documents photocopied before your travel.",
    },
    {
      title: "Adaptors:",
      para: "Your electrical adaptor won’t be suitable for use in the U.S. You would require an adaptor that would be suitable for the electric sockets.",
    },
    {
      title: "Money:",
      para: "Bring some local currency in case it’s needed after disembarking.",
    },
    {
      title: "Outstanding bills and debts:",
      para: "If there is any outstanding debt, do clear it out before migrating. This would have an impact on your credit rating after you return.",
    },
    {
      title: "Pay Taxes on time:",
      para: "Intimate your local tax office that you are going to be abroad and make sure you pay your taxes (house, personal) before your travel.",
    },
    {
      title: "Insurance:",
      para: "Arrange the appropriate travel and health insurance for yourself and your family members.",
    },
    {
      title: "Sell/rent out your properties:",
      para: "Do sell/rent the furniture, car, and other tangible properties before your travel. Else you can also ask your friends to look after your belongings during your absence.",
    },
    {
      title: "Bank Accounts:",
      para: "If you have multiple bank accounts and you are not going to access them when you are on travel, you could close the accounts. This would also prevent the penalty from being charged to your account for not maintaining the required balance.",
    },
    {
      title: "Redirecting mails:",
      para: "Inform your post office about your travel and ask them not to deliver any letters to your home. If required open a PO Box and ask the post office to re-direct all your mails to the PO Box.",
    },
    {
      title: "Medical Examination:",
      para: "Get medical examinations done for you and your family, This would be necessary once you land in the United States. The immigration officials might ask for your medical reports upon arrival.",
    },
    {
      title: "Cost of Living:",
      para: "Compute the cost of living for the place where you are going to stay in. This would give you a brief idea of how much you can save from your salary and also guide you during house-hunting.",
    },
    {
      title: "Pets:",
      para: "You need not leave your pet(s) behind. You can obtain a health certificate from your local veterinarian and take your pet along with you. A health certificate is enough for taking your dog or cat. In case you have a feathered pet, you also need confirmation from your Government to take your bird along with you.",
    },
    {
      title: "Connectivity:",
      para: "Create an online Skype account and share it with your friends and family. This would be helpful for you to stay in touch with them. Also, get an international SIM Card for your mobile phone. Once you land in the country, you would be able to make calls from your mobile phone and also inform them.",
    },
    {
      title: "American slang:",
      para: "Familiarize yourself with a few American lingo statements to avoid confusion in the new country.",
    },
    {
      title: "Know the route:",
      para: "Familiarize yourself with the route from the airport to your place of accommodation and your workplace.",
    },
  ];
  return (
    <div className="w-full -mt-[62px]">
      <BannerV2 item={bannerContent} />
      <div className="rounded-[20px] flex flex-col gap-3 p-5 mt-5 bg-white">
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

export default Checklist;
