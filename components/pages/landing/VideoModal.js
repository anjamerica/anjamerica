import React from "react";
import { Modal } from "antd";

export default function VideoModal({ isModalVisible, handleCloseModal }) {
  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleCloseModal}
      className="modal-custom"
      footer={false}
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
        src="/V3/posters/poster.jpeg"
      />
    </Modal>
  );
}
