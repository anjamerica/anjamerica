import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import JobCard from "../career/JobCard";
import { getJobDetails } from "../../services/JobDetails";
import { loadingContext } from "../../hooks/loadingContext";
import Loader from "../layout/Loader";
import Pagination from "./Pagination";
import { MdOutlineLogout } from "react-icons/md";
import { Router } from "react-router-dom";
import { useRouter } from "next/router";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function Home() {
  const { loaderToggler } = useContext(loadingContext);
  const [navOpen, setNavOpen] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [countPerPage, setCountPerPage] = useState(10);
  const [activeJobs, setActiveJobs] = useState("");

  const router = useRouter();

  // useEffect(()=>{
  //   const getImage = async () =>{
  //     const response = await downloadFile(fileKey);

  //   }
  // })

  const getDetails = async () => {
    try {
      loaderToggler(true);
      //get job details
      const response = await getJobDetails(
        searchText,
        page,
        countPerPage,
        activeJobs
      );
      setTotalItems(response.data.totalCounts);
      console.log(response);
      setJobData(response.data.payload);
      loaderToggler(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
      loaderToggler(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, [searchText, page, activeJobs]);

  const handleLogout = () => {
    loaderToggler(true);
    localStorage.removeItem("token");
    router.push("/login");
    loaderToggler(false);
  };

  return (
    <div className="mx-auto w-full h-full snap-y mb-10">
      <div>
        {/* <Loader /> */}
        <div className="w-full flex h-[8hv] justify-between px-4 bg-primary-black  md:px-10 md:py-4 md:items-center md:h-[10vh]">
          <Link href="/home">
            <img
              src="/landing/logo.svg"
              className="h-16 w-40 -ml-5 md:-ml-12 xl:h-20 xl:w-56 object-contain"
            />
          </Link>
          <img
            src="/admin/menu.svg"
            className="visible  md:invisible"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
          <MdOutlineLogout
            className="hidden md:flex md:text-white md:h-8 md:w-8 md:cursor-pointer"
            onClick={handleLogout}
          />
        </div>
        {navOpen && (
          <div className="absolute top-[4.1rem] right-[0rem] z-10 md:hidden">
            <div className="w-fit bg-[#F0F0F0] flex justify-center h-fit">
              <ul>
                <Link href="/applications">
                  <li className="w-full self-center text-left py-2 px-10 cursor-pointer text-black hover:text-primary-blue text-xs border-b-black">
                    Applications
                  </li>
                </Link>
                <hr className="bg-black w-full" />
                <Link href="/newpost">
                  <li className="w-full self-center text-left py-2 px-10 cursor-pointer text-black hover:text-primary-blue text-xs">
                    Add new post
                  </li>
                </Link>
                <hr className="bg-black w-full" />
                <Link href="/subcribers">
                  <li className="w-full self-center text-left py-2 px-10 cursor-pointer text-black hover:text-primary-blue text-xs">
                    Subscribers
                  </li>
                </Link>
                <hr className="bg-black w-full" />
                <li
                  className="w-full self-center text-left py-2 px-10 cursor-pointer text-black hover:text-primary-blue text-xs"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col-reverse justify-between p-5 md:p-10 md:flex-row">
        <div className="mt-4 ml-1 md:ml-0 text-base md:font-semibold md:mt-0">
          Job Posts
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex bg-[#F0F0F0] p-1 px-2 w-full justify-between md:w-fit cursor-pointer rounded-md">
            <input
              type="text"
              className="bg-transparent w-full outline-none"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <img
              src="/assets/landing/search_icon.svg"
              className="w-fit h-fit"
            />
          </div>
          <div>
            <Link href="/subscribers">
              <button className="hidden md:w-fit font-medium text-white hover:bg-blue-800 bg-primary-blue px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Subscribers
              </button>
            </Link>
          </div>
          <div>
            <Link href="/applications">
              <button className="hidden md:w-fit font-medium text-white hover:bg-blue-800 bg-primary-blue px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Applications
              </button>
            </Link>
          </div>
          <div>
            <Link href="/newpost">
              <button className="hidden md:w-fit font-medium text-white hover:bg-blue-800 bg-primary-blue px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Add New Post
              </button>
            </Link>
          </div>
          <div className="w-fit h-fit relative">
            <select
              id="sel"
              className=" bg-primary-blue pr-8 hover:bg-blue-800 text-xs text-white focus:outline-none md:text-sm md:cursor-pointer  px-4 py-[.5rem] md:py-1  rounded-md"
              onChange={(e) => setActiveJobs(e.target.value)}
            >
              <option
                className="bg-white text-black"
                defaultValue=""
                value=""
                disabled
              >
                Filter
              </option>
              <option className="bg-white text-black" defaultValue="" value="">
                All
              </option>
              <option className="bg-white text-black" value="true">
                Active
              </option>
              <option className="bg-white text-black" value="false">
                Inactive
              </option>
            </select>

            <TbAdjustmentsHorizontal className="absolute text-white font-light v-h-center right-0" />
          </div>
        </div>
      </div>
      <JobDataView
        jobData={jobData}
        page={page}
        setPage={setPage}
        totalItems={totalItems}
        getDetails={getDetails}
      />
    </div>
  );
}

const JobDataView = ({ jobData, page, setPage, totalItems, getDetails }) => {
  return (
    <>
      <Loader />
      <div className="px-5 flex flex-col gap-8 md:px-10">
        {jobData.length > 0 ? (
          jobData.map((item, i) => {
            return (
              <div key={i}>
                <JobCard item={item} getDetails={getDetails} />
              </div>
            );
          })
        ) : (
          <div className="w-full h-fit flex flex-col justify-start md:justify-center">
            <img
              src="/admin/no_content.png"
              className="w-96 h-[15rem] md:h-[20rem] md:self-center object-contain"
            />
            <p className="font-semibold  text-primary-gray self-center">
              No Jobs Available
            </p>
          </div>
        )}
      </div>
      <div>
        {(totalItems && totalItems) > 0 && (
          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            countPerPage={10}
            total={totalItems}
          />
        )}
      </div>
    </>
  );
};
