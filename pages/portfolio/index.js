import React from "react";

import Banner from "../../components/common/Banner";
import Container from "../../components/common/Container";

export default function Index() {
  const bannerContent = {
    title: "Showcasing Our Expertise",
    description:
      "We specialize in app and web development, enhancing user experiences with intuitive UI/UX design and impactful branding. Our solutions combine technical excellence with creative design to meet your goals.",
    bannerStyle: "banner-bg-portfolio",
  };

  const images = [
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/1.png",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/2.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/3.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/4.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/5.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/6.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/7.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/8.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/9.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/10.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/11.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/12.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/13.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/14.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/15.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/16.png",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/17.png",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/18.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/19.jpg",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/20.png",
    "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/pics/21.png",
  ];

  return (
    <div>
      <Banner item={bannerContent} />
      <Container>
        <div className="my-10 md:my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {images?.map((item, i) => (
            <img
              key={i}
              className="w-full h-fit object-contain rounded-[20px]"
              src={item}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
