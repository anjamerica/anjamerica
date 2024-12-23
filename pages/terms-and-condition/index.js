import React from "react";

export default function Index() {
  const items = [
    {
      title: "Use of the Website and Services",
      list: [
        "Respect Our Policies and Laws: When using our Services, you agree to comply with these Terms and all applicable laws and regulations.",
        "No Unauthorized Access: Accessing our Services through means other than the approved, publicly available methods is prohibited. For example, you cannot scrape, reverse engineer, or disrupt our systems without explicit permission.",
      ],
    },
    {
      title: "Intellectual Property and Content Ownership",
      list: [
        "Your Rights: You retain ownership of the content you upload or share via our Services but grant ANJ America a license to use, display, and distribute it to provide the Services effectively.",
        "Our Rights: We provide you with a license to use the tools and technologies available on our platform, strictly for the purpose of engaging with and benefiting from our Services.",
      ],
    },
    {
      title: "Advertising and Marketing",
      list: [
        "In accessing and using the Services, you may encounter advertising content. We or our partners may display relevant advertisements tailored to your usage preferences.",
      ],
    },
    {
      title: "Enforcement of Terms",
      list: [
        "Prohibited Conduct: Violations of our Terms may lead to corrective actions such as restricting your account access, content removal, or termination of Services.",
        "Inactivity or Non-Compliance: Prolonged inactivity or non-compliance with the agreement may result in account suspension or deletion.",
      ],
    },
    {
      title: "Liability and Limitations",
      list: [
        "Use At Your Own Risk: Our Services are provided on an “AS IS” and “AS AVAILABLE” basis without warranties of any kind.",
      ],
    },
    {
      title: "Redress Mechanisms and Termination",
      list: [
        "Dispute Resolution: If you believe your rights have been violated, we offer channels for disputes, including communication with our legal team.",
        "Termination: You may end your engagement with our Services by deactivating your account and ceasing usage.",
      ],
    },
  ];
  return (
    <div className="w-full -mt-[62px]">
      <div className="w-full flex flex-col items-center rounded-[20px] p-5 pt-[145px] bg-white">
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          className="text-2xl md:text-[60px] text-center font-bold"
        >
          Terms and Conditions
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="w-full text-lg md:text-[22px] mt-6 md:mt-10 text-center leading-[30px] opacity-80 font-medium max-w-[1107px]"
        >
          Welcome to ANJ America! By accessing or using our website, you agree
          to comply with and be bound by the following terms and conditions.
          Please review these terms carefully.
        </p>
      </div>
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
              className="flex flex-col gap-1 pl-2"
            >
              {item?.list?.map((item, i) => (
                <p
                  className="text-gray-dark  text-justify md:text-start"
                  key={i}
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="mt-3 opacity-80 leading-[30px]  text-justify md:text-start"
        >
          By using our Services, you acknowledge that you are at least 13 years
          old and have understood these Terms. Let ANJ America empower your
          digital transformation with AI innovation, exceptional talent, and
          industry-specific software solutions. For any questions or
          clarifications, feel free to contact us via{" "}
          <a href="mailto:info@anjamerica.com" className="text-[#3561E1]">
            info@anjamerica.com
          </a>
          .
        </div>
      </div>
    </div>
  );
}
