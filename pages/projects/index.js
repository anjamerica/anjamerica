import React from "react";
import Home from "../../components/admin/Home";
import Footer from "../../components/landin/Footer";
import Layout from "../../components/layout/Layout";

export default function Projects() {
  return (
    <>
      <div className="w-full font-opensans">
        {/* Banner */}
        <div className="w-full flex justify-center items-center h-screen pfbanner">
          <div className="w-full max-w-7xl flex justify-between items-center">
            <h1 className="text-9xl font-black font-opensans leading-[90px]">
              <span className="text-7xl">Our</span> <br />
              <span>Awesome</span>
              <br />{" "}
              <span className="text-7xl text-textcolor-1 ml-auto block text-right pt-4">
                Works
              </span>
            </h1>
            <span className="flex w-full max-w-lg">
              <img className="w-full" src="/projects/office.png" alt="Anj" />
            </span>
          </div>
        </div>
        {/* PPE */}
        <div className="w-full flex justify-center items-center h-screen pf_ppe">
          <div className="w-full max-w-7xl flex justify-between items-center">
            <div className="w-1/2">
              <h1 className="text-6xl uppercase font-bold font-opensans leading-[90px] block pb-8 text-white max-w-xs">
                English Learning Management System
              </h1>
              <button className="bg-white text-textcolor-2 px-6 py-3 rounded-full text-xl">
                Case Study
              </button>
            </div>
            <div className="w-1/2 flex justify-end">
              <span className="block max-w-lg w-full relative">
                <img
                  className="w-full"
                  src="/projects/admin-reports.png"
                  alt="Purple Patch"
                />
                <span className="p-6 w-full max-w-xs rounded-lg absolute bg-white right-80 bottom-16 shadow-shade">
                  <img
                    className="w-full"
                    src="/projects/ppe.png"
                    alt="Purple Patch"
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* Apply4Uni */}
        <div className="w-full flex justify-center items-center h-screen pf_apply">
          <div className="w-full max-w-7xl flex justify-between items-center">
            <div className="w-1/2 flex">
              <span className="block max-w-lg w-full relative">
                <img
                  className="w-full"
                  src="/projects/apply.png"
                  alt="Purple Patch"
                />
                <span className="p-6 w-full max-w-xs rounded-lg absolute bg-white right-24 -bottom-16 shadow-shade">
                  <img
                    className="w-full"
                    src="/projects/apply_logo.png"
                    alt="Purple Patch"
                  />
                </span>
              </span>
            </div>
            <div className="w-1/2">
              <h1 className="text-6xl uppercase font-bold font-opensans leading-[90px] block pb-8 text-white ">
                CRM system for study abroad needs!
              </h1>
              <button className="bg-white text-textcolor-3 px-6 py-3 rounded-full text-xl">
                Case Study
              </button>
            </div>
          </div>
        </div>
        {/* Prakria */}
        <div className="w-full flex justify-center items-center h-screen pf_prakria">
          <div className="w-full max-w-7xl flex justify-between items-center">
            <div className="w-1/2">
              <h1 className="text-6xl uppercase font-bold font-opensans leading-[90px] block pb-8 text-white">
                UNLIMITED HIGH QUALITY DESIGNS. ZERO HASSLE.
              </h1>
              <button className="bg-white text-textcolor-3 px-6 py-3 rounded-full text-xl">
                Case Study
              </button>
            </div>
            <div className="w-1/2 flex justify-end">
              <span className="block w-full relative">
                <img
                  className="w-full"
                  src="/projects/parkria.png"
                  alt="Purple Patch"
                />
                <span className="p-6 w-full max-w-xs rounded-lg absolute bg-white right-80 bottom-16 shadow-shade">
                  <img
                    className="w-full"
                    src="/projects/parkria_logo.png"
                    alt="Purple Patch"
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

Projects.getLayout = Layout;
