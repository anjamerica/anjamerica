import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import Journey from "../../components/common/Journey";
import ImageGallery from "../../components/pages/landing/Gallery";
import Growth from "../../components/common/growth";

const workwithus = () => {
  const bannerContent = {
    title: "Let’s Build Something Amazing Together at ANJ America !",
    description:
      "Do you love connecting with people, helping them find exciting opportunities,and being part of the future of work? If so, we want to meet you!",
    background: "workwithus-banner",
    titleStyle: "max-w-[929px]",
    descriptionStyle: "max-w-[835px]",
  };

  const growthPageContent = {
    img: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/growthimg.webp",
    para: [
      "At ANJ America Inc., we’re all about fostering strong relationships, celebrating each other’s wins, and creating an environment where collaboration and camaraderie thrive. We believe work should be meaningful and fun, and we’re committed to supporting each team member as they strive for excellence.",
      "Consistently recognized as one of the best companies to work for, we offer incredible job opportunities across the U.S. Whether you’re just starting out or looking to take your career to the next level, we’ll be here to support you with resources, growth opportunities, and a community that truly cares.",
      "Ready to take the next step in your journey? Let’s grow together!",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <Growth item={growthPageContent} />
      <Journey />
      <ImageGallery />
    </div>
  );
};

export default workwithus;
