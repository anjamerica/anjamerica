import React from "react";

export default function News() {
  const news = [
    {
      para: `<p className="text-[15px] font-normal leading-[28px] text-[#1E1E1E]">ANJ America is sponsoring H1-B Visa 2025 - Apply now and take the first step toward your dream job in the USA by sending your resume to <a href="mailto:h1-b@anjamerica.com" className="text-blue-primary">h1-b@anjamerica.com.</span></p>`,
      video:
        "https://res.cloudinary.com/dgrnzdcvg/video/upload/v1737009832/lv_0_20240111133943_2_n1f2o5.mp4",
    },
    {
      para: `<p className="text-[15px] font-normal leading-[28px] text-[#1E1E1E]">Our amazing team at ANJ America brings innovation, expertise, and passion to turn ideas into reality and drive success for our clients</p>`,
      video:
        "https://res.cloudinary.com/dgrnzdcvg/video/upload/v1737009983/Onam_fodrbm.mp4",
    },
    {
      para: `<p className="text-[15px] font-normal leading-[28px] text-[#1E1E1E]">We foster a collaborative, inclusive culture that promotes creativity, open communication, and continuous growth, empowering our team to succeed together.</p>`,
      video:
        "https://res.cloudinary.com/dgrnzdcvg/video/upload/v1737010205/Snapinst.app_video_AQOLbTzVgMMvOWnsZzYxQxQofLvnbcCRLrqIxyLIOZCKu22BFSbHXfAydKjaC3Fo8Fkmll3tFzbdYVfv4sHn5MS459FhYVwBGg_wyrg_sr52a9.mp4",
    },
    {
      para: `<p className="text-[15px] font-normal leading-[28px] text-[#1E1E1E]">We prioritise knowledge transfer to ensure smooth collaboration, continuous learning, and seamless team growth.</p>`,
      video:
        "https://res.cloudinary.com/dgrnzdcvg/video/upload/v1737010320/lv_0_20240405114149_1_mowvve.mp4",
    },
  ];
  return (
    <div className="w-full p-5 md:pb-0 mb-3 md:mb-5 md:px-5 md:pt-5 pt-8 bg-white rounded-[20px] flex flex-col gap-6 items-center justify-center">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="text-lg text-center pt-5 uppercase text-orange-primary font-bold"
      >
        Today&apos;s News
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
        <div className="w-full max-w-[1200px] grid grid-cols-1 gap-6 sm:grid-cols-2">
          {news?.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </div>
      </div>
      <section className="h-1" id="talent-solutions"></section>
    </div>
  );
}

function Card({ item }) {
  return (
    <div
      data-aos="zoom-in"
      className="relative w-full flex flex-col gap-6 items-center"
    >
      <div className="relative w-full h-[440px] lg:min-h-[610px]">
        {/* Video element */}
        <video
          className="w-full h-full rounded-[20px] lg:min-h-[610px] object-cover"
          src={item?.video}
          autoPlay
          loop
          muted
        />
        <div className="absolute bottom-0 left-0 bg-white pt-4 md:py-4 h-fit md:h-[110px] md:w-[412px] rounded-tr-[25px]">
          <img
            className="absolute bottom-0 -right-[19px] w-5 h-5 object-contain"
            src="/V3/blogs/rounded-triangle.svg"
            alt="decorative-triangle"
          />
          <img
            className="absolute -top-[19px] left-0 w-5 h-5 object-contain"
            src="/V3/blogs/rounded-triangle.svg"
            alt="decorative-triangle"
          />
          <div
            dangerouslySetInnerHTML={{ __html: item?.para }}
            className="text-[15px] text-gray-dark mb-3 mr-3 leading-[28px]"
          />
        </div>
      </div>
    </div>
  );
}
