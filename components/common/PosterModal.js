import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const PosterModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null; // Don't render modal if not visible

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg w-fit h-fit shadow-lg">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-800 focus:outline-none"
        >
          <IoCloseCircleOutline className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="flex p-0 justify-center items-center">{children}</div>
      </div>
    </div>
  );
};

export default PosterModal;
