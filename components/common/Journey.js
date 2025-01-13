import React from "react";

const Journey = () => {
  const services = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c26a/7bbb/e6a5b5337b76d9fe0186ec0e7f16d977?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foHeHtoNvlBfGcF~0JBug0Ad9869lWrhOxN7O5HzBAn79pmBqvcIkDdNxg~l49sYZy07278ifDtKAOdIa9vRfWPOsjL8Gm8t8GtzbC07Jron8vCf7fYaoa8Uf2nEdWDBUexJIlw1S7i9-DSkamshuRVSe-puv9RKZJn2n6WQMc6v8~uas9lYOt~b~wVM6dLU5cLac~~SHnN4WgcGXSYMJ3h3E2n6x4FzJp~30cf4J~fe~YIP3ymGa9YRhlViU~GGUJx2knyamOXQx-wQUUGX3apSa17KUYMyU0mVEa7luogWxK~3-Gmvun0oZS2LNmgxJR2uVNwrr-seweWdvRVudA__",
      title: "Personal Well-Being",
      description:
        "We’ve Got Your Back!  At ANJ America Inc., we know our success starts with you. That’s why we’re committed to prioritizing your well-being. From thoughtful programs to supportive processes, everything we do is designed to keep our teams healthy, happy, and thriving.",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/71b2/f2a9/0a6d0f319a3cd9d169523c9e6530620a?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N4Io6zTmxCq~7-QGymjRF7x8RyVX2NCY8MJigGASFUVrdXIDglibjwHomNlf5Y5-8WFPYoPu2aY9GjnRbwb9XUCI8sxCQXUFtq5VaBFIsW1-wG-Da9KuGDRrFS60QBB9hZNque2YndWysAWm4w3kZmlJpWb0AK0InYmRDW3htJTLIi4uUPLoSC2xB7rxMs02FJvqxEZwzXfQdvsxnrc3zWXxTY00YCRJpU7ax-khNqtA8rPgo5PjDnsLpCpDhV-epmFgUCEHz8xAOzjvYJfney1DBGM7u-lE44I9mdhSV-Xvswo~CPUUaZUFJ8eukptkIQ3~O9EGday6bLVT1DF8YQ__",
      title: "Flexible Work Model",
      description:
        "We believe work should fit into your life—not the other way around. That’s why we offer the flexibility to work in a way that suits you best. Whether you thrive in the comfort of your home, enjoy the energy of the office, or prefer a little of both, our remote, in-office, and hybrid options let you choose what works for you.",
      linkTo: "/solutions/custom-software-solutions",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/4898/2c33/ffd42209fee50b262577f83cc4f9cfbe?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpyDPvsBuYYay6S0ruGeqgLlG0ksHlzTfEAp6vCZ4cq~g6iTM~FdNp9rCDivxgj190jTKpxCjjci1LzfkX3wpax73~1nAZpaQinfpnf1vChVpsiTCidu9uHEjnxAQYHPzUwPx0Ke7H1taHwXpq-7n24EEW2admsGxa05jAnj~MCo-Z2-~SuUWynH4e5ncTL-Aq8EOgLqpECAJOZjVbXVkHsxE0CFgbnBfkwwPSBMPBxqCNlMGVPJY593KqfPvcqphWyBCT-Hrbfc6WrWUPPthzIM546nlwI2eP-lX0b6xhMXLJDDb7oTRTZtLP4zcq-t3GmP3afuqbE4~qpRq3kxEg__",
      title: "work-life Balance",
      description:
        "Your well-being matters to us. That’s why we offer an Employee Assistance Program and paid sick leave to support you when life gets challenging. Whether you need time to recover, access to helpful resources, or someone to talk to, we’re here to help you maintain a healthy balance between work and life.",
      linkTo: "/solutions/ai-powered-software-solutions",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/9607/b7c2/357fee6cdb2e1e0da3c9a11b62bb53d4?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvdp45Yn2Vv9qdaptavC~gYQwsOC3LkVAlj3JyEh~pjfV7K7xTpEpFwZvJD5k7MqjLBSgL063IgD7heGBFX0Lzq7tar~F29YRT4gnKDtq6J~vqh415CxYV2gNlCbV~KLB4GmodGLDpAd5rRZy3-wX3UpVbnXyxagzgKr2pN3RXBI~vGzG2FIhY7VSa0OHeuJyVwfkLT6QQX8xpgJkrpubtWX~BuYNtJ1ojEpEFqxxLbx~wnVYcg4DuElJ1JJ5517WpEmer~40UdHs9NO4wugM-d~PtEdnHBQLcowY6TKfE2aFawfQT~Eni7~rN4h5TAQDOPcbZIparNesrAXOdBKZg__",
      title: "Well-being",
      description:
        "Your health and happiness are our priorities. We offer virtual and on-demand programs designed to support your physical and mental well-being, so you can feel your best—wherever you are.",
      linkTo: "/solutions/cloud-based-software-solutions",
    },
  ];
  return (
    <div className="w-full p-5 md:pb-0 md:px-5 md:pt-5 pt-8 bg-white rounded-[20px] flex flex-col gap-6 items-center justify-center">
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
