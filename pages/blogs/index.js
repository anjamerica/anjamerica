import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import BlogContent from "../../components/common/BlogContent";
import BlogContentSection from "../../components/common/BlogContentSection";

const Index = () => {
  const bannerContent = {
    title: "Explore the Latest in Technology and Innovation",
    description:
      "Stay updated with expert insights on tech trends, career tips, and business solutions that help you navigate today’s digital landscape",
    background: "blogs-banner",
    descriptionStyle: "max-w-[688px]",
    titleStyle: "max-w-[900px]",
  };

  const sectionPageContent = {
    img: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/blogs/blog_content_IMG.webp",
    date: "MARCH 8, 2021",
    title: "Points To Remember While Updating Your Resume!",
    description:
      "If there’s a task that one can never quite get acquainted with, no matter how many times they do it,it has to be updating a Resume.",
  };

  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <BlogContentSection item={sectionPageContent} />
      <BlogContent />
    </div>
  );
};

export default Index;
