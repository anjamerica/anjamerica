import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from "next/router";
import { getSubscribers } from "../../services/subscribe";
import { DateFormatter } from "../common/DateFormatter";

export default function Subscribers() {
  const [navOpen, setNavOpen] = useState(false);
  const [subcribers, setSubscribers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const router = useRouter();
  var siNo = 1;

  console.log(totalItems);

  const handleLogout = () => {
    loaderToggler(true);
    localStorage.removeItem("token");
    router.push("/login");
    loaderToggler(false);
  };

  useEffect(() => {
    const headers = { Authorization: localStorage.getItem("token") };
    const getSubscriber = async () => {
      try {
        const res = await getSubscribers(page, 10, headers);
        setSubscribers(res.data.payload);
        setTotalItems(res.data.totalSubscribers);
      } catch (error) {
        console.log(error.messsage);
      }
    };
    getSubscriber();
  }, [page]);

  console.log(subcribers);

  console.log(page);

  return (
    <div className="mx-auto w-full h-full snap-y">
      <div className="w-full flex h-[74px] justify-between px-5 bg-white box-shadow  md:px-10 md:py-4 md:items-center md:h-[10vh]">
        <Link href="/home">
          <img
            src="/assets/landing/anj_logo.svg"
            className="h-16  w-40 xl:h-20 xl:w-56 self-center object-contain"
          />
        </Link>
        <img
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
              <Link href="/newpost">
                <li className="w-full text-left py-2 px-10 cursor-pointer text-black hover:text-[#214ED1] text-xs">
                  Add new post
                </li>
              </Link>
              <Link href="/applications">
                <li className="w-full text-left py-2 px-10 cursor-pointer text-black hover:text-[#214ED1] text-xs">
                  Applications
                </li>
              </Link>
              <li
                className="w-full text-left py-2 px-10 cursor-pointer text-black hover:text-[#214ED1] text-xs"
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
          Subscribers
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
              <button className="hidden md:w-fit font-medium text-white bg-[#214ED1] px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Add New Post
              </button>
            </Link>
          </div>
          <div>
            <Link href="/applications">
              <button className="hidden md:w-fit font-medium text-white bg-[#214ED1] px-4 py-1  rounded-md text-center md:flex items-center justify-center md:text-sm md:cursor-pointer">
                Applications
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full p-0 md:px-10">
        <div className="scrollbar-table">
          <table className="table-fixed w-[40rem]  md:w-full border-separate border-spacing-y-1">
            <thead className="overflow-x-auto">
              <tr className="bg-[#214ED1]">
                <th className="text-sm text-left w-20 md:w-40 text-white md:text-md font-normal px-5 md:px-3 py-3  break-words">
                  Si No
                </th>
                <th className="text-sm  text-left  text-white md:text-md font-normal  px-2 py-3 break-words">
                  Email
                </th>
                <th className="text-sm text-left text-white md:text-md font-normal px-2 py-3  break-words">
                  Subcribed Date
                </th>
              </tr>
            </thead>
            <tbody>
              {subcribers.length > 0 ? (
                subcribers.map((item, i) => {
                  return (
                    <tr className="bg-[#F9F9F9] " key={i}>
                      <td className="text-black self-start   text-sm md:text-md font-normal px-5 md:px-3 break-words">
                        {(page - 1) * 10 + i+1}
                      </td>
                      <td className="text-black self-start  text-sm md:text-md  font-normal px-2 py-3 break-words">
                        {item.email}
                      </td>
                      <td className="text-black self-start text-sm md:text-md  font-normal px-2 py-3 break-words">
                        {DateFormatter(item.createdAt)}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="col-span-12">
                  <td className="" colSpan={7}>
                    <div className="w-full h-fit flex flex-col justify-start md:justify-center">
                      <img
                        src="/admin/no_content.png"
                        className="w-96 h-[15rem] md:h-[20rem] md:self-center object-contain"
                      />
                      <p className="font-semibold ml-28 md:ml-0 text-primary-gray md:self-center">
                        No Subscribers Available
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div>
          {totalItems > 0 && (
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
