import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs"
import { AiOutlineLeft } from "react-icons/ai"


export default function Pagination({ total, countPerPage = 20, setCurrentPage, currentPage }) {

    const [ pageCount, setPageCount ] = useState(0)
    const [ selected, setSelected ] = useState(currentPage)



    useEffect(() => {
        setPageCount(Math.ceil(total / countPerPage))
    }, [ countPerPage, total ])

    const togglePage = (num) => {
        setCurrentPage(num)
        setSelected(num);
    }

    let items = [];
    let i = 0;

    let startNumber = (selected <= 6) ? 1 : (selected - 5);
    let EndNumber = (pageCount <= (selected + 5)) ? pageCount : (selected + 5);

    for (i = startNumber; i < selected; i++) {
        items.push(
            <Pagination_Button togglePage={togglePage} toPageNumber={i} key={`pagination ${i}`} extraClass={`bg-transparent hover:bg-gray-200 text-gray-700`}>
                {i}
            </Pagination_Button>
        );
    }

    items.push(
        <Pagination_Button togglePage={togglePage} toPageNumber={i} key={`pagination current`} extraClass="bg-primary-blue py-2 px-3 rounded-md hover:bg-blue-300 text-white">
            {i}
        </Pagination_Button>
    );

    for (i = (selected + 1); i <= EndNumber; i++) {
        items.push(
            <Pagination_Button togglePage={togglePage} toPageNumber={i} key={`pagination ${i}`} extraClass={`bg-transparent hover:bg-gray-200 font-semibold text-gray-700`}>
                {i}
            </Pagination_Button>
        );
    }

    return (
        <>
            <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                <div className="w-fit flex items-center gap-4">
                    <div className="">
                        {selected > 1 ?
                            <span onClick={() => togglePage(selected - 1)} className="flex items-center bg-[#F9F9F9] justify-center cursor-pointer w-8 h-9 rounded-full">
                                <AiOutlineLeft className="w-5 h-5 text-[#575454]"
                                 />
                            </span > :
                            <span className="flex items-center w-28"></span >
                        }
                    </div>
                    <div className="flex flex-row bg-[#F9F9F9] px-6 py-1 rounded-full">
                        {items}
                    </div>
                    <div className="">
                        {
                            selected != pageCount ?
                                <span onClick={() => togglePage(selected + 1)} className="flex items-center bg-[#F9F9F9] justify-center cursor-pointer w-8 h-9 rounded-full">
                                    <AiOutlineLeft className="w-5 h-5 text-[#575454] rotate-180"
                                 />
                                </span > :
                                <span className="flex items-center w-28">
                                </span >
                        }
                    </div>
                </div >
            </div >
        </>
    );
}


const Pagination_Button = ({ toPageNumber, children, activeClass, togglePage, extraClass = "" }) => {

    return (
        <button onClick={() => { togglePage(toPageNumber); }} className={`text-sm  leading-none cursor-pointer font-semibold self-center flex justify-center items-center  hover:border-indigo-300  mr-4 px-4 ${extraClass}`}
        >
            {children}
        </button>
    );
}