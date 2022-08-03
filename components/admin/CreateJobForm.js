import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect, useRef } from "react";
import { uploadImage } from "../../services/file";
import { getJobId } from "../../services/getJobId";
import {
  createJob,
  getJobDetailsById,
  updateJobDetails,
} from "../../services/JobDetails";
import { loadingContext } from "../../hooks/loadingContext";
import Loader from "../layout/Loader";
import { toast } from "react-hot-toast";
import API from "../../services/api";
import { MdOutlineLogout } from "react-icons/md";
// import {country_code} from "../common/country-code.json";
import { currencies } from "currencies.json";
import DropZone from "../common/DropZone";
import ButtonLoader from "../layout/ButtonLoader";

export default function CreateJobForm() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState(true);
  const [qualifications, setQuallifications] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [qualificationValue, setQuallificationsValue] = useState();
  const [responsibility, setResponsibility] = useState();
  const [certificate, setCertificate] = useState();
  const [vendorSalary, setVendorSalary] = useState({ currency: "INR" });
  const [clientSalary, setClientSalary] = useState({ currency: "INR" });
  const [trainingDetails, setTrainingDetails] = useState({ currency: "INR" });
  const [jobData, setJobData] = useState({});
  const [location, setLocation] = useState({});
  const [formError, setFormError] = useState({});
  const [id, setId] = useState("");
  const [loading, isLoading] = useState(false);
  const router = useRouter();
  const { loaderToggler } = useContext(loadingContext);
  const formRef = useRef();
  const Currencies = currencies;

  const nil = "NIL";

  const { jobId } = router.query;

  function setData(data) {
    if (data) {
      setId(data.job_id);
      setJobData({
        ref_id: data.ref_id,
        job_title: data.job_title,
        description: data.description,
        job_type: data.job_type,
      });
      setActive(data.is_active);
      setQuallifications([data.qualifications]);
      setClientSalary({
        currency: data.client_rate.currency,
        client_rate: data.client_rate.client_rate,
      });
      setVendorSalary({
        currency: data.vendor_rate.currency,
        vendor_rate: data.vendor_rate.vendor_rate,
      });
      setCertificates([data.license_certification]);
      setResponsibilities([data.key_responsiblities]);
      setTrainingDetails({
        training_duration: data.training_details.training_duration,
        training_fee: data.training_details.training_fee.training_fee,
        training_type: data.training_details.training_type,
        currency: data.training_details.training_fee.currency,
      });
      setLocation({
        country: data.job_location.country,
        state: data.job_location.state,
        city: data.job_location.city,
      });
    }
  }

  useEffect(() => {
    const getId = async () => {
      try {
        loaderToggler(true);
        //get job id
        const response = await getJobId();
        setId(response.data.data);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response);
        loaderToggler(false);
      }
    };
    getId();
  }, []);

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        loaderToggler(true);
        const response = await getJobDetailsById(jobId);
        setData(response.data.payload);
        loaderToggler(false);
      } catch (err) {
        loaderToggler(false);
      }
    };
    if (jobId) getJobDetails();
  }, [jobId]);

  const handleInputChange = (key, value) => {
    setJobData({
      ...jobData,
      [key]: value,
    });
  };

  const handleInputVendorRateChange = (key, value) => {
    setVendorSalary({
      ...vendorSalary,
      [key]: value,
    });
  };

  const handleInputClientRateChange = (key, value) => {
    setClientSalary({
      ...clientSalary,
      [key]: value,
    });
  };

  const handleInputLocationChange = (key, value) => {
    setLocation({
      ...location,
      [key]: value,
    });
  };

  const handleTrainingDetailsChange = (key, value) => {
    setTrainingDetails({
      ...trainingDetails,
      [key]: value,
    });
  };

  const addCertificate = (certificateValue) => {
    const newCertificates = [...certificates, certificateValue];
    setCertificates(newCertificates);
  };

  const removeCertificate = (index) => {
    const newCertificates = [...certificates];
    newCertificates.splice(index, 1);
    setCertificates(newCertificates);
  };

  const addResponsibilty = (responsibiltyValue) => {
    const newResponsibility = [...responsibilities, responsibiltyValue];
    setResponsibilities(newResponsibility);
  };

  const removeResponsibility = (index) => {
    const newResponsibility = [...responsibilities];
    newResponsibility.splice(index, 1);
    setResponsibilities(newResponsibility);
  };

  const addQualification = (qualification) => {
    const newQualification = [...qualifications, qualification];
    setQuallifications(newQualification);
  };

  const removeQualification = (index) => {
    const newQualifications = [...qualifications];
    newQualifications.splice(index, 1);
    setQuallifications(newQualifications);
  };

  const handleQualificationChange = (e) => {
    if (!qualificationValue) return;
    addQualification(qualificationValue);
    setQuallificationsValue("");
  };

  const handleResponsibiltyChange = (e) => {
    if (!responsibility) return;
    addResponsibilty(responsibility);
    setResponsibility("");
  };

  const handleCertificateChange = (e) => {
    if (!certificate) return;
    addCertificate(certificate);
    setCertificate("");
  };

  const handleClearForm = () => {
    setJobData({});
    setActive(false);
    setCertificates([]);
    setClientSalary({});
    setLocation({});
    setVendorSalary({});
    setQuallifications([]);
    setTrainingDetails({});
  };

  const handleLogout = () => {
    loaderToggler(true);
    localStorage.removeItem("token");
    router.push("/login");
    loaderToggler(false);
  };

  const validations = () => {
    setFormError("");
    if (!jobData.ref_id) {
      return setFormError({ ref_id_err: "Referrel id is required" });
    }
    if (!jobData.job_title) {
      return setFormError({ job_title_err: "Job title is required" });
    }
    if (!jobData.description) {
      return setFormError({ description_err: "Description is required" });
    }
    if (!jobData.job_type) {
      return setFormError({ job_type_err: "Job type is required" });
    }
    if (qualifications.length === 0) {
      return setFormError({ qualifications_err: "Qualification is required" });
    }
    if (!vendorSalary.currency) {
      return setFormError({ vendor_currency_err: "Currency type is required" });
    }
    if (!vendorSalary.vendor_rate) {
      return setFormError({ vendor_rate_err: "Vendor Salary is required" });
    }
    if (vendorSalary.vendor_rate < 0) {
      return setFormError({ vendor_rate_err: "Invalid input" });
    }
    if (!clientSalary.currency) {
      return setFormError({ client_currency_err: "Currency type is required" });
    }
    if (!clientSalary.client_rate) {
      return setFormError({ client_rate_err: "Client Salary is required" });
    }
    if (clientSalary.client_rate < 0) {
      return setFormError({ client_rate_err: "Invalid input" });
    }
    if (responsibilities.length === 0) {
      return setFormError({
        responsibilities_err: "Responsibilities is required",
      });
    }
    if (certificates.length === 0) {
      return setFormError({ certificates_err: "Certificates is required" });
    }
    if (!trainingDetails.training_type) {
      return setFormError({ training_type_err: "Training type is required" });
    }
    if (!trainingDetails.training_duration) {
      return setFormError({
        training_duration_err: "Training duration is required",
      });
    }
    if (trainingDetails.training_duration < 0) {
      return setFormError({
        training_duration_err: "Training duration must be positive",
      });
    }
    if (!trainingDetails.training_fee) {
      return setFormError({ training_fee_err: "Training fee is required" });
    }
    if (trainingDetails.training_fee < 0) {
      return setFormError({
        training_fee_err: "Invalid Input",
      });
    }
    if (!location.country) {
      return setFormError({ country_err: "Country is required" });
    }
    if (!location.state) {
      return setFormError({ state_err: "State is required" });
    }
    if (!location.city) {
      return setFormError({ city_err: "City is required" });
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    isLoading(true);
    
    let jobDetails = {
      job_id: id,
      ...jobData,
      qualifications: qualifications,
      client_rate: clientSalary,
      vendor_rate: vendorSalary,
      key_responsiblities: responsibilities,
      license_certification: certificates,
      training_details: trainingDetails,
      job_location: location,
      is_active: active,
    };
    if (!jobId) {
      try {
        validations();
        const headers = { Authorization: localStorage.getItem("token") };
        const res = await createJob(jobDetails, headers);
        handleClearForm();
        toast.success("Job created successfully");
        router.push("/home");
      } catch (err) {
        console.error(err?.response);
        toast.error("An error occured");
        isLoading(false)
      }
    } else {
      try {
        validations();
        const headers = { Authorization: localStorage.getItem("token") };
        const res = await updateJobDetails(jobId, jobDetails, headers);
        toast.success("Job details updated succesfully");
        router.push("/home");
      } catch (err) {
        console.error(err?.response);
        toast.error("An error occured");
        isLoading(false)
      }
    }
  };
  return (
    <div className="relative mx-auto w-full h-full snap-y pb-10">
      <Loader />
      <div className="w-full flex h-[8hv] justify-between px-4 bg-primary-black  md:px-10 md:py-4 md:items-center md:h-[10vh]">
        <Link href="/home">
          <img
            src="/landing/logo.svg"
            className="h-16 w-40 -ml-5 md:-ml-12 xl:h-20 xl:w-56 object-contain"
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
        <div className="absolute top-[4rem] right-[0rem] z-10">
          <div className="w-fit bg-[#F0F0F0] flex justify-center h-fit md:hidden">
            <ul>
              <Link href="/applications">
                <li className="w-full text-left py-2 cursor-pointer px-10 text-black hover:text-primary-blue text-xs">
                  Applications
                </li>
              </Link>
              <li
                className="w-full text-left py-2 cursor-pointer px-10 text-black hover:text-primary-blue text-xs"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className="flex flex-row justify-between p-5 md:p-10"
        onClick={() => setNavOpen(!navOpen)}
      >
        <div className="text-xl ml-1 md:ml-0">Job Posts</div>
        <div>
          <div className="flex gap-3">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={(e) => setActive(!active)}
                  className="sr-only"
                  //   onChange={}
                />
                <div
                  className={`block w-[5.5rem] h-8 rounded-full ${
                    active ? " bg-[#1DA740] " : "bg-primary-red"
                  }`}
                >
                  {active ? (
                    <span className="absolute top-1 left-[.4rem] font-medium text-white">
                      Active
                    </span>
                  ) : (
                    <span className="absolute top-[.3rem] left-[1.9rem] font-medium text-sm text-white">
                      Inactive
                    </span>
                  )}
                </div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      {/* <form onSubmit={handleSubmitForm()}> */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2  md:gap-4 px-5 md:px-10">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <span className="form-text">Job ID</span>
            <input
              className="form-input-job"
              type="text"
              placeholder="NT001"
              value={id}
              disabled={true}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="form-text">Referral ID</span>
            <input
              className="form-input-job"
              type="text"
              placeholder="Type Referral ID"
              // value={jobData.job_type === "Contract" ? jobData.ref_id : nil}
              value={jobData.ref_id}
              onChange={(e) => handleInputChange("ref_id", e.target.value)}
            />
            <span className="text-xs text-red-600">{formError.ref_id_err}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="form-text">Job Title</span>
            <input
              className="form-input-job"
              type="text"
              placeholder="Type Job Title"
              value={jobData.job_title}
              onChange={(e) => handleInputChange("job_title", e.target.value)}
            />
            <span className="text-xs text-red-600">
              {formError.job_title_err}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="form-text">Job Description</span>
            <textarea
              type="text"
              className="form-input-job outline-none resize-none h-[8.5rem] p-2"
              placeholder="Write your message..."
              value={jobData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
            <span className="text-xs text-red-600">
              {formError.description_err}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="form-text">Qualifications</span>
            <div className="form-input-job outline-none resize-none h-[8.5rem] p-5 overflow-y-auto">
              <div className="flex justify-between gap-2">
                <input
                  className="focus:outline-none border border-[#565962] border-opacity-[33%] rounded w-full p-2 xl:px-3 leading-tight bg-[#FFFFFF]"
                  type="text"
                  placeholder="Add Qualification"
                  value={qualificationValue}
                  onChange={(e) => setQuallificationsValue(e.target.value)}
                />
                <button
                  className="cyan-action-button-admin"
                  onClick={(e) => handleQualificationChange()}
                >
                  Add
                </button>
              </div>
              <div>
                {qualifications.map((item, i) => {
                  return (
                    <div
                      className="gap-3 flex justify-between items-center"
                      key={i}
                    >
                      <div className="flex flex-1 gap-3 items-start">
                        <div className="mt-2">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="6.94397"
                              width="9"
                              height="9"
                              transform="rotate(-49 0 6.94397)"
                              fill="#444348"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#444348] text-sm self-center break-words">
                            {item}
                          </p>
                        </div>
                      </div>
                      <button
                        className="w-fit font-medium text-white bg-[#A9B0B0] px-2 mt-1 py-1 text-xs rounded-md  text-center flex items-center justify-center"
                        onClick={(e) => removeQualification(i)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <span className="text-xs text-red-600">
              {formError.qualifications_err}
            </span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-lg text-subheading-gray font-semibold">
              Salary
            </span>
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-2">
              <div className="relative flex flex-col justify-between gap-2 w-full">
                <span className="form-text">Vendor</span>
                <div className="relative flex flex-1 focus:outline-none border border-[#565962] border-opacity-[33%] rounded w-full leading-tight bg-[#FFFFFF]">
                  <select
                    className="min-w-10 w-10 focus:outline-none border-r text-xs truncate text-secondary-gray flex justify-center items-center bg-transparent px-1"
                    value={vendorSalary.currency}
                    onChange={(e) => {
                      handleInputVendorRateChange("currency", e.target.value);
                    }}
                  >
                    {Currencies &&
                      Currencies.map((item, i) => {
                        return (
                          <option key={i} value={item.code}>
                            {item.code}
                          </option>
                        );
                      })}
                  </select>

                  <div className="absolute top-[1rem] left-[1.6rem] md:left-[1.6rem] xl:left-[1.8rem]">
                    <img src="/admin/dropdown.svg" className="w-fit h-fit" />
                  </div>
                  <input
                    className="focus:outline-none text-[#74777B] border-none py-3 truncate px-2 xl:px-3"
                    type="number"
                    placeholder="Type Vendor Salary"
                    value={vendorSalary.vendor_rate}
                    onChange={(e) => {
                      handleInputVendorRateChange(
                        "vendor_rate",
                        e.target.value
                      );
                    }}
                  />
                </div>
                <span className=" text-xs text-red-600 h-[15px]">
                  {formError.vendor_currency_err} {formError.vendor_rate_err}
                </span>
              </div>

              <div className="flex flex-col justify-between gap-2 w-full">
                <span className="form-text">Client</span>
                <div className="relative flex flex-1 focus:outline-none border border-[#565962] border-opacity-[33%] rounded w-full leading-tight bg-[#FFFFFF]">
                  <select
                    className="w-10 focus:outline-none border-r text-xs truncate text-secondary-gray flex justify-center items-center bg-transparent px-1"
                    value={clientSalary.currency}
                    onChange={(e) => {
                      handleInputClientRateChange("currency", e.target.value);
                    }}
                  >
                    {Currencies &&
                      Currencies.map((item, i) => {
                        return (
                          <option key={i} value={item.code}>
                            {item.code}
                          </option>
                        );
                      })}
                  </select>
                  <div className="absolute top-[1rem] left-[1.6rem] md:left-[1.6rem] xl:left-[1.8rem]">
                    <img src="/admin/dropdown.svg" className="w-fit h-fit" />
                  </div>
                  <input
                    className="focus:outline-none text-[#74777B] border-none py-3 px-2 xl:px-3 truncate"
                    type="number"
                    placeholder="Type Client Salary"
                    value={clientSalary.client_rate}
                    onChange={(e) => {
                      handleInputClientRateChange(
                        "client_rate",
                        e.target.value
                      );
                    }}
                  />
                </div>
                <span className="text-xs text-red-600 h-[15px]">
                  {formError?.client_currency_err} {formError?.client_rate_err}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <span className="form-text">Job Type</span>
            <div className="relative">
              <select
                className="form-input-job"
                value={jobData.job_type}
                onChange={(e) => handleInputChange("job_type", e.target.value)}
                defaultValue=""
              >
                <option className="text-sm" value="" disabled>
                  Select Job Type
                </option>
                <option className="'text-sm" value="Contract">
                  Contract
                </option>
                <option className="'text-sm" value="Direct">
                  Direct
                </option>
              </select>
              <div className="absolute top-[1rem] right-[.5rem]">
                <svg
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 9.85718L0.00480938 0.214322L12.9952 0.214322L6.5 9.85718Z"
                    fill="#C7C8CB"
                  />
                </svg>
              </div>
            </div>
            <span className="text-xs text-red-600">
              {formError.job_type_err}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="form-text">Responsibilities</span>
            <div className="form-input-job outline-none resize-none h-[8.5rem] p-5  overflow-y-auto">
              <div className="flex justify-between gap-2">
                <input
                  className="focus:outline-none border border-[#565962] border-opacity-[33%] rounded w-full p-2 xl:px-3 leading-tight bg-[#FFFFFF]"
                  type="text"
                  placeholder="Add Responsibilities"
                  value={responsibility}
                  onChange={(e) => setResponsibility(e.target.value)}
                />
                <button
                  className="cyan-action-button-admin"
                  onClick={(e) => handleResponsibiltyChange()}
                >
                  Add
                </button>
              </div>
              {responsibilities.map((item, i) => {
                return (
                  <div
                    className="gap-3 flex justify-between items-center"
                    key={i}
                  >
                    <div className="flex flex-1 gap-3 items-start">
                      <div className="mt-2">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="6.94397"
                            width="9"
                            height="9"
                            transform="rotate(-49 0 6.94397)"
                            fill="#444348"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#444348] text-sm self-center break-words">
                          {item}
                        </p>
                      </div>
                    </div>
                    <button
                      className="w-fit font-medium text-white bg-[#A9B0B0] px-2 mt-1 py-1 text-xs rounded-md  text-center flex items-center justify-center"
                      onClick={(e) => removeResponsibility(i)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
            <span className="text-xs text-red-600">
              {formError.responsibilities_err}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="form-text">License and Certifications</span>
            <div className="form-input-job outline-none resize-none h-[8.5rem] p-5  overflow-y-auto">
              <div className="flex justify-between gap-2">
                <input
                  className="focus:outline-none border border-[#565962] border-opacity-[33%] rounded w-full p-2 xl:px-3 leading-tight bg-[#FFFFFF]"
                  type="text"
                  placeholder="Type License and Certifications"
                  value={certificate}
                  onChange={(e) => setCertificate(e.target.value)}
                />
                <button
                  className="cyan-action-button-admin"
                  onClick={(e) => handleCertificateChange()}
                >
                  Add
                </button>
              </div>
              <div>
                {certificates.map((item, i) => {
                  return (
                    <div
                      className="gap-3 flex justify-between items-center"
                      key={i}
                    >
                      <div className="flex flex-1 gap-3 items-start">
                        <div className="mt-2">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="6.94397"
                              width="9"
                              height="9"
                              transform="rotate(-49 0 6.94397)"
                              fill="#444348"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#444348] text-sm self-center break-words">
                            {item}
                          </p>
                        </div>
                      </div>
                      <button
                        className="w-fit font-medium text-white bg-[#A9B0B0] px-2 mt-1 py-1 text-xs rounded-md  text-center flex items-center justify-center"
                        onClick={(e) => removeCertificate(i)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
              <span className="text-xs text-red-600">
                {formError.certificates_err}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg md:mt-4 text-subheading-gray font-semibold">
              Training
            </span>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 mt-2">
              <div className="flex flex-col justify-between gap-2">
                <span className="form-text">Type</span>
                <div className="relative">
                  <select
                    className="form-input-job truncate w-[90%]"
                    placeholder="Select Training Type"
                    value={trainingDetails.training_type}
                    defaultValue=""
                    onChange={(e) => {
                      handleTrainingDetailsChange(
                        "training_type",
                        e.target.value
                      );
                    }}
                  >
                    <option value="" disabled>
                      Select Training Type
                    </option>
                    <option className="'text-sm" value="Provided">
                      Provided
                    </option>
                    <option className="'text-sm" value="Not Provided">
                      Not Provided
                    </option>
                  </select>
                  <div className="absolute top-[1rem] right-[.5rem]">
                    <svg
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 9.85718L0.00480938 0.214322L12.9952 0.214322L6.5 9.85718Z"
                        fill="#C7C8CB"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs text-red-600 h-[15px]">
                  {formError.training_type_err}
                </span>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <span className="form-text">Duration</span>
                <div className="flex flex-col justify-between gap-2">
                  <input
                    className="form-input-job"
                    type="number"
                    placeholder="Type Duration(in hours)"
                    // value={
                    //   trainingDetails.training_type === "Not Provided"
                    //     ? 0
                    //     : trainingDetails.training_duration
                    // }
                    value={trainingDetails.training_duration}
                    onChange={(e) =>
                      handleTrainingDetailsChange(
                        "training_duration",
                        e.target.value
                      )
                    }
                  />
                  <span className="text-xs text-red-600 h-[15px]">
                    {formError.training_duration_err}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <span className="form-text">Fee</span>
                <div className="relative flex flex-1 focus:outline-none border border-[#565962] border-opacity-[33%] rounded w-full leading-tight bg-[#FFFFFF]">
                  <select
                    className="min-w-10 w-10 focus:outline-none border-r text-xs truncate text-[#74777B] flex justify-center items-center bg-transparent px-1"
                    value={trainingDetails.currency}
                    onChange={(e) => {
                      handleTrainingDetailsChange("currency", e.target.value);
                    }}
                  >
                    {Currencies &&
                      Currencies.map((item, i) => {
                        return (
                          <option key={i} value={item.code}>
                            {item.code}
                          </option>
                        );
                      })}
                  </select>

                  <div className="absolute top-[1rem] left-[1.6rem] md:left-[1.6rem] xl:left-[1.7rem]">
                    <img src="/admin/dropdown.svg" className="w-fit h-fit" />
                  </div>
                  <input
                    className="focus:outline-none border-none py-3 text-secondary-gray truncate px-2 xl:px-3"
                    type="number"
                    placeholder="Type Fee"
                    value={trainingDetails.training_fee}
                    onChange={(e) => {
                      handleTrainingDetailsChange(
                        "training_fee",
                        e.target.value
                      );
                    }}
                  />
                </div>
                <span className="text-xs text-red-600 h-[15px]">
                  {formError.training_fee_err}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg mt-4 text-subheading-gray font-semibold">
              Location
            </span>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 mt-2">
              <div className="flex flex-col justify-between gap-2">
                <span className="form-text">Country</span>
                <div className="flex flex-col justify-between gap-2">
                  <input
                    className="form-input-job"
                    type="text"
                    placeholder="Type Country"
                    value={location.country}
                    onChange={(e) => {
                      handleInputLocationChange("country", e.target.value);
                    }}
                  />
                  <span className="text-xs text-red-600 h-[15px]">
                    {formError.country_err}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <span className="form-text">State</span>
                <div className="flex flex-col justify-between gap-2">
                  <input
                    className="form-input-job"
                    type="text"
                    placeholder="Type State"
                    value={location.state}
                    onChange={(e) => {
                      handleInputLocationChange("state", e.target.value);
                    }}
                  />
                  <span className="text-xs text-red-600 h-[15px]">
                    {formError.state_err}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2">
                <span className="form-text">City</span>
                <div className="flex flex-col justify-between gap-2">
                  <input
                    className="form-input-job"
                    type="text"
                    placeholder="Type City"
                    value={location.city}
                    onChange={(e) => {
                      handleInputLocationChange("city", e.target.value);
                    }}
                  />
                  <span className="text-xs text-red-600 h-[15px]">
                    {formError.city_err}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-xs text-red-600">{formError.file_err}</span>
            <div className="mt-10  justify-end  w-full flex flex-row gap-2">
              <Link href="/home">
                <button className="w-32 font-medium text-white bg-[#A9B0B0] px-4 py-1  uppercase rounded  text-center flex items-center justify-center">
                  Cancel
                </button>
              </Link>
              <button
                className="w-32 font-medium text-white bg-primary-blue px-4 py-1 gap-2 uppercase rounded  text-center flex items-center justify-center"
                onClick={(e) => handleSubmitForm(e)}
                disabled={loading}
              >
                {loading ? (
                  <div>
                    <ButtonLoader />
                  </div>
                ) : (
                  <>Save</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
