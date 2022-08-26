import React, { useState } from "react";
import { DateFormatter } from "../common/DateFormatter";
import ApplicantDetailsModal from "./ApplicantDetailsModal";

export default function ApplicationDetails({ item, filter }) {
  const [modal, setModal] = useState(false);
  const date = DateFormatter(item.createdAt);

  return (
    <>
      <tr
        className={`${
          item?.job_details?.is_active === true
            ? "bg-[#F9F9F9] w-full"
            : "bg-[#E7E7E7] w-full"
        }`}
      >
        <td className="text-black  text-sm md:text-md font-normal px-5 md:px-3 break-words">
          {item.app_id}
        </td>
        <td className="text-black  text-sm md:text-md font-normal px-2 py-3 break-words">
          {item.name}
        </td>
        <td className="text-black  text-sm md:text-md font-normal px-2 py-3 break-words">
          <span>{item?.phone_number?.country_code}</span>
          <span className="ml-2">{item?.phone_number?.tell_number}</span>
        </td>
        <td className="text-black w-40 text-sm md:text-md font-normal px-2 py-3 break-words">
          {item.email}
        </td>

        <td className="text-black w-40 text-sm md:text-md font-normal px-2 py-3 break-words">
          {date}
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
          onClick={() => {
            setModal(!modal);
          }}
          className={`${
            item?.job_details?.is_active === true
              ? "bg-[#F2F1F1] sticky right-0  w-28 text-sm  lg:bg-[#F9F9F9]   text-[#214ED1] text-center font-normal px-2 py-3  break-words cursor-pointer"
              : "bg-[#D0CFCF] md:bg-[#D0CFCF]   sticky right-0  w-28 text-sm  text-[#214ED1] text-center font-normal px-2 py-3  break-words cursor-pointer"
          }`}
          style={filter ? { display: "flex",width:"112px",justifyContent:"center",zIndex:"-10" } : { position: "sticky" }}
        >
          VIEW
        </td>
        {modal && (
          <div className="fixed top-10 z-50">
            <ApplicantDetailsModal setModal={setModal} item={item} />
          </div>
        )}
      </tr>
    </>
  );
}
