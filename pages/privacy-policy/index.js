import React from "react";
import { useRouter } from "next/router";

import Banner from "../../components/common/Banner";
import Container from "../../components/common/Container";
import BreadCrumbList from "../../components/common/BreadCrumb";

export default function Index() {
  const router = useRouter();

  const bannerContent = {
    title: "Privacy and Cookies Policy",
    description:
      "At ANJ America, we prioritize your privacy and ensure transparency in how your data is handled. Our commitment to secure practices empowers you with control, fostering trust, transparency, and a nurturing network for your digital confidence.",
    bannerStyle: "banner-bg-privacy-policy",
  };
  return (
    <div>
      <Banner item={bannerContent} />
      <Container>
        <div className="my-10 md:my-14">
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
                  <p className="text-md md:text-base">
                    Privacy and Cookies Policy
                  </p>
                ),
              },
            ]}
          />
          <p className=" mt-3 md:mt-8 text-[25px] font-normal">
            Last updated: January 2024
          </p>
          <p className=" text-lg mt-3 font-light text-justify leading-[40px]">
            ANJ America values your privacy, collecting information on our
            website solely. We neither rent nor share your details. Visit
            anonymously; we only request information for enhancing your
            website/product experience. Your response to such requests is
            optional, respecting your liberty and privacy.
          </p>
        </div>
      </Container>
    </div>
  );
}
