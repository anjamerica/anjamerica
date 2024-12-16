import React from "react";

import courses from "../../../constants/courses.json";
import CourseCard from "./CourseCard";
import Container from "../../common/Container";

export default function Courses() {
  return (
    <Container>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="underline text-primary text-md md:text-lg mb-3 md:mb-6"
      >
        ANJ Career Launch Program
      </p>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-lg md:text-[50px] md:leading-[60px] font-light text-gray-dark mb-2 md:mb-4"
      >
        Empower your future with on-demand learning
      </p>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-gray-dark leading-[21px] font-thin md:leading-[30px] text-justify md:text-start text-md md:text-lg mb-6 md:my-6"
      >
        Explore expertly crafted courses designed by industry-leading
        professionals. With the flexibility to learn at your own pace, you can
        build valuable skills and achieve your goals whenever and wherever it
        suits you. Whether you&apos;re at home or on the move, these on-demand
        courses are tailored to fit seamlessly into your schedule, providing the
        tools and knowledge you need to thrive. Embrace learning without limits
        and enjoy the freedom to grow your expertise anytime, anywhere.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4  mb-8 md:mb-10">
        {courses?.list?.map((item, i) => (
          <CourseCard item={item} key={i} />
        ))}
      </div>
    </Container>
  );
}
