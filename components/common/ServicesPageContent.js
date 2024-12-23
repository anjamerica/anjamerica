import React from "react";
import Banner from "./Banner";
import BreadCrumbList from "./BreadCrumb";
import { useRouter } from "next/router";
import Container from "./Container";

export default function ServicesPageContent({ item, otherChildren }) {
  const router = useRouter();

  return (
    <div>
      <Banner item={item?.bannerContent} />
      <div className="flex flex-col my-5 md:my-10 gap-3">
        <Container>
          <BreadCrumbList
            items={[
              {
                title: (
                  <p
                    className="text-md md:text-base cursor-pointer"
                    onClick={() => router.push("/")}
                  >
                    Home
                  </p>
                ),
              },
              {
                title: (
                  <p
                    className="text-md md:text-base cursor-pointer"
                    onClick={() => router.push("/services")}
                  >
                    Services
                  </p>
                ),
              },
              {
                title: (
                  <p className="text-md md:text-base">
                    {item?.bannerContent?.title}
                  </p>
                ),
              },
            ]}
          />
          <p className=" mt-3 text-lg md:text-[30px] font-normal">
            {item?.header}
          </p>
          <p className="text-md leading-[21px] md:text-lg mt-3 font-light text-justify md:leading-[45px]">
            {item?.paragraph}
          </p>
          {otherChildren}
        </Container>
      </div>
    </div>
  );
}
