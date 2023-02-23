import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { deleteJobDetails } from "../../services/JobDetails";
import JobApplyForm from "./JobApplyForm";
import ConfirmAlert from "../common/ConfirmAlert";
import { toast } from "react-hot-toast";
import { DateFormatter } from "../common/DateFormatter";

export default function JobCard({ item, getDetails }) {
  const [ formModal, setFormModal ] = useState(false);
  const [ showAlert, setShowAlert ] = useState(false);
  const date = DateFormatter(item.createdAt);
  const router = useRouter();

  // const [popup, setPopup] = useState({
  //   show: false, // initial values set to false and null
  //   id: null,
  // });

  // const handleDelete = (id) => {
  //   setPopup({
  //     show: true,
  //     id,
  //   });
  // };

  // const handleDeleteTrue = async () => {
  //   if (popup.show && popup.id) {
  //     try {
  //       loaderToggler(true);
  //       const headers = { "Authorization": localStorage.getItem("token") };
  //       const res = await deleteJobDetails(item._id,headers);
  //       console.log("deleted succesfully");
  //       getDetails();
  //       loaderToggler(false)
  //     } catch (error) {
  //       console.error(error);
  //       loaderToggler(true);
  //     }
  //     setPopup({
  //       show: false,
  //       id: null,
  //     });
  //   }
  // };

  // const handleDeleteFalse = () => {
  //   setPopup({
  //     show: false,
  //     id: null,
  //   });
  // };

  useEffect(() => {
    if (formModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [ formModal ]);

  // const handleDeleteJob = async () => {
  //   try {
  //     const headers = { Authorization: localStorage.getItem("token") };
  //     const res = await deleteJobDetails(item._id, headers);
  //     getDetails();
  //     toast.success("Job is deleted successfully");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="relative h-fit md:h-[16rem] 2xl:h-[17rem] flex flex-row border-[1px]  border-[#E9E9E9] rounded-lg w-full">
      <div
        className=" gap-2 flex flex-col p-4 md:gap-4"
        style={{ width: "inherit" }}
      >
        <div className="flex flex-row  -mb-2 justify-between w-full h-fit items-start">
          <span className="text-[16px] self-start md:text-base 2xl:text-[20px] font-semibold">
            {item?.job_title}
          </span>

          <span className="flex flex-row self-start h-fit w-fit items-center gap-2 md:gap-4">
            <span className="text-[16px] md:text-base 2xl:text-[20px] font-semibold">
              {item?.job_id}
            </span>
          </span>
        </div>

        <div>
          <span className="text-[#949191] text-[16px] 2xl:text-[20px]">
            Training : {item?.training_details?.training_type}
          </span>
        </div>
        <div className="flex flex-col md:flex-row bg-[#EFEFEF] px-4 py-2 rounded-md justify-between">
          <div className="flex flex-col md:flex-row justify-start md:gap-4 md:w-[90%]">
            <span className="text-xs  md:text-[14px] 2xl:text-[20px] text-[#949191] md:font-[400]">
              Training Duration: {item?.training_details?.training_duration} hrs
            </span>
            <span className="text-xs md:text-[14px] 2xl:text-[20px] text-[#949191] md:font-[400]">
              Training Fee: {item?.training_details?.training_fee?.training_fee}{" "}
              {item?.training_details?.training_fee?.currency}
            </span>
            <span className="text-xs  md:text-[14px] 2xl:text-[20px] text-[#949191] md:font-[400]">
              Posted Date : {date}
            </span>
          </div>
          <span className="text-xs 2xl:text-[16px]  text-[#0339D9] md:font-[400]">
            Pay : {item?.client_rate?.client_rate} {item?.client_rate?.currency}
          </span>
        </div>
        <div className="relative">
          <p className="text-xs max-h-[3rem] text-[#464545] md:text-[14px] 2xl:text-[20px] 2xl:max-h-[4rem] 2xl:leading-[22px] font-light break-words overflow-y-hidden text-justify md:px-4">
            {item?.description}
          </p>
          <hr className="bg-[#E7E7E7] absolute -bottom-[.6rem] h-[.5px] w-full" />
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-0 mb-0">
          <span className="text-xs  text-[#949191] md:font-[400] md:text-[14px] 2xl:text-[20px] self-start my-2">
            Training Location: {item?.job_location?.city}
            {" , "} {item?.job_location?.state} {" , "}{" "}
            {item?.job_location?.country}
          </span>
          <div className="flex flex-row gap-4">
            <Link href={`career/${item._id}`}>
              <button className="btn-1 w-fit font-semibold text-xs text-white bg-primary-blue px-3 py-2  uppercase rounded-full text-center flex items-center justify-center">
                READ MORE
              </button>
            </Link>
            <button
              className="btn-1 w-fit font-semibold text-xs text-white bg-primary-blue px-3 py-2  uppercase rounded-full text-center flex items-center justify-center"
              onClick={() => {
                setFormModal(!formModal);
              }}
            >
              APPLY NOW
            </button>
          </div>
        </div>

        {formModal && (
          <div className="fixed top-10 z-50">
            <JobApplyForm setFormModal={setFormModal} item={item} />
          </div>
        )}
      </div>
    </div>
  );
}
