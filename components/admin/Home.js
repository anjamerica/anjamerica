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

export default function Home() {
  const { loaderToggler } = useContext(loadingContext);
  const [navOpen, setNavOpen] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [countPerPage, setCountPerPage] = useState(10);

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
      const response = await getJobDetails(searchText, page, countPerPage);
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
  }, [searchText, page]);

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
        <div className="w-full flex h-[8hv] justify-between px-4 bg-violet-dark  md:px-10 md:py-4 md:items-center md:h-[10vh]">
          <Link href="/home">
            <img
              src="/assets/landing/Logo.png"
              className="h-16 w-40 xl:h-20 xl:w-56 object-contain"
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
                  <li className="w-full self-center text-left py-2 px-10 cursor-pointer text-black hover:text-primary-green text-xs border-b-black">
                    Applications
                  </li>
                </Link>
                <hr className="bg-black w-full" />
                <Link href="/newpost">
                  <li className="w-full self-center text-left py-2 px-10 cursor-pointer text-black hover:text-primary-green text-xs">
                    Add new post
                  </li>
                </Link>
                <hr className="bg-black w-full" />
                <li
                  className="w-full self-center text-left py-2 px-10 cursor-pointer text-black hover:text-primary-green text-xs"
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
        <div className="mt-4 text-base md:font-semibold md:mt-0">Job Posts</div>
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
            <Link href="/applications">
              <button className="hidden md:w-fit font-medium text-white bg-secondary-green px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Applications
              </button>
            </Link>
          </div>
          <div>
            <Link href="/newpost">
              <button className="hidden md:w-fit font-medium text-white bg-secondary-green px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Add New Post
              </button>
            </Link>
          </div>
        </div>
      </div>
      <JobDataView jobData={jobData} page={page} setPage={setPage} totalItems={totalItems} getDetails={getDetails}/>
    </div>
  );
}

const JobDataView = ({jobData, page, setPage, totalItems, getDetails}) => {
  return (
    <>
      <Loader />
      <div className="px-5 flex flex-col gap-8 md:px-10">
        {jobData &&
          jobData.map((item, i) => {
            return (
              <div key={i}>
                <JobCard item={item} getDetails={getDetails} />
              </div>
            );
          })}
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
