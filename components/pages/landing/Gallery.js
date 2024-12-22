import React from "react";

export default function ImageGallery() {
  const images = new Array(28).fill(0).map((_, i) => ({
    src: `https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/gallery/${
      i + 1
    }.jpg`,
  }));

  return (
    <div className="rounded-[20px] overflow-hidden">
      <div className="w-full grid grid-cols-2 md:grid-cols-7 ">
        {images?.map((item, i) => (
          <img
            key={i}
            src={item?.src}
            alt={`img-${i}`}
            className="w-full object-cover h-[200px] bg-black"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
          />
        ))}
      </div>
    </div>
  );
}
