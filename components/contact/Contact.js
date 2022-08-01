import React, { useState, useContext } from "react";
import { loadingContext } from "../../hooks/loadingContext";
import { postMail } from "../../services/postMail";
import Loader from "../layout/Loader";
import validator from "validator";
import toast from "react-hot-toast";

export default function Contact() {
  const [details, setDetails] = useState({});
  const [formError, setFormError] = useState({});
  const { loaderToggler } = useContext(loadingContext);

  const handleInputChange = (key, value) => {
    setDetails({
      ...details,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // loaderToggler(true);
      //validations
      if (!details.first_name) {
        return setFormError({ name_err: "First name is required" });
      }
      if (!details.mobile_number) {
        return setFormError({ number_err: "Number is required" });
      }
      if (details.mobile_number.length > 12) {
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

      const Details = {
        ...details,
      };

      console.log(Details);

      const res = await postMail(Details);
      console.log(res);
      toast.success("Message send successfully");
      setDetails({
        first_name: "",
        mobile_number: "",
        email: "",
        description: "",
        message: "",
      });
      setFormError("");

      loaderToggler(false);
    } catch (error) {
      console.error(error);
      loaderToggler(false);
    }
  };

  return (
    <div className=" relative p-5 md:px-20 bg-[#ecf2f8] flex flex-col z-20 justify-center w-full h-fit">
      <span className="w-full text-[1.5rem] break-words text-[#0a1f44] text-center font-extrabold md:text-[2rem] my-2">
        Have any Questions?
      </span>
      <div>
        <div className="w-full -mb-[3rem] h-fit px-5 md:px-10 py-5 md:p-20 z-0  grid grid-cols-1 gap-8 md:grid-cols-2 contact rounded-xl">
          {/* <Loader /> */}
          <div className="flex flex-col gap-2 md:gap-8">
            <span className="text-[1.5rem] text-left break-words text-black font-bold md:text-[2rem]">
              Get in touch with us
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold text-[#141414]">
                LOCATE US
              </span>
              <span className="font-thin text-sm text-[#141414]">
                119 S. Main Street, Suite 500,<br/>Memphis, TN 38103,USA
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold text-[#141414]">
                CALL US
              </span>
              <span className="font-thin text-sm text-[#141414]">
                9016005572
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-semibold text-[#141414]">
                EMAIL US
              </span>
              <span className="font-thin text-sm text-[#141414]">
                contact@anjamerica.com
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="grid grid-cols-2 gap-2">
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
                placeholder="Email Address"
                value={details.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <span className="text-xs text-red-600">
                {formError.email_err}
              </span>
            </div>
            <div>
              <input
                className="form-input"
                placeholder="Short Description"
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
                className="form-input resize-none"
                placeholder="Your message..."
                value={details.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
              <span className="text-xs text-red-600">
                {formError.message_err}
              </span>
            </div>
            <hr />
            <button
              className="font-medium mt-2 text-white bg-[#04c0de] px-4 py-3 hover:bg-white hover:text-[#04c0de] transition-all  select-none rounded-md text-center flex items-center justify-center text-xs w-full"
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
