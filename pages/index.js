import Button from "../components/common/Button";
import { GoArrowUpRight } from "react-icons/go";
import InsideAnj from "../components/pages/landing/InsideAnj";
import OurClients from "../components/pages/landing/OurClients";
import Courses from "../components/pages/landing/Courses";
import LifeAtAnj from "../components/pages/landing/LifeAtAnj";
import Enquiry from "../components/pages/landing/Enquiry";
import Banner from "../components/common/Banner";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const bannerContent = {
    title: "Empowering Digital Transformation",
    description:
      "Your trusted partner in digital transformation. We deliver cutting-edge solutions powered by our experienced team, driving business growth and enabling organizations to thrive in the digital age.",
    otherChild: (
      <Button
        title="Explore"
        onClick={() => router.push("/services")}
        icon={<GoArrowUpRight className="w-5 h-5 text-white" />}
      />
    ),
    bannerStyle: "banner-bg-landing",
  };
  return (
    <div className="w-full">
      <Banner item={bannerContent} />
      <InsideAnj />
      <OurClients />
      <Courses />
      <LifeAtAnj />
      <Enquiry />
    </div>
  );
}
