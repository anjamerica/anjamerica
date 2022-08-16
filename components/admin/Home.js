import Link from "next/link";
import React, { useState, useEffect } from "react";
import JobCardAdmin from "../career/JobCardAdmin";
import { getJobDetails } from "../../services/JobDetails";
import Pagination from "./Pagination";
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from "next/router";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import ApplicationLoader from "../layout/ApplicationLoader";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [countPerPage, setCountPerPage] = useState(10);
  const [activeJobs, setActiveJobs] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // useEffect(()=>{
  //   const getImage = async () =>{
  //     const response = await downloadFile(fileKey);

  //   }
  // })

  const getDetails = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, [searchText, page, activeJobs]);

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    router.push("/login");
    setLoading(false);
  };

  return (
    <div className="mx-auto w-full h-full snap-y mb-10">
      <div>
        <div className="w-full flex h-[74px] justify-between px-5 bg-white box-shadow   md:px-10 md:py-4 md:items-center md:h-[10vh]">
          <Link href="/home">
            <img
              alt="logo image"
              src="/assets/landing/anj_logo.svg"
              className="h-16 w-40 ml-1 md:ml-0 xl:h-20 xl:w-56 self-center object-contain"
            />
          </Link>
          <img
            alt="menu icon"
            src="/admin/menu.svg"
            className="visible h-5 w-fit self-center  md:invisible"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
          <MdOutlineLogout
            className="hidden md:flex md:text-black md:h-8 md:w-8 md:cursor-pointer"
            onClick={handleLogout}
          />
        </div>
        {navOpen && (
          <div className="absolute top-[4.6rem] right-[0rem] z-10 md:hidden">
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
                <Link href="/subscribers">
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
      <div className="flex flex-col-reverse justify-between p-5 md:px-10 md:flex-row">
        <div
          className="mt-4 ml-1 md:ml-0 md:invisible lg:visible text-[20px] md:text-[24px] lg:self-center
         font-semibold md:mt-0"
        >
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
              alt="search icon"
              src="/assets/landing/search_icon.svg"
              className="w-fit h-fit"
            />
          </div>
          <div>
            <Link href="/subscribers">
              <button className="hidden md:w-fit font-medium text-white hover:bg-blue-800 bg-[#214ED1] px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Subscribers
              </button>
            </Link>
          </div>
          <div>
            <Link href="/applications">
              <button className="hidden md:w-fit font-medium text-white hover:bg-blue-800 bg-[#214ED1] px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Applications
              </button>
            </Link>
          </div>
          <div>
            <Link href="/newpost">
              <button className="hidden md:w-fit font-medium whitespace-nowrap text-white hover:bg-blue-800 bg-[#214ED1] px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Add New Post
              </button>
            </Link>
          </div>
          <div className="w-fit h-fit relative">
            <select
              id="sel"
              className=" bg-[#214ED1] pr-8 hover:bg-blue-800 text-xs text-white focus:outline-none md:text-sm md:cursor-pointer  px-4 py-[.5rem] md:py-1  rounded-md"
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
      <div className="p-0 w-fit md:px-10 md:pb-4 hidden text-[24px] md:flex lg:hidden  text-base md:font-semibold ">
        Job Posts
      </div>

      <JobDataView
        jobData={jobData}
        page={page}
        setPage={setPage}
        totalItems={totalItems}
        getDetails={getDetails}
        loading={loading}
      />
    </div>
  );
}

const JobDataView = ({ jobData, page, setPage, totalItems, getDetails,loading }) => {
  return (
    <>
      {loading ? (
        <div className="w-full h-fit flex flex-col justify-start md:justify-center">
          <ApplicationLoader />
        </div>
      ) : (
        <>
          <div className="px-5 flex flex-col gap-8 md:px-10">
            {jobData.length > 0 ? (
              jobData.map((item, i) => {
                return (
                  <div key={i}>
                    <JobCardAdmin item={item} getDetails={getDetails} />
                  </div>
                );
              })
            ) : (
              <div className="w-full h-fit flex flex-col justify-start md:justify-center">
                <img
                  alt="no data"
                  src="/admin/no_content.png"
                  className="w-96 h-[15rem] md:h-[20rem] md:self-center object-contain"
                />
                <p className="font-semibold  text-primary-gray self-center">
                  No Jobs Available
                </p>
              </div>
            )}
          </div>
        </>
      )}

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
