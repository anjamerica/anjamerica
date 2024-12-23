import React, { useEffect, useState } from "react";
import HeaderV3 from "../components/common/HeaderV3";
import FooterV3 from "../components/pages/landing/FooterV3";
// import VideoModal from "../components/pages/landing/VideoModal";
import { notification } from "antd";

export default function DefaultLayout({ children }) {
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        notification.open({
          duration: 0,
          description: (
            <div className="bg-[#f8f8f8]">
              <img
                className="w-fit h-fit  object-contain"
                src="/V3/posters/poster.jpeg"
              />
            </div>
          ),
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    localStorage.setItem("hasSeenModal", "true");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-[8px] md:top-5 z-50 header-pos sticky-header ">
        <HeaderV3 />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-2 md:px-5 md:py-5">{children}</div>

      {/* Footer */}
      <div className="mt-auto px-2 md:px-5">
        <FooterV3 />
      </div>
    </div>
  );
}
