import React from "react";

import Container from "../../common/Container";
import { Gallery } from "react-grid-gallery";

export default function LifeAtAnj() {
  const images = [
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG-20240906-WA0187.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG-20240819-WA0036.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG-20240906-WA0057.jpg",
      width: 320,
      height: 174,
    },

    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG-20240302-WA0009.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG-20230218-WA0025.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_20240906_221501_661.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_20231229_232201_773.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_20231016_112840_164.webp",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_20230831_134920_971.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_20230824_203247_645.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_20230812_112528_480.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_20230802_102045_862.jpg",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_2071.JPG",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_2011.JPG",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_1941.JPG",
      width: 320,
      height: 174,
    },
    {
      src: "https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/WEB/IMG_1885.JPG",
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

      <div>
        <Gallery
          images={images}
          enableImageSelection={false}
          renderImage={(props) => (
            <div
              style={{
                width: "fit-content",
                height: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img className="object-cover" alt={props.imageProps.alt} />
            </div>
          )}
        />
      </div>
    </Container>
  );
}
