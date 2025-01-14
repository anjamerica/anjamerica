import React from "react";

export default function Index() {
  const items = [
    {
      title: "Accessible Design",
      para: "We are committed to designing our website with:",
      list: [
        "Text alternatives for non-text content (e.g., images, videos) to provide descriptions for screen readers.",
        "Keyboard navigation to allow easy navigation without a mouse.",
        "Clear and simple layout with high contrast, text resizing options, and legible fonts to accommodate various needs.",
      ],
    },
    {
      title: "Ongoing Improvements",
      para: "We continuously test and improve the accessibility of our website and services. This includes:",
      list: [
        "Regular assessments of our site’s accessibility features.",
        "Updating content to enhance ease of use for all visitors.",
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
          Accessibility Policy
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="w-full text-lg md:text-[22px] mt-6 md:mt-10 text-center leading-[30px] opacity-80 font-medium max-w-[1118px]"
        >
          ANJ America is committed to ensuring equal access to our website and
          services for all users, including those with disabilities. This policy
          outlines our efforts to make our digital platforms accessible and
          user-friendly.
        </p>
      </div>
      <div className="rounded-[20px] flex flex-col gap-3 p-5 my-5 bg-white">
        <p className="font-bold text-base">Commitment to Accessibility</p>
        <p className="text-gray-dark text-justify">
          We strive to adhere to recognized accessibility standards and
          guidelines, such as the Web Content Accessibility Guidelines (WCAG)
          2.1. Our goal is to make our website and services accessible to users
          with diverse abilities.
        </p>
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
          <p className="font-bold text-base">User Feedback</p>
          We welcome feedback and encourage you to contact us if you encounter
          accessibility barriers on our website or in our services. Your input
          helps us make necessary adjustments. Email:&nbsp;
          <a href="mailto:info@anjamerica.com" className="text-[#3561E1]">
            info@anjamerica.com
          </a>
          .
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="mt-3 opacity-80 leading-[30px] text-justify md:text-start"
        >
          <p className="font-bold text-base">Compliance with Standards</p>
          While we aim to achieve high standards of accessibility, we recognize
          that some issues may arise. We are committed to addressing these
          promptly and aligning with applicable accessibility laws, including
          the Americans with Disabilities Act (ADA).
          <p>
            {" "}
            By using our website and services, you support our mission to
            provide a more inclusive digital experience for all users.
          </p>
        </div>
      </div>
    </div>
  );
}
