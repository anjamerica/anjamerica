import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { deleteJobDetails } from "../../services/JobDetails";
import JobApplyForm from "./JobApplyForm";
import ConfirmAlert from "../../components/common/ConfirmAlert";
import { toast } from "react-hot-toast";
import { deleteImage } from "../../services/file";
import { DateFormatter } from "../common/DateFormatter";

export default function JobCardAdmin({ item, getDetails }) {
  const [formModal, setFormModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const date = DateFormatter(item.createdAt);
  const router = useRouter();

  console.log(item);
  ~useEffect(() => {
    if (formModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [formModal]);

  // const handleDeleteJob = async () => {
  //   try {
  //     const headers = { Authorization: localStorage.getItem("token") };
  //     const res = await deleteJobDetails(item._id, headers);
  //     const respond = deleteImage(item?.image?.file_key);
  //     console.log(respond);
  //     getDetails();
  //     toast.success("Job is deleted successfully");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="relative h-fit md:h-fit lg:h-[15rem] flex flex-row select-none flex-1 bg-[#F0F0F0] rounded-lg w-full">
      <div
        className=" gap-2 flex flex-col p-4 md:gap-4"
        style={{ width: "inherit" }}
      >
        <div className="flex flex-col gap-0">
          <div className="flex flex-col lg:flex-row -mb-2 justify-between sm:w-[90%] h-fit items-start">
            <span className="text-[1rem] self-start md:text-base font-semibold">
              {item?.job_title}
            </span>
            <span className="flex flex-row self-start h-fit w-fit items-center gap-[4px] md:gap-1">
              {item?.ref_id && (
                <p className="text-[.8rem] md:text-[1rem] md:text-base font-semibold">
                  Ref ID: {item?.ref_id}
                </p>
              )}
              <span className="text-primary-blue font-semibold">|</span>
              <p className="text-[.8rem] md:text-[1rem] md:text-base font-semibold">
                Job ID: {item?.job_id}
              </p>
            </span>
          </div>
          <div className="p-0 mt-2">
            <span className="text-xs text-[#333] self-start font-light break-words">
              Posted Date : {date}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4 ">
          <p
            className={`${
              item?.is_active === true
                ? "bg-[#159234] z-10"
                : "bg-primary-red z-10"
            }text-[.8rem] rounded-full flex justify-center items-center text-white h-fit w-[4.5rem] p-0 md:w-[5rem] md:py-0`}
          >
            {item?.is_active === true ? "Active" : "Inactive"}
          </p>
        </div>
        <div>
          <p className="text-xs xl:text-[14px] max-h-[2.8rem] text-primary-gray font-light break-words overflow-y-hidden text-justify">
            {item?.description}
          </p>
        </div>
        <div className="flex flex-col mt-2 w-fit gap-2 md:gap-[64px] justify-between md:flex-row md:mt-0">
          <span className="text-xs  text-[#046AC8] md:font-semibold">
            Training : {item?.training_details?.training_type}
          </span>
          {item?.training_details?.training_type === "Not Provided" ? (
            <span className="text-xs  text-[#046AC8] md:font-semibold">
              Training Duration: 0 hrs
            </span>
          ) : (
            <span className="text-xs  text-[#046AC8] md:font-semibold">
              Training Duration: {item?.training_details?.training_duration} hrs
            </span>
          )}

          {item?.training_details?.training_type === "Not Provided" ? (
            <span className="text-xs  text-[#046AC8] md:font-semibold">
              Training Fee: 0
            </span>
          ) : (
            <span className="text-xs  text-[#046AC8] md:font-semibold">
              Training Fee: {item?.training_details?.training_fee?.training_fee}{" "}
              {item?.training_details?.training_fee?.currency}
            </span>
          )}

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
                <button className="w-[4.5rem]  font-semibold text-xs text-white bg-[#214ED1] px-4 py-2  rounded-full text-center flex items-center justify-center">
                  Edit
                </button>
              </Link>
              {/* <button
                className="w-[4.5rem] font-semibold text-xs text-white bg--green px-4 py-2  bg-primary-red uppercase rounded-full text-center flex items-center justify-center"
                onClick={() => setShowAlert(true)}
              >
                Delete
              </button>
              {showAlert && (
                <ConfirmAlert
                  content={`Are you sure?`}
                  handleCancel={() => setShowAlert(false)}
                  handleConfirm={async () => {
                    await handleDeleteJob();
                    setShowAlert(false);
                  }}
                />
              )} */}
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
          <div className="fixed top-10 z-50">
            <JobApplyForm setFormModal={setFormModal} item={item} />
          </div>
        )}
      </div>
    </div>
  );
}
