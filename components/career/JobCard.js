import Link from "next/link";
import { useRouter } from "next/router";
import React,{ useState,useEffect } from "react";
import { deleteJobDetails } from "../../services/JobDetails";
import JobApplyForm from "./JobApplyForm";
import Popup from 'reactjs-popup';
import {toast} from "react-hot-toast";

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
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflowY = 'scroll'
    }
  }, [formModal])

  const handleDeleteJob = async () => {
    try {
      const headers = { "Authorization": localStorage.getItem("token") };
      const res = await deleteJobDetails(item._id,headers);
      getDetails();
      toast.success("Job is deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-fit md:h-[15rem] flex flex-row  flex-1 bg-[#F0F0F0] rounded-lg w-full">
      {/* {popup.show && (
  <Popup
    handleDeleteTrue={handleDeleteTrue}
    handleDeleteFalse={handleDeleteFalse}
  />
)} */}
      <div className="rounded-l-lg">
        <img
          className="hidden md:flex md:h-full md:z-10 w-[17rem] object-cover rounded-l-lg"
          src={item?.image?.file_location||"/image.png"}
        />
      </div>
      <div
        className=" gap-2 flex flex-col p-4 md:gap-4"
        style={{ width: "inherit" }}
      >
        <div className="flex justify-between">
          <span className="text-[1rem] md:text-base md:font-semibold">
            {item?.job_title}
          </span>
          <span className="text-md md:text-base md:font-semibold">
            {item?.job_id}
          </span>
        </div>
        <div>
          <p className="text-xs max-h-[2.8rem] text-primary-gray font-light break-words overflow-y-hidden text-justify">
            {item?.description}
          </p>
        </div>
        <div className="flex flex-col mt-2 gap-2 justify-between md:flex-row md:mt-0">
          <span className="text-xs  text-[#046AC8] md:font-semibold">
            Training : {item?.training_details?.training_type}
          </span>
          <span className="text-xs  text-[#046AC8] md:font-semibold">
            Training Duration: {item?.training_details?.training_duration} hrs
          </span>
          <span className="text-xs  text-[#046AC8] md:font-semibold">
            Training Fee: {item?.training_details?.training_fee?.training_fee}{" "}{item?.training_details?.training_fee?.currency} 
          </span>

          <span className="text-xs  text-[#046AC8] md:font-semibold">
            Training Location: {item?.job_location?.city}
            {" , "} {item?.job_location?.state} {" , "}{" "}
            {item?.job_location?.country}
          </span>

          <span className="text-xs  text-[#046AC8] md:font-semibold">
            Pay : {item?.client_rate?.client_rate} {item?.client_rate?.currency}
          </span>
        </div>

        <div className="flex flex-row gap-4">
          {router.pathname == "/home" ? (
            <>
              <Link href={`home/${item._id}`}>
                <button className="w-[4.5rem] font-semibold text-xs text-white bg-primary-green px-4 py-2  uppercase rounded-full text-center flex items-center justify-center">
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
                <button className="w-fit font-semibold text-xs text-white bg-primary-green px-3 py-2  uppercase rounded-full text-center flex items-center justify-center">
                  READ MORE
                </button>
              </Link>
              <button
                className="w-fit font-semibold text-xs text-white bg-primary-green px-3 py-2  uppercase rounded-full text-center flex items-center justify-center"
                onClick={() => {
                  setFormModal(!formModal);
                }}
              >
                APPLY NOW
              </button>
            </>
          )}
        </div>
        {formModal && (
          <div className="fixed top-10">
            <JobApplyForm setFormModal={setFormModal} item={item}/>
          </div>
        )}
      </div>
    </div>
  );
}
