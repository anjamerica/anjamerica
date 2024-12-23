import { useState } from "react";

import { GoArrowUpRight } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";

import Container from "../../common/Container";
import { contactUsAPI } from "../../../services/subscribe";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    description: "",
    mobile_number: "",
    country_code: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Regex to allow only alphabets (no spaces)
    const alphabetRegex = /^[A-Za-z]*$/;
    const maxLength = 50;

    if (
      (name === "first_name" || name === "last_name") &&
      (!alphabetRegex.test(value) || value.length > maxLength)
    ) {
      // Prevent updating state if the value contains non-alphabetic characters,
      // spaces, or exceeds the character limit
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.first_name?.trim()) {
      validationErrors.first_name = "First name is required.";
    }

    if (!formData.last_name?.trim()) {
      validationErrors.last_name = "Last name is required.";
    }

    if (!formData.email?.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Invalid email format.";
    }

    if (!formData.mobile_number?.trim()) {
      validationErrors.mobile_number = "Phone number is required.";
    } else if (!/^[0-9]{7,15}$/.test(formData.mobile_number)) {
      validationErrors.mobile_number = "Invalid phone number";
    }

    if (formData.description && formData.description.length > 720) {
      validationErrors.description = "Message cannot exceed 720 characters.";
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);
      const res = await contactUsAPI(formData);
      setFormData({
        first_name: "",
        last_name: "",
        description: "",
        mobile_number: "",
        country_code: "",
        email: "",
      });

      if (res.status == 200) {
        toast.success("Form submitted successfully");
      } else {
        toast.error("An error occurred.");
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("An error occurred.");
      setIsLoading(false);
    }
  };

  const handleAgree = (e) => {
    setIsTermsAgreed(e?.target?.checked);
  };

  return (
    <Container className="w-full flex justify-center items-center md:px-5">
      <Toaster />
      <div className="w-full max-w-[1618px] py-6 md:py-12">
        <div className="w-full flex flex-wrap mt-5 md:mt-10a">
          <form className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:pr-4 pb-4 md:pb-8">
              <label
                data-aos="fade-top"
                data-aos-duration="500"
                className="pb-4 input-label"
              >
                First Name
              </label>
              <div
                className="w-full"
                data-aos="fade-top"
                data-aos-duration="500"
              >
                <input
                  name="first_name"
                  placeholder="Enter First Name"
                  className="w-full border-input p-2"
                  value={formData?.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && (
                  <span className="text-red-500">{errors.first_name}</span>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-4 pb-4 md:pb-8">
              <label
                data-aos="fade-top"
                data-aos-duration="500"
                className="pb-4 input-label"
              >
                Last Name
              </label>
              <div
                className="w-full"
                data-aos="fade-top"
                data-aos-duration="500"
              >
                <input
                  name="last_name"
                  placeholder="Enter Last Name"
                  className="w-full border-input p-2"
                  value={formData?.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && (
                  <span className="text-red-500">{errors.last_name}</span>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-4 pb-4 md:pb-8">
              <label
                data-aos="fade-top"
                data-aos-duration="500"
                className="pb-4 input-label"
              >
                Email
              </label>
              <div
                className="w-full"
                data-aos="fade-top"
                data-aos-duration="500"
              >
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full border-input p-2"
                  value={formData?.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-4 pb-4 md:pb-8">
              <label
                data-aos="fade-top"
                data-aos-duration="500"
                className="pb-4 input-label"
              >
                Phone Number
              </label>
              <div
                className="w-full"
                data-aos="fade-top"
                data-aos-duration="500"
              >
                <input
                  name="mobile_number"
                  placeholder="Enter Phone Number"
                  className="w-full border-input p-2"
                  value={formData?.mobile_number}
                  onChange={handleChange}
                />
                {errors.mobile_number && (
                  <span className="text-red-500">{errors.mobile_number}</span>
                )}
              </div>
            </div>
            <div className="w-full lg:pr-4 pb-4">
              <label
                data-aos="fade-top"
                data-aos-duration="500"
                className="pb-4 input-label"
              >
                Message
              </label>
              <div
                className="w-full"
                data-aos="fade-top"
                data-aos-duration="500"
              >
                {/* <input
                    placeholder="Enter First Name"
                    
                  /> */}
                <textarea
                  name="description"
                  placeholder="Enter Your Message"
                  className="w-full border-input p-2 resize-none h-[120px]"
                  value={formData?.description}
                  onChange={handleChange}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500">{errors.description}</span>
                )}
              </div>
            </div>
            <div className="w-full lg:pr-4 pt-4 flex flex-wrap items-center">
              <div className="flex pb-4 lg:pb-0">
                <span>
                  <input
                    className="w-4 h-4 rounded-[2px] border border-[#262626] checked:bg-white bg-[#1a1a1a] appearance-none cursor-pointer"
                    type="checkbox"
                    onChange={handleAgree}
                  />
                </span>
                <span className="w-full flex text-white">
                  <span className="pl-2">
                    I agree with Terms of Use and Privacy Policy
                  </span>
                </span>
              </div>

              <button
                disabled={isTermsAgreed && !isLoading ? false : true}
                onClick={handleSubmit}
                className={`group w-fit min-w-[80px] rounded-md flex justify-center items-center gap-2 p-3 ${
                  isTermsAgreed
                    ? "bg-orange-primary"
                    : "bg-orange-primary opacity-50"
                }  text-black ${
                  isTermsAgreed
                    ? "hover:text-orange-bg-orange-primary"
                    : "cursor-not-allowed"
                } md:ml-auto`}
              >
                {isLoading ? "Loading..." : "Send"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Enquiry;
