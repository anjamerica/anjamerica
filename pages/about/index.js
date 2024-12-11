import React from "react";
import Banner from "../../components/common/Banner";
import Container from "../../components/common/Container";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import OurClients from "../../components/pages/landing/OurClients";

export default function index() {
  const bannerContent = {
    title: "We are Anj America",
    description:
      "We offer a broad range of services, including software development, mobile application development, cloud solutions, and more, tailored to meet the unique needs of businesses and drive digital success.",
    bannerStyle: "banner-bg-about-us",
  };
  return (
    <div className="md:pb-10">
      <Banner item={bannerContent} />
      <Container>
        <div className="my-5 lg:my-14 flex flex-col gap-6 lg:flex-row justify-between items-center">
          <div className="w-full lg:w-[40%] flex flex-col gap-2 md:gap-4">
            <p className="heading-1">Why Choose Us</p>
            <p className="text-md md:text-xl text-justify lg:text-start font-normal leading-[21px] md:leading-[30px] text-gray-tertiary">
              Partner with us for comprehensive services, including software,
              mobile app development, and cloud solutions. Our tailored
              approach, expert team, and commitment ensure innovative solutions
              that drive success.
            </p>
            <Link href={`contact-us`}>
              <p className="text-md md:text-lg leading-[30px] text-blue-primary font-medium flex gap-3 items-center">
                Explore more{" "}
                <IoArrowForwardOutline className="w-5 h-5 text-blue-primary" />
              </p>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <video controls className="w-full h-[350px] object-cover">
              <source
                src="https://nichetechies-public.s3.us-east-2.amazonaws.com/ANJ_WEBSITE/ANj_office_website.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
      <OurClients />
    </div>
  );
}
