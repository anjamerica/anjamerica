import React from "react";
import BannerV2 from "../../components/common/BannerV2";
import ServiceContent from "../../components/common/ServiceContent";

export default function Index() {
  const bannerContent = {
    title: "Collaboration and Communication Tools",
    description:
      "We provide advanced collaboration and communication tools to enhance teamwork, streamline communication, and boost productivity, enabling seamless interaction among teams, clients, and partners, regardless of location.",
    background: "banner-bg-cct",
  };

  const servicePageContent = {
    img: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/solutions/cct.svg",
    title:
      "We provide tools for messaging, video conferencing, project management, and file sharing, tailored to your business for seamless communication and collaboration.",
    para: [
      "Our suite of Collaboration and Communication Tools includes instant messaging and chat platforms for real-time communication, integrated file sharing, and notifications. We also offer high-quality video conferencing solutions, enabling seamless virtual meetings, presentations, and team collaborations. Project management tools help you organize tasks, track progress, and manage workflows efficiently, while document-sharing platforms enable secure, real-time document collaboration and editing.",
      "With team collaboration software, you can boost productivity through shared calendars, task management, and centralized communication channels. [Your Company Name]'s solutions help your teams work smarter, collaborate effortlessly, and stay connected anywhere, driving better outcomes and fostering innovation.",
    ],
  };
  return (
    <div className="-mt-[62px]">
      <BannerV2 item={bannerContent} />
      <ServiceContent item={servicePageContent} />
    </div>
  );
}
