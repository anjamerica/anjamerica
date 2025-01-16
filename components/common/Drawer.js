import React, { useEffect } from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = ""; // Re-enable background scroll
    }

    return () => {
      document.body.style.overflow = ""; // Ensure cleanup on unmount
    };
  }, [isOpen]);
  return (
    <>
      {isOpen ? (
        <main
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={`fixed top-0 left-0 w-screen h-screen rounded-t-2xl sm:rounded-tr-2xl overflow-hidden inset-0 z-50 bg-gray-900 bg-opacity-25 transform ease-in-out ${
            isOpen
              ? "transition-opacity opacity-100 duration-500 translate-x-0"
              : "transition-all delay-500 opacity-0 translate-x-full"
          }`}
        >
          {/* Drawer Content */}
          <section
            className={`absolute right-0 z-50 top-0 h-full max-w-md w-full bg-white shadow-xl transition-all duration-500 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <article className="relative h-full overflow-y-scroll flex flex-col">
              {children}
            </article>
          </section>

          {/* Background Overlay (Click to Close) */}
          <section
            className="absolute inset-0 z-0"
            onClick={() => setIsOpen(false)}
          ></section>
        </main>
      ) : null}
    </>
  );
}
