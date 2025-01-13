import React from "react";

const Journey = () => {
  const services = [
    {
      image: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/journey1.webp",
      title: "Personal Well-Being",
      description:
        "We’ve Got Your Back!  At ANJ America Inc., we know our success starts with you. That’s why we’re committed to prioritizing your well-being. From thoughtful programs to supportive processes, everything we do is designed to keep our teams healthy, happy, and thriving.",
    },
    {
      image: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/journey2.webp",
      title: "Flexible Work Model",
      description:
        "We believe work should fit into your life—not the other way around. That’s why we offer the flexibility to work in a way that suits you best. Whether you thrive in the comfort of your home, enjoy the energy of the office, or prefer a little of both, our remote, in-office, and hybrid options let you choose what works for you.",
      linkTo: "/solutions/custom-software-solutions",
    },
    {
      image: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/journey3.webp",
      title: "work-life Balance",
      description:
        "Your well-being matters to us. That’s why we offer an Employee Assistance Program and paid sick leave to support you when life gets challenging. Whether you need time to recover, access to helpful resources, or someone to talk to, we’re here to help you maintain a healthy balance between work and life.",
      linkTo: "/solutions/ai-powered-software-solutions",
    },
    {
      image: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/journey4.webp",
      title: "Well-being",
      description:
        "Your health and happiness are our priorities. We offer virtual and on-demand programs designed to support your physical and mental well-being, so you can feel your best—wherever you are.",
      linkTo: "/solutions/cloud-based-software-solutions",
    },
  ];
  return (
    <div className="w-full p-5 md:pb-0 mt-2 md:mt-5 mb-2 md:mb-5 md:px-5 md:pt-5 pt-8 bg-white rounded-[20px] flex flex-col gap-6 items-center justify-center">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-lg text-center pt-5 uppercase text-orange-primary font-bold"
      >
        Life at ANJ America{" "}
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
        className="text-xl text-center leading-[40px] md:leading-[57px] md:text-[40px] font-light max-w-[927px]"
      >
        Start enjoying ANJ America's <br />
        competitive benefits from day one
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex -mb-2 flex-col mt-5 md:mt-20 gap-10 lg:gap-14 xl:gap-20">
          {services?.map((item, i) => (
            <Card item={item} key={i} i={i} />
          ))}
        </div>
      </div>
      <section className="h-1" id="talent-solutions"></section>
    </div>
  );
};

function Card({ item, i }) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row justify-between items-center ${
        i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
        className="w-[498px] h-[352px]  rounded-lg object-cover flex items-end"
        src={item?.image}
      />
      <div
        className={`flex flex-col max-w-[500px] gap-3 ${
          i > 0 && i % 2 !== 0 && "md:pl-6 lg:pl-14"
        }`}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
      >
        <p className="text-xl md:text-[30px]  font-bold">{item?.title}</p>
        <p className="text-base text-[#1E1E1E] text-justify md:text-start font-light leading-[29px]">
          {item?.description}
        </p>
        {/* <a
          href={item?.linkTo}
          className={`mt-3 flex items-center cursor-pointer gap-4 `}
        >
          <p className="text-orange-primary text-md">More Info</p>
          <img
            src="/V3/logos/common/arrow.svg"
            className="w-10 h-3 object-contain text-orange-primary"
          />
        </a> */}
      </div>
    </div>
  );
}

export default Journey;
