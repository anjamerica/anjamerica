import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import { getJobApplicants } from "../../services/jobApplicants";
import { loadingContext } from "../../hooks/loadingContext";
import Loader from "../layout/Loader";
import { downloadFile } from "../../services/file";
import { useRouter } from "next/router";
import { MdOutlineLogout } from "react-icons/md";
import ApplicationDetails from "./ApplicationDetails";

export default function Applications() {
  const [navOpen, setNavOpen] = useState(false);
  const [applications, setApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [fileKey, setFileKey] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [url, setUrl] = useState("");

  const { loaderToggler } = useContext(loadingContext);
  const router = useRouter();

  // useEffect(() => {
  //   const getCv = async () => {
  //     try {
  //       const response = await downloadFile(fileKey);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getCv();
  // },[]);

  useEffect(() => {
    const getOneData = async () => {
      try {
        const response = await get;
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  //get all applications
  useEffect(() => {
    const getApplication = async () => {
      try {
        loaderToggler(true);
        const response = await getJobApplicants(searchQuery, page, 10);
        setApplications(response?.data?.payload);
        setTotalItems(response?.data?.totalCount);
        console.log(response?.data?.payload?.job_id?.job_title);
        // setFileKey(response?.data?.file);
        // console.log(response.file);
        console.log(response?.data);
        loaderToggler(false);
      } catch (err) {
        console.log(err);
        loaderToggler(false);
      }
    };
    getApplication();
  }, [searchQuery, page]);

  console.log(totalItems);

  const handleGetCv = async (file) => {
    try {
      loaderToggler(true);
      const response = await downloadFile(file);
      loaderToggler(false);
      router.push(`/${response.config.url}`);
      // window.open(`/${response.config.url}`,"_blank")
      console.log(response);
    } catch (error) {
      console.error(error);
      loaderToggler(false);
    }
  };

  const handleLogout = () => {
    loaderToggler(true);
    localStorage.removeItem("token");
    router.push("/login");
    loaderToggler(false);
  };

  return (
    <div className="mx-auto w-full h-full snap-y">
      <div className="w-full flex h-[8hv] justify-between px-4 bg-primary-black  md:px-10 md:py-4 md:items-center md:h-[10vh]">
        <Link href="/home">
          <img
            src="/landing/logo.svg"
            className="h-16 --ml-5 md:-ml-12 w-40 xl:h-20 xl:w-56 object-contain"
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
        <div className="absolute top-[4rem] right-[0rem] z-10 md:hidden">
          <div className="w-fit bg-[#F0F0F0] flex justify-center h-fit">
            <ul>
              <Link href="/newpost">
                <li className="w-full text-left py-2 px-10 cursor-pointer text-black hover:text-primary-blue text-xs">
                  Add new post
                </li>
              </Link>
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
      <div
        className="flex flex-col-reverse justify-between p-5 md:p-10 md:flex-row"
        // onClick={() => setNavOpen(!navOpen)}
      >
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
              src="/assets/landing/search_icon.svg"
              className="w-fit h-fit"
            />
          </div>
          <div>
            <Link href="/newpost">
              <button className="hidden md:w-fit font-medium text-white bg-primary-blue px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Add New Post
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full p-0 md:px-10">
        <div className="scrollbar-table">
          <table className="table-fixed w-[60rem] md:w-full border-spacing-y-2 border-collapse">
            <thead className="overflow-x-auto">
              <tr className="bg-primary-blue text-left">
                <th className="text-sm  w-20 text-white md:text-md font-normal px-5 md:px-3 py-3  break-words">
                  ID
                </th>
                <th className="text-sm   w-40 text-white md:text-md font-normal  px-2 py-3 break-words">
                  Name
                </th>
                <th className="text-sm w-40  text-white md:text-md font-normal px-2 py-3  break-words">
                  Phone Number
                </th>
                <th className="text-sm w-40 text-white md:text-md font-normal px-2 py-3  break-words">
                  Email ID
                </th>
                <th className="text-sm w-44 text-white md:text-md font-normal px-2 py-3  break-words">
                  Application Date
                </th>
                <th className="text-sm w-44 text-white md:text-md font-normal px-2 py-3  break-words">
                  Post
                </th>
                <th className="sticky right-0 z-10 text-sm w-28 md:w-32 bg-[#262c9c] md:bg-primary-blue text-center text-white md:text-md font-normal px-2 py-3  break-words">
                  Show More
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 1 ? (
                applications.map((item, i) => {
<<<<<<< HEAD
                  return (
                    <tr className="bg-[#F9F9F9] w-full" key={i}>
                      <td className="text-black  text-sm md:text-md font-normal px-2 py-3 break-words">
                        {item.name}
                      </td>
                      <td className="text-black  text-sm md:text-md font-normal px-2 py-3 break-words">
                        <span>{item?.phone_number?.country_code}</span>
                        <span className="ml-2">
                          {item?.phone_number?.tell_number}
                        </span>
                      </td>
                      <td className="text-black w-40 text-sm md:text-md font-normal px-2 py-3 break-words">
                        {item.email}
                      </td>

                      <td className="text-black w-40 text-sm md:text-md font-normal px-2 py-3 hover:text-blue-500 truncate">
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.link}
                        </a>
                      </td>
                      {item?.job_details?.job_title ? (
                        <td className="text-black w-40 text-sm md:text-md font-normal px-2 py-3 break-words">
                          {item?.job_details?.job_title}
                        </td>
                      ) : (
                        <td className="text-black w-40 text-sm md:text-md font-normal px-2 py-3 break-words">
                          Not Available
                        </td>
                      )}
                      <td
                        key={i}
                        onClick={() => handleGetCv(item.file)}
                        className="sticky right-0 z-10 w-28 text-sm bg-[#F2F1F1] md:bg-[#F9F9F9] text-primary-blue text-center font-normal px-2 py-3  break-words hover:text-blue-500 cursor-pointer"
                      >
                        VIEW
                      </td>
                    </tr>
                  );
                })}
=======
                  return <ApplicationDetails key={i} item={item} />;
                })
              ) : (
                <tr>
                  <td
                    colSpan={12}
                    className="w-full font-semibold text-base flex justify-start text-primary-gray"
                  >
                    No Applicants Available
                  </td>
                </tr>
              )}
>>>>>>> 5993210b218fc1338ffa1fd5677e486031aa39c9
            </tbody>
          </table>
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
      </div>
    </div>
  );
}
