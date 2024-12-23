import React from "react";
import { Modal } from "antd";

export default function VideoModal({ isModalVisible, handleCloseModal }) {
  return (
    <Modal
      title="Welcome!"
      visible={isModalVisible}
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
        src="https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/assets/posters/Brown+Modern+Illustration+United+States+(USA)+Promotion+Travel+Poster.png"
      />
    </Modal>
  );
}
