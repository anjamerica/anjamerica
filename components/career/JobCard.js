import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { deleteJobDetails } from "../../services/JobDetails";
import JobApplyForm from "./JobApplyForm";
import Popup from "reactjs-popup";
import { toast } from "react-hot-toast";

export default function JobCard({ item, getDetails }) {
  const [formModal, setFormModal] = useState(false);
  const router = useRouter();

  console.log(item);

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
  }, [formModal]);

  const handleDeleteJob = async () => {
    try {
      const headers = { Authorization: localStorage.getItem("token") };
      const res = await deleteJobDetails(item._id, headers);
      getDetails();
      toast.success("Job is deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-fit md:h-[15rem] flex flex-row border-[1px]  border-[#E9E9E9] rounded-lg w-full">
      <div
        className=" gap-2 flex flex-col p-4 md:gap-4"
        style={{ width: "inherit" }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-[1rem] md:text-base md:font-semibold">
              {item?.job_title}
            </span>
            <span className="text-[#949191] text-[1rem]">
              Training : {item?.training_details?.training_type}
            </span>
          </div>
          <span className="text-md md:text-base md:font-semibold">
            {item?.job_id}
          </span>
        </div>
        <div className="flex flex-col md:flex-row bg-[#EFEFEF] px-4 py-2 rounded-md justify-between">
          <div className="flex flex-col md:flex-row justify-between w-[30%]">
            <span className="text-xs md:text-[14px] text-[#949191] md:font-[400]">
              Training Duration: {item?.training_details?.training_duration} hrs
            </span>
            <span className="text-xs md:text-[14px]  text-[#949191] md:font-[400]">
              Training Fee: {item?.training_details?.training_fee?.training_fee}{" "}
              {item?.training_details?.training_fee?.currency}
            </span>
          </div>
          <span className="text-xs  text-[#07038C] md:font-[400]">
            Pay : {item?.client_rate?.client_rate} {item?.client_rate?.currency}
          </span>
        </div>
        <div>
          <p className="text-xs max-h-[2.8rem] text-[#464545] md:text-[14px] font-light break-words overflow-y-hidden text-justify md:px-4">
            {item?.description}
          </p>
        </div>
        <hr className="bg-[#E7E7E7] h-[.5px] w-full" />
        <div className="flex flex-col md:flex-row justify-between mb-0">
          <span className="text-xs  text-[#949191] md:font-[400] md:text-[14px] self-center">
            Training Location: {item?.job_location?.city}
            {" , "} {item?.job_location?.state} {" , "}{" "}
            {item?.job_location?.country}
          </span>
          <div className="flex flex-row gap-4">
            {router.pathname == "/home" ? (
              <>
                <Link href={`home/${item._id}`}>
                  <button className="w-[4.5rem] font-semibold text-xs text-white bg-primary-blue px-4 py-2  uppercase rounded-full text-center flex items-center justify-center">
                    Edit
                  </button>
                </Link>
                <button
                  className="w-[4.5rem] font-semibold text-xs text-white bg--green px-4 py-2  bg-primary-red uppercase rounded-full text-center flex items-center justify-center"
                  onClick={handleDeleteJob}
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <Link href={`career/${item._id}`}>
                  <button className="w-fit font-semibold text-xs text-white bg-primary-blue px-3 py-2  uppercase rounded-full text-center flex items-center justify-center">
                    READ MORE
                  </button>
                </Link>
                <button
                  className="w-fit font-semibold text-xs text-white bg-primary-blue px-3 py-2  uppercase rounded-full text-center flex items-center justify-center"
                  onClick={() => {
                    setFormModal(!formModal);
                  }}
                >
                  APPLY NOW
                </button>
              </>
            )}
          </div>
        </div>

        {formModal && (
          <div className="fixed top-10">
            <JobApplyForm setFormModal={setFormModal} item={item} />
          </div>
        )}
      </div>
    </div>
  );
}
