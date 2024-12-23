import React, { useEffect, useState } from "react";
import HeaderV3 from "../components/common/HeaderV3";
import FooterV3 from "../components/pages/landing/FooterV3";
import VideoModal from "../components/pages/landing/VideoModal";

export default function DefaultLayout({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    localStorage.setItem("hasSeenModal", "true");
    setIsModalVisible(false);
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

      <VideoModal
        isModalVisible={isModalVisible}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}
