import React from "react";
import Link from "next/link";

import { IoArrowForwardOutline } from "react-icons/io5";

import blogs from "../../../constants/blogs.json";
import Container from "../../common/Container";
import Card from "./Card";

export default function Blogs() {
  const firstObj = blogs?.list[0];

  const restArr = blogs?.list?.slice(1);

  console.log(restArr);

  return (
    <Container>
      <div className="my-6 md:my-20">
        <div className="w-full mb-5 md:mb-20 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex flex-col mt-3 md:mt-0 max-w-[500px] gap-2">
            <p className="font-light tex-xs md:text-lg">
              {firstObj?.createdAt}
            </p>
            <p className="heading-1">{firstObj?.title}</p>
            <p className="text-base md:text-xl md:leading-[30px] text-justify md:text-start text-gray-tertiary">
              {firstObj?.description}
            </p>
            <Link href={`blogs/${firstObj?.id}`}>
              <p className="text-md md:text-lg leading-[30px] text-blue-primary font-medium flex gap-3 items-center">
                READ MORE{" "}
                <IoArrowForwardOutline className="w-5 h-5 text-blue-primary" />
              </p>
            </Link>
          </div>
          <img
            src={firstObj?.image}
            className="md:w-1/2 w-full h-[200px] md:h-[440px] object-cover"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restArr?.map((item) => (
            <Card item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </Container>
  );
}
