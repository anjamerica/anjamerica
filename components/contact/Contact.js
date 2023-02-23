import React, { useState, useContext, useRef } from "react";
import { loadingContext } from "../../hooks/loadingContext";
import { postMail } from "../../services/postMail";
import validator from "validator";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import API from "../../services/api";
import { LocationIcon } from "../common/icons";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig()


export default function Contact() {
  const [ details, setDetails ] = useState({});
  const [ formError, setFormError ] = useState({});
  const [ captchaValue, setCaptchaValue ] = useState("");
  const [ fileLocation, setFileLocation ] = useState("");
  const { loaderToggler } = useContext(loadingContext);
  const [ file, setFile ] = useState(false);
  const formRef = useRef();

  const handleInputChange = (key, value) => {
    setDetails({
      ...details,
      [ key ]: value,
    });
  };

  function onCaptchaChange(value) {
    setCaptchaValue(value);
  }

  const handleImageChange = (e) => {
    setFile(e.target.files[ 0 ]);
  };

  const handleSubmit = async () => {
    try {
      //validations
      if (!details.first_name) {
        return setFormError({ name_err: "First name is required" });
      }
      if (!details.mobile_number) {
        return setFormError({ number_err: "Number is required" });
      }
      if (details.mobile_number.length < 10) {
        return setFormError({ number_err: "Invalid Phone Number" });
      }
      if (details.mobile_number.length > 11) {
        return setFormError({ number_err: "Invalid Phone Number" });
      }
      if (!details.email) {
        return setFormError({ email_err: "Email is required" });
      }
      if (!validator.isEmail(details.email)) {
        return setFormError({ email_err: "Email is not valid" });
      }
      if (!details.description) {
        return setFormError({ description_err: "Description is required" });
      }
      if (!details.message) {
        return setFormError({ message_err: "Message is required" });
      }
      if (!captchaValue) {
        return setFormError({ captcha_err: "Please verify the captcha" });
      }

      let loc = "";
      if (file) {
        const url = "/api/admin/fileUpload";
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", file.name);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const response = await API.post(url, formData, config);
        loc = response?.data?.payload?.file_location;
      }

      const Details = {
        ...details,
        file_location: loc,
      };

      const res = await postMail(Details);
      toast.success("Message send successfully");
      setDetails({
        first_name: "",
        mobile_number: "",
        email: "",
        description: "",
        message: "",
      });
      setFile("");
      setFormError("");

      loaderToggler(false);
    } catch (error) {
      console.error(error);
      loaderToggler(false);
    }
  };
  return (
    <div className=" relative p-5 md:px-20  bg-white flex flex-col z-20 justify-center w-full h-fit">
      <div id="contact" className="absolute -top-[80px] h-0" />
      <span className="w-full text-[1.5rem] break-words heading-main text-[#0a1f44] text-center font-extrabold md:text-[38px] 2xl:text-[40px] md:leading-[42px] my-5">
        Have any Questions?
      </span>
      <div className="flex justify-center md:px-5">
        <div className="-mb-[3rem] h-fit w-full px-5 md:px-10 py-5 lg:p-20 z-0 grid grid-cols-1 gap-8 md:grid-cols-2 contact rounded-xl">
          {/* <Loader /> */}
          <div className="flex flex-col gap-2 md:gap-8">
            <div className="flex flex-col mt-2 sm:mt-2 gap-2">
              <span className="text-[1.5rem] text-left heading-main break-words text-black font-bold md:text-[2rem]">
                Get in touch with us
              </span>
              {/* <p className="font-[600] flex gap-2 items-start text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#141414]">
                <span>
                  <LocationIcon />
                </span>
                <span>8425 Pulsar Pl, Suite 280 Columbus, OH 43240</span>
              </p> */}
              {/* <div className="h-r" /> */}
              <p className="font-[600] flex gap-2 items-start text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#141414]">
                <span>
                  <LocationIcon />
                </span>
                <span>119 South Main Street, Memphis, TN 38103, USA</span>
              </p>
              <div className="h-r" />
              <p className="font-[600] flex gap-2 items-start text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#141414]">
                <span>
                  <LocationIcon />
                </span>
                <span>10 Billiter Road, L7A4G8, Brampton, Canada</span>
              </p>
              <div className="h-r" />
              <p className="font-[600] flex gap-2 items-start text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#141414]">
                <span>
                  <LocationIcon />
                </span>
                <span>
                  Devonshire House, 582 Honeypot Lane Stanmore, United Kingdom
                </span>
              </p>
              <div className="h-r" />
              <p className="font-[600] flex gap-2 items-start text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#141414]">
                <span>
                  <LocationIcon />
                </span>
                <span>
                  4th Floor, Teepeeyem Square, MG Road, Opposite Cochin
                  Shipyard, Ravipuram, Kochi - 682015, Kerala, India
                </span>
              </p>
              <div className="h-r" />
              <p className="font-[600] flex gap-2 items-start text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#141414]">
                <span>
                  <LocationIcon />
                </span>
                <span>
                  TC79/342(5), 2nd Floor, CPS Plaza, Opp KIA Motors NH Bypass,
                  Venpalavattom, Anayara (P.O) 695029, Thiruvananthapuram, Kerala, India
                </span>
              </p>
              <div className="h-r" />
              <p className="font-[600] flex gap-2 items-start text-[14px] sm:text-[16px] 2xl:text-[20px] text-[#141414]">
                <span>
                  <LocationIcon />
                </span>
                <span>
                  Old No.3, New No.20, Pycrofts Garden Road, Chennai - 600006, Tamil Nadu, India
                </span>
              </p>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
              <div className="flex flex-col mt-1 sm:mt-2 gap-2">
                <span className="text-[16px] heading-main font-[900] text-[#141414]">
                  Call Us
                </span>
                {/* <span className="font-[600] text-[14px] whitespace-nowrap md:text-[16px] 2xl:text-[20px] text-[#141414]">
                +1 (901) 371 7302 (USA)
              </span> */}
                <span className="font-[600] text-[14px] whitespace-nowrap md:text-[16px] mt-0  2xl:text-[20px] text-[#141414]">
                  +1 (901) 310 0451 (USA)
                </span>
                <span className="font-[600] text-[14px] whitespace-nowrap md:text-[16px] mt-0  2xl:text-[20px] text-[#141414]">
                  +44 798 878 2024 (United Kingdom)
                </span>
              </div>
              <div className="flex flex-col mt-2 md:mt-0 gap-2">
                <span className="text-[16px] heading-main font-[900] text-[#141414]">
                  Email Us
                </span>
                <span className="font-[600] text-[14px] md:text-[16px] 2xl:text-[20px] text-[#141414]">
                  contact@futureforwards.in
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 xl:px-[30px] md:py-[25px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <input
                  className="form-input col-span-1"
                  placeholder="Name"
                  value={details.first_name}
                  onChange={(e) =>
                    handleInputChange(
                      "first_name",
                      e.target.value.replace(/[^a-z]/gi, "")
                    )
                  }
                />
                <span className="text-xs text-red-600">
                  {formError.name_err}
                </span>
              </div>
              <div>
                <input
                  type="number"
                  className="form-input col-span-1"
                  placeholder="Mobile Number"
                  value={details.mobile_number}
                  onChange={(e) =>
                    handleInputChange("mobile_number", e.target.value)
                  }
                />
                <span className="text-xs text-red-600">
                  {formError.number_err}
                </span>
              </div>
            </div>
            <div>
              <input
                className="form-input"
                placeholder="Email"
                value={details.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <span className="text-xs text-red-600">
                {formError.email_err}
              </span>
            </div>
            <div className="w-full flex justify-between items-center text-white">
              {file?.name && (
                <span className="text-xs md:text-sm truncate w-fit">
                  {file?.name}
                </span>
              )}
              <label
                htmlFor="file-input"
                className=" p-2 cursor-pointer text-xs md:text-md 2xl:text-[18px]  bg-primary-yellow rounded-[.25rem] whitespace-nowrap text-black text-center leading-normal"
              >
                Upload
              </label>
              <input
                id="file-input"
                type="file"
                name="file"
                ref={formRef}
                style={{ display: "none" }}
                accept=".pdf"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
            <div>
              <input
                className="form-input"
                placeholder="Description"
                value={details.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
              <span className="text-xs text-red-600">
                {formError.description_err}
              </span>
            </div>
            <div>
              <textarea
                className="form-input resize-none overflow-y-auto h-[100px]"
                placeholder="Your message"
                value={details.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                maxLength="5000"
              />
              <span className="text-xs text-red-600">
                {formError.message_err}
              </span>
            </div>
            <div className="w-fit max-w-40">
              <ReCAPTCHA
                size="normal"
                class="g-recaptcha"
                sitekey={publicRuntimeConfig.RECAPTCHA_SITE_KEY}
                onChange={onCaptchaChange}

              />
              <span className="text-xs text-red-600">
                {formError.captcha_err}
              </span>
            </div>

            <hr className="hidden md:flex" />
            <button
              className="font-medium mt-2 text-black bg-[#04c0de] md:text-base px-4 py-3 hover:bg-white hover:text-[#04c0de] transition-all rounded-md text-center flex items-center justify-center text-md w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
