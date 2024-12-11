import React from "react";

import Container from "../../common/Container";
import { Gallery } from "react-grid-gallery";

export default function LifeAtAnj() {
  const videos = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
    },
  ];
  return (
    <Container>
      <p className=" text-primary text-md md:text-lg mb-6">Life at ANJ</p>
      <p className="text-lg leading-[35px] md:text-[50px] md:leading-[60px] font-light text-gray-dark mb-4">
        From Strength to Strength: Our Growth in Pictures
      </p>

      <Gallery images={videos} />
    </Container>
  );
}
