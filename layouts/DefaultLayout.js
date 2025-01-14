import React, { useEffect, useState } from "react";

import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";

import HeaderV3 from "../components/common/HeaderV3";
import FooterV3 from "../components/pages/landing/FooterV3";
import PosterModal from "../components/common/PosterModal";

export default function DefaultLayout({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalVisible(true);
      }, 1000);

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

      {/* Ant Design Modal */}
      {/* <Modal
        visible={isModalVisible}
        footer={null}
        closable={true}
        centered
        width={400}
        closeIcon={
          <IoCloseCircleOutline
            onClick={handleCloseModal}
            className="text-white z-10 w-5 h-5 cursor-pointer"
          />
        }
      >
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="w-[400px] h-[500px] object-contain"
            src="/V3/posters/poster.jpeg"
            alt="Poster"
          />
        </div>
      </Modal> */}

      <PosterModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        children={
          <div className="w-full h-full flex justify-center items-center">
            <img
              className="w-[400px] h-[500px] object-contain"
              src="/V3/posters/poster.jpeg"
              alt="Poster"
            />
          </div>
        }
      />
    </div>
  );
}
