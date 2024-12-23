import React, { useState } from "react";
import { Modal } from "antd";

export default function VideoModal({ isModalVisible, handleCloseModal }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Modal
      title="Welcome!"
      visible={isModalVisible && isImageLoaded}
      onCancel={handleCloseModal}
      className="modal-custom"
    >
      {/* <video
        controls
        width="100%"
        className="w-fit h-[60vh]"
        src="https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/videos/h1b.mp4"
      >
        Your browser does not support the video tag.
      </video> */}
      <img
        className="w-fit h-[70vh] object-contain"
        src="/V3/posters/poster.png"
        onLoad={handleImageLoad}
      />
    </Modal>
  );
}
