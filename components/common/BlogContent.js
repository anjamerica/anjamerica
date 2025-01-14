export default function Solutions() {
  const services = [
    {
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/work-life.webp",
      title: "How to achieve Work-Life Balance",
      description:
        "Achieving work-life balance isn’t intangible or even impossible. It’s simply being able to handle the stress of your work and personal life on the go. The ultimate goal is that at the end of each day you go to bed with zero stress, and wake up the next morning with a smile on your face and a spring in your steps. Many people consider work and their personal lives to be two separate entities, when in fact they go hand-in-hand. Rather than trying to separate the two, this blog is aimed at helping you cope with both so that you can lead a stress-free and balanced life.",
      linkTo: "/blogs/how-to-acheive-work-life",
    },
    {
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/is-your-web-ready.webp",
      title: "Is Your Website Ready For A Mobile-First World",
      description:
        "With the extraordinary increase and usage of smart devices like mobile phones and tablets, Google has decided to do an innovative change in the way its search engines work. Based on the quality and responsiveness of a website’s mobile version, Google will rank it high or low. So, the way your mobile website works will determine your search engine ranking. Mobile optimization is a crucial factor for small and large enterprises and businesses. If your company’s website doesn’t have an optimized mobile responsive website then it’s time to make it ideal for a mobile-first world..",
      linkTo: "/blogs/is-your-website-ready",
    },
    {
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/job-scenario.webp",
      title: "Job Scenario in the USA for Immigrants",
      description:
        "Transform your systems with AI-driven intelligence. Our services include predictive analytics, automation, and AI-powered tools like chatbots and virtual assistants to enhance efficiency and decision-making.",
      linkTo: "/blogs/job",
    },
    {
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/importance-of-dev.webp",
      title: "The Importance of Scalable Web Development",
      description:
        "Leverage the scalability and flexibility of the cloud with our cutting-edge solutions. From SaaS applications to full cloud migration, we future-proof your business operations.",
      linkTo: "/blogs/web-developement",
    },
    {
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/migrating-to-usa.webp",
      title: "Migrating To The USA? Here Is A Consolidated Checklist",
      description:
        "Expand your digital presence with intuitive and user-friendly mobile applications for iOS and Android, crafted to elevate customer experiences and engage your audience.",
      linkTo: "/blogs/checklist",
    },
    {
      image:
        "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/cloud-management.webp",
      title: "What is Cloud Management?",
      description:
        "Build and scale your online presence with secure and dynamic e-commerce platforms. From storefront design to payment integration, we provide end-to-end solutions for online success.",
      linkTo: "/blogs/management",
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
        Todays News
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
        className="text-xl text-center leading-[40px] md:leading-[57px] md:text-[40px] font-light max-w-[927px]"
      >
        Stay Updated with the Latest Innovations and Milestones from ANJ America
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1300px] flex flex-wrap gap-5 rounded-lg">
          {services?.map((item, i) => (
            <Card item={item} key={i} i={i} />
          ))}
        </div>
      </div>
      <section className="h-1" id="talent-solutions"></section>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="relative mx-auto flex flex-col gap-6 w-full md:w-[49%] items-center">
      <div className="relative  w-full h-[440px] lg:min-h-[610px]">
        <img
          className="w-full h-full rounded-[20px] lg:min-h-[610px] object-cover"
          src={item?.image}
          alt={item?.title}
        />
        {/* sub Card */}
        <div className="absolute bottom-0 left-0  bg-white py-4 h-[110px] w-[412px]  rounded-tr-[25px]">
          <img
            className="absolute bottom-0 -right-5 w-5 h-5 object-contain"
            src="/V3/blogs/rounded-triangle.svg"
          />
          <img
            className="absolute -top-5 left-0 w-5 h-5 object-contain"
            src="/V3/blogs/rounded-triangle.svg"
          />
          <p className="text-sm font-bold mb-2 text-gray-900">{item?.title}</p>
          <p className="text-sm text-gray-dark mb-3 text-ellipsis whitespace-nowrap overflow-hidden">
            {item?.description}
          </p>
          <a
            href={item?.linkTo}
            className="flex items-center cursor-pointer text-orange-primary text-md gap-2 hover:underline"
          >
            More Info
            <img
              src="/V3/logos/common/arrow.svg"
              className="w-5 h-3 object-contain"
              alt="arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
