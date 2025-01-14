import React from "react";

export default function Index() {
  const items = [
    {
      title: "1.1 Personal Information:",
      para: "We may collect personal information that you voluntarily provide, including:",
      list: [
        "Name, email address, phone number, and other contact details.",
        "Payment and billing information when purchasing our products or services.",
        "Resume or other details provided during talent acquisition or staffing inquiries.",
      ],
    },
    {
      title: "1.2 Automatically Collected Information:",
      para: "When you interact with our Services, we collect technical and usage data such as:",
      list: [
        "IP address, browser type, operating system, and device information.",
        "Pages viewed, time spent, and navigation patterns on the website.",
        "Cookies and tracking technologies to enhance your experience and for analytics purposes.",
      ],
    },
    {
      title: "How We Use Your Information",
      list: [
        "Provide and improve our Services.",
        "Personalize your experience, including tailored recommendations.",
        "Respond to your inquiries and communicate important updates.",
        "Process payments and fulfill service requests.",
        "Ensure compliance with applicable legal obligations.",
      ],
    },
    {
      title: "How We Share Your Information",
      list: [
        "With Service Providers: To trusted vendors and service providers who help operate our Services (e.g., payment processors, IT support).",
        "For Legal Purposes: To comply with applicable laws, regulations, or legal processes.",
        "For Business Operations: In connection with a merger, acquisition, or sale of assets.",
        "With Consent: When you explicitly agree to share your information for specific purposes.",
      ],
    },
    {
      title: "Cookies and Tracking Technologies",
      list: [
        "Recognize and improve your experience on subsequent visits.",
        "Provide analytics about site usage and performance.",
        "Deliver relevant advertisements.",
      ],
    },
    {
      title: "Data Retention and Security",
      list: [
        "We retain your information only as long as necessary to fulfill the purposes described above or as required by law.",
        "We employ industry-standard security measures to safeguard your data, including encryption, firewalls, and secure access protocols. However, no system can guarantee complete security.",
      ],
    },
    {
      title: "Your Rights",
      list: [
        "Access: Request a copy of your personal information.",
        "Correction: Ask us to correct inaccuracies in your information.",
        "Deletion: Request that we delete your personal data.",
        "Opt-Out: Revoke consent for certain data collection or processing practices.",
      ],
    },
    {
      title: "Third-Party Links",
      list: [
        "Our website may contain links to third-party sites. We are not responsible for their privacy practices. Please review their policies before providing your data.",
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
          Privacy Notice
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="w-full text-lg md:text-[22px] mt-6 md:mt-10 text-center leading-[30px] opacity-80 font-medium max-w-[1107px]"
        >
          ANJ America is committed to protecting your privacy. This policy
          outlines how we collect, use, and safeguard your information when you
          access our website or services.
        </p>
      </div>
      <div className="rounded-[20px] flex flex-col gap-3 p-5 my-5 bg-white">
        <p className="font-bold text-base">Information We Collect</p>
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

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="mt-3 opacity-80 leading-[30px] text-justify md:text-start"
        >
          <p className="font-bold text-base">Contact Us</p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at: Email:&nbsp;
          <a href="mailto:info@anjamerica.com" className="text-[#3561E1]">
            info@anjamerica.com
          </a>
          .
        </div>
      </div>
    </div>
  );
}
