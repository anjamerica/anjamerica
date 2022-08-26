import { useRouter } from "next/router";
import React, { useState, useContext, useEffect } from "react";
import { loadingContext } from "../../hooks/loadingContext";
import { createJobApplicants } from "../../services/jobApplicants";
import { toast } from "react-hot-toast";
import API from "../../services/api";
import ButtonLoader from "../layout/ButtonLoader";
import { jobUpdatesPostMail } from "../../services/postMail";
import validator from "validator";
import { IoMdClose } from "react-icons/io";
import { country_code } from "../common/country-code.json";

export default function JobApplyForm({ item, setFormModal }) {
  const router = useRouter();
  console.log(router.query.jobId);
  const [details, setDetails] = useState({});
  const [phone, setPhone] = useState({ country_code: "+91" });
  const { loaderToggler } = useContext(loadingContext);
  const [formError, setFormError] = useState(null);
  const [file, setFile] = useState();
  const [fileKey, setFileKey] = useState();
  const [loading, isLoading] = useState(false);
  const country_codes = country_code;

  var allowedFiles = [".doc", ".docx", ".pdf"];
  var regex = new RegExp(
    "([a-zA-Z0-9s_\\.-:])+(" + allowedFiles.join("|") + ")$"
  );

  const maxSize = 2048;
  const fileSize = Math.round(file?.size / 1024);

  const handleDetailsChange = (key, value) => {
    setDetails({
      ...details,
      [key]: value,
    });
  };

  const handlePhoneDetailsChange = (key, value) => {
    setPhone({
      ...phone,
      [key]: value,
    });
  };

  const handleClearForm = () => {
    setDetails({});
    setPhone({});
  };

  const handleCvUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const validations = () => {
    //validations
    if (!details.name) {
       setFormError({ name_err: "Name is required" });
    }
    if (!phone.country_code) {
       setFormError({ country_code_err: "Country code is required" });
    }
    if (!phone.tell_number) {
       setFormError({ number_err: "Phone Number required" });
    }
    console.log(phone.tell_number.length);
    if (phone.tell_number.length < 9) {
       setFormError({ number_err: "Invalid Phone Number" });
       return false
    }
    if (phone.tell_number.length >= 15) {
       setFormError({ number_err: "Invalid Phone Number" });
       return false
    }
    if (!details.email) {
       setFormError({ email_err: "Email is required" });
       return false
    }
    if (!validator.isEmail(details.email)) {
       setFormError({ email_err: "Email is not valid" });
       return false
    }
    if (!details.description) {
       setFormError({ description_err: "Description is required" });
       return false
    }
    if (!details.link) {
       setFormError({ link_err: "Link is required" });
       return false
    }
    if (!validator.isURL(details.link)) {
       setFormError({ link_err: "Invalid link" });
       return false
    }
    if (!file) {
       setFormError({ file_err: "select a file" });
       return false
    }
    return true
    // if (file > maxSize) {
    //   return (
    //     setFormError({ file_err: "Please select a file less than 2mb" }),
    //     toast.error("File size exceeded")
    //   );
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormError(null);
      isLoading(true);
      const result =   validations();
      console.log(formError,"hhhhh");
      if (!result) {
        isLoading(false);
        return;
      }
      const url = "/api/admin/cvUpload";
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await API.post(url, formData, config);
      if (response.status === 200) {
        setFileKey(response?.data?.payload?.file_Key);
        let fileKey = response?.data?.payload?.file_Key;
        if (fileKey) {
          try {
            const applicantDetails = {
              job_id: item._id,
              ...details,
              phone_number: phone,
              file_key: fileKey,
              job_title: item.job_title,
            };
            console.log(applicantDetails);
            const res = await createJobApplicants(applicantDetails);
            handleClearForm();
            setFormModal(false);
            toast.success("Submitted successfully");
            console.log(res);
            console.log(res);
            if (res.data.status === 200) {
              const res = await jobUpdatesPostMail(applicantDetails);
              console.log(res);
            }
          } catch (err) {
            console.error(err?.response || err);
            loaderToggler(false);
            // toast.error("An error occured");
          }
        }
      }
      console.log(fileKey);
    } catch (error) {
      console.error(error);
      loaderToggler(false);
      isLoading(false);
    }
  };

  const handleDragOver = (event) => {
    let target = event.target;
    target.style.border = "2px solid #33B5AF";
  };

  const handleDrop = (event) => {
    let target = event.target;
    target.style.border = "none";
  };

  const handleDragLeave = (event) => {
    let target = event.target;
    target.style.border = "none";
  };

  useEffect(() => {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 w-full h-full flex justify-center items-center"
        id="modal"
      >
        {/* <div
          className="fixed left-0 top-0 bg-black w-full h-full opacity-[20%]"
          onClick={(e) => {
            setFormModal(false);
          }}
        ></div> */}
        <div
          className={`${
            router.pathname == "/career" &&
            "w-full fixed left-0 top-0 bg-black h-full opacity-25"
          }`}
          onClick={() => setFormModal(false)}
        ></div>
        <div
          id="modal-content"
          className={`${
            router.pathname == "/career"
              ? "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
              : ""
          }w-full bg-[#F0F0F0] flex flex-col gap-2 p-10 z-10 sm:w-[25rem]  sm:rounded-xl`}
        >
          <div className="flex flex-row justify-between w-full">
            <span className="text-xl md:font-semibold text-center ">
              {item?.job_title}
            </span>
            <span className="w-fit h-full" onClick={() => setFormModal(false)}>
              <IoMdClose className="w-fit h-8 text-primary-blue" />
            </span>
          </div>
          <input
            className="form-input"
            placeholder="Your name"
            value={details.name}
            onChange={(e) => {
              handleDetailsChange(
                "name",
                e.target.value.replace(/[^a-z/' ']/gi, "")
              );
            }}
          />
          <span className="text-xs text-red-700">{formError?.name_err}</span>
          <div className="relative flex flex-1 gap-0 focus:outline-none border-none rounded w-full leading-tight bg-[#FFFFFF]">
            <select
              className="min-w-10 w-14 focus:outline-none border-r my-1 text-xs truncate text-secondary-gray flex justify-center items-center bg-transparent px-1"
              value={phone.country_code}
              onChange={(e) =>
                handlePhoneDetailsChange("country_code", e.target.value)
              }
            >
              {country_codes &&
                country_codes.map((item, i) => {
                  return <option key={i}>{item?.country_code}</option>;
                })}
            </select>
            <div className="absolute top-[1rem] left-[2.5rem]">
              <img
                src="/admin/dropdown.svg"
                alt="dropdown icon"
                className="w-fit h-fit"
              />
            </div>
            <input
              className="focus:outline-none border-none py-3 truncate px-2 xl:px-3"
              type="number"
              placeholder="Phone number"
              value={phone.tell_number}
              onChange={(e) =>
                handlePhoneDetailsChange("tell_number", e.target.value)
              }
            />
          </div>
          <span className="text-xs text-red-700">
            {formError?.country_code_err}
            {formError?.number_err}
          </span>
          <input
            className="form-input"
            type="email"
            placeholder="Email ID"
            value={details.email}
            onChange={(e) => handleDetailsChange("email", e.target.value)}
          />
          <span className="text-xs text-red-700">{formError?.email_err}</span>
          <input
            className="form-input"
            placeholder="Enter short description"
            value={details.description}
            onChange={(e) => handleDetailsChange("description", e.target.value)}
          />
          <span className="text-xs text-red-700">
            {formError?.description_err}
          </span>
          <input
            className="form-input w-[95%] truncate"
            placeholder="Enter your linkedIn profile link."
            value={details.link}
            onChange={(e) => handleDetailsChange("link", e.target.value)}
          />
          <span className="text-xs text-red-700">{formError?.link_err}</span>
          <div
            className="relative w-full h-[4.5rem] rounded bg-white flex justify-center items-center cursor-pointer"
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              className="file-selector-button file self-center w-full h-full z-10 pl-3 pt-1"
              accept=".pdf"
              multiple={false}
              onChange={handleCvUpload}
              // onChange={(e)=>console.log(e.target.files[0])}
            />
            {!file && (
              <span className="invisible md:visible drop-zone-center self-center text-primary-gray cursor-pointer">
                Drop your CV here
              </span>
            )}
            {!file && (
              <span className="visible md:invisible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap item-center flex justify-center self-center text-primary-gray cursor-pointer">
                Click here to attach your cv
              </span>
            )}
            {file && (
              <span className="text-primary-gray absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {file.name}
              </span>
            )}
            {/* <Dropzone/> */}
          </div>
          <span className="text-xs text-red-700">{formError?.file_err}</span>
          <button
            className="w-full font-semibold text-xs text-white bg-primary-blue px-6 py-2 hover:bg-blue-800  rounded-md text-center flex items-center justify-center"
            onClick={handleSubmit}
          >
            {loading ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <>Submit</>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
