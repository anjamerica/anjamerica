import Link from "next/link";
import React from "react";
import Header from "../components/landin/Header";

function NotFoundPage() {
  return (
    <div className="w-full h-[calc(100vh-8vh)] md:h-[calc(100vh-10vh)]">
      <div className="w-full h-fit">
        <Header />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-4">
        <span className="text-primary-blue text-[100px] sm:text-[150px]">
          404
        </span>
        <span className="text-primary-blue font-semibold text-[1.2rem] sm:text-[28px] -mt-10 sm:-mt-20">
          Page Not Found
        </span>
        <span className="text-primary-blue text-[1rem] w-[90vw] sm:text-[1.5rem] sm:max-w-[650px] text-center">
          We are sorry but the page you are looking for does not exist You could
          return to the home page.
        </span>
        <Link href="/">
          <button className="w-32 sm:w-40 bg-primary-blue rounded-sm font-medium text-sm sm:text-[20px] hover:bg-blue-400 px-2 py-2 text-white">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;

NotFoundPage.getLayout = ({ children }) => {
  return <>{children}</>;
};
