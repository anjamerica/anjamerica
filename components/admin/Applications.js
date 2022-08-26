import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import { getJobApplicants } from "../../services/jobApplicants";
import Loader from "../layout/Loader";
import { useRouter } from "next/router";
import { MdOutlineLogout } from "react-icons/md";
import ApplicationDetails from "./ApplicationDetails";
import { FilterComponent } from "../common/FilterComponent";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import ButtonLoader from "../layout/ButtonLoader";
import ApplicationLoader from "../layout/ApplicationLoader";

export default function Applications() {
  const [navOpen, setNavOpen] = useState(false);
  const [applications, setApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [filter, setFilter] = useState(false);
  const router = useRouter();
  const { from, to } = router.query;
  const [loading, setLoading] = useState(false);

  //get all applications
  useEffect(() => {
    const headers = { Authorization: localStorage.getItem("token") };
    const getApplication = async () => {
      try {
        setLoading(true);
        const response = await getJobApplicants(
          searchQuery,
          page,
          10,
          router.query.from,
          router.query.to,
          headers
        );
        setApplications(response?.data?.payload);
        setTotalItems(response?.data?.filterCount);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getApplication();
  }, [searchQuery, page, router.query]);


  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    router.push("/login");
    setLoading(false);
  };

  return (
    <div className="mx-auto w-full h-full snap-y">
      <div className="w-full flex h-[74px] justify-between px-5 bg-white box-shadow  md:px-10 md:py-4 md:items-center md:h-[10vh]">
        <Link href="/home">
          <img
            alt="logo image"
            src="/assets/landing/anj_logo.svg"
            className="h-16  w-40  xl:h-20 xl:w-56 self-center object-contain"
          />
        </Link>
        <img
          alt="menu icon"
          src="/admin/menu.svg"
          className="visible h-5 w-fit mr-1 self-center  md:invisible"
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
              <Link href="/newpost">
                <li className="w-full text-left py-2 px-10 cursor-pointer text-black hover:text-primary-blue text-xs">
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
                className="w-full text-left py-2 px-10 cursor-pointer text-black hover:text-primary-blue text-xs"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="flex flex-col-reverse justify-between p-5 md:px-10 md:flex-row">
        <div className="mt-4 text-lg font-semibold md:font-semibold md:mt-0">
          Applications
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex bg-[#F0F0F0] p-1 px-2 w-full justify-between md:w-fit cursor-pointer rounded-md">
            <input
              type="search"
              className="bg-transparent w-fit outline-none"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            <Link href="/newpost">
              <button className="hidden md:w-fit font-medium text-white bg-[#214ED1] px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Add New Post
              </button>
            </Link>
          </div>
          <div className="w-fit">
            {!from && !to ? (
              <button
                className=" md:w-fit text-sm font-medium  text-white bg-[#214ED1] px-4 py-1  rounded-md text-center flex flex-row gap-2 items-center justify-center md:text-sm md:cursor-pointer"
                onClick={() => setFilter(!filter)}
              >
                Filter
                <TbAdjustmentsHorizontal className="w-5 h-5" />
              </button>
            ) : (
              <div onClick={() => router.push("/applications")}>
                <button
                  className=" md:w-fit text-sm font-medium  text-white bg-[#214ED1] px-2 whitespace-nowrap md:px-4 py-1  rounded-md text-center flex flex-row gap-2 items-center justify-center md:text-sm md:cursor-pointer"
                  onClick={() => {
                    router.push("/applications");
                  }}
                >
                  Close Filter
                  <TbAdjustmentsHorizontal  className="w-5 h-5"/>
                </button>
              </div>
            )}
          </div>
          {filter && (
            <div>
              <FilterComponent setFilter={setFilter} />
            </div>
          )}
        </div>
      </div>

      <div className="w-full p-0 md:px-10">
        <div className="scrollbar-table">
          <table className="table-fixed w-[60rem] md:w-full border-separate border-spacing-y-1">
            <thead className="overflow-x-auto">
              <tr className="bg-[#214ED1] text-left">
                <th className="text-sm  w-20 text-white md:text-md font-normal px-5 md:px-3 py-3  break-words">
                  ID
                </th>
                <th className="text-sm   w-40 text-white md:text-md font-normal  px-2 py-3 break-words">
                  Name
                </th>
                <th className="text-sm w-40  text-white md:text-md font-normal px-2 py-3  break-words">
                  Phone number
                </th>
                <th className="text-sm w-44 text-white md:text-md font-normal px-2 py-3  break-words">
                  Email ID
                </th>
                <th className="text-sm w-44 text-white md:text-md font-normal px-2 py-3  break-words">
                  Application date
                </th>
                <th className="text-sm w-44 text-white md:text-md font-normal px-2 py-3  break-words">
                  Post
                </th>
                <th
                  className={`${
                    filter
                      ? " right-0 z-10 text-sm w-28 md:w-32 bg-[#046AC8] md:bg-[#214ED1] text-center text-white md:text-md font-normal px-2 py-3  break-words"
                      : "sticky right-0 z-10 text-sm w-28 md:w-32 bg-[#046AC8] md:bg-[#214ED1] text-center text-white md:text-md font-normal px-2 py-3  break-words"
                  }`}
                >
                  Show more
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr className="col-span-12">
                  <td className="" colSpan={7}>
                    <div className="w-full h-fit flex flex-col justify-start md:justify-center">
                      <ApplicationLoader />
                    </div>
                  </td>
                </tr>
              ) : (
                <>
                  {applications.length > 0 ? (
                    applications.map((item, i) => {
                      return (
                        <>
                          <ApplicationDetails
                            key={i}
                            item={item}
                            filter={filter}
                          />
                        </>
                      );
                    })
                  ) : (
                    <tr className="col-span-12">
                      <td className="" colSpan={7}>
                        <div className="w-full h-fit flex flex-col justify-start md:justify-center">
                          <img
                            alt="no data"
                            src="/admin/no_content.png"
                            className="w-96 h-[15rem] md:h-[20rem] md:self-center object-contain"
                          />
                          <p className="font-semibold ml-28 md:ml-0 text-primary-gray md:self-center">
                            No Applicants Available
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-center items-center self-center">
          {(totalItems && totalItems) > 0 && (
            <Pagination
              currentPage={page}
              setCurrentPage={setPage}
              countPerPage={10}
              total={totalItems}
            />
          )}
        </div>
      </div>
    </div>
  );
}
