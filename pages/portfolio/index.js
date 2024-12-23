import React from "react";

import Banner from "../../components/common/Banner";
import Container from "../../components/common/Container";
import BannerV2 from "../../components/common/BannerV2";

export default function Index() {
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

  const bannerContent = {
    title: "Showcasing Our Expertise",
    description:
      "Pioneering App & Web Solutions with Exceptional UI/UX Design and Impactful Branding",
    background: "portfolio-banner",
  };

  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
        {images?.map((item, i) => (
          <img
            key={i}
            className="w-full h-fit object-contain rounded-[20px]"
            src={item}
          />
        ))}
      </div>
    </div>
  );
}
