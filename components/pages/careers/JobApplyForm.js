"use client";

import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";

import Button from "../../common/Button";
import TextArea from "../../common/TextArea";
import TextInput from "../../common/TextInput";
import FilePicker from "../../common/FilePicker";

export default function JobApplyForm({ job }) {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState();
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      position: "",
      location: "",
      exp_year: "",
      exp_month: "",
      college: "",
      description: "",
      qualification: "",
      previous_employer: "",
    },
  });

  const onSubmit = async () => {
    clearErrors();
    handleSubmit(async (params) => {
      try {
        if (!resume) {
          setError("file", { message: "Resume file is required" });
          return;
        }
        setLoading(true);

        const formData = new FormData();
        formData.append("resume", resume);
        Object.entries(params).forEach(([key, value]) => {
          formData.append(key, value);
        });

        const res = await fetch("/api/user/applyForJob", {
          method: "POST",
          body: formData,
        });

        const response = await res.json();
        if (!res.ok) throw new Error(response.error);
        reset();
        setResume(null);
        setIsTermsAgreed(false);
        setLoading(false);
        toast.success("Application submitted successfully");
      } catch (error) {
        setLoading(false);
        toast.error("Failed to submit application");
      }
    })();
  };

  const handleAgree = (e) => {
    setIsTermsAgreed(e?.target?.checked);
  };

  const updatedValues = watch();
  const btnEnabled =
    updatedValues?.name &&
    updatedValues?.contact &&
    updatedValues?.email &&
    updatedValues?.position &&
    updatedValues?.location &&
    updatedValues?.exp_year &&
    updatedValues?.exp_month &&
    updatedValues?.previous_employer &&
    updatedValues?.qualification &&
    updatedValues?.qualification &&
    updatedValues?.college &&
    resume?.name &&
    isTermsAgreed;

  console.log("====================================");
  console.log(isTermsAgreed);
  console.log("====================================");
  return (
    <div className="mt-6">
      <Toaster />
      <p>Job Title: {job?.jobTitle}</p>
      <div className="flex mt-4 flex-col md:flex-row gap-5">
        <div className="w-full flex flex-col gap-6 md:w-[47%]">
          <Controller
            control={control}
            rules={{
              pattern: {
                value: /^[A-Za-z\s]{1,50}$/,
                message:
                  "Name should only contain letters and spaces, and be between 1 and 50 characters long",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Your Name*"
                value={value}
                error={errors.name}
                onChange={onChange}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit contact number",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Contact number*"
                value={value}
                type="number"
                error={errors.contact}
                onChange={onChange}
              />
            )}
            name="contact"
          />
          <Controller
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Email ID*"
                value={value}
                error={errors.email}
                onChange={onChange}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: "Current position is required",
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Current Position*"
                value={value}
                error={errors.position}
                onChange={onChange}
              />
            )}
            name="position"
          />
          <Controller
            control={control}
            rules={{
              required: "Location is required",
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Location*"
                value={value}
                error={errors.location}
                onChange={onChange}
              />
            )}
            name="location"
          />
          <Controller
            control={control}
            rules={{
              maxLength: {
                value: 500,
                message: "Description cannot exceed 500 characters",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextArea
                placeholder="Briefly describe your self"
                value={value}
                onChange={onChange}
              />
            )}
            name="description"
          />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-[47%]">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-between md:items-center">
            <p className="text-md md:text-base font-thin text-[#718096]">
              Experience*
            </p>
            <div className="w-full">
              <Controller
                control={control}
                rules={{
                  required: "Years of experience is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Enter a valid number",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    type="number"
                    placeholder="Years*"
                    value={value}
                    error={errors.exp_year}
                    onChange={onChange}
                  />
                )}
                name="exp_year"
              />
            </div>
            <div className="w-full">
              <Controller
                control={control}
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Enter a valid number",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    placeholder="Months"
                    value={value}
                    type="number"
                    aaa
                    error={errors.exp_month}
                    onChange={onChange}
                  />
                )}
                name="exp_month"
              />
            </div>
          </div>
          <Controller
            control={control}
            rules={{
              required: "Previous employer is required",
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Previous company*"
                value={value}
                error={errors.previous_employer}
                onChange={onChange}
              />
            )}
            name="previous_employer"
          />
          <p className="text-gray-senary md:mt-4 md:mb-2 font-semibold text-md md:text-base">
            Academics
          </p>
          <Controller
            control={control}
            rules={{
              required: "Qualification is required",
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Highest Qualification*"
                value={value}
                error={errors.qualification}
                onChange={onChange}
              />
            )}
            name="qualification"
          />
          <Controller
            control={control}
            rules={{
              required: "University or College is required",
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="University or College*"
                value={value}
                error={errors.college}
                onChange={onChange}
              />
            )}
            name="college"
          />
          <div>
            <p className="text-gray-senary mb-6 md:mb-3 font-semibold text-md md:text-base">
              Upload resume
            </p>
            <FilePicker
              value={resume}
              setFiles={setResume}
              error={errors?.file}
              acceptedFiles={["application/pdf"]}
              maxSizeMB={2}
            />
          </div>
          <div className="flex pb-4 lg:pb-0">
            <span>
              <input
                type="checkbox"
                checked={isTermsAgreed}
                onChange={handleAgree}
                className="border w-5 h-5 border-solid border-[#B7B7B7]"
              />
            </span>
            <span className="w-full flex ">
              <span className="pl-2">
                I agree with{" "}
                <span className="text-[#3E36B6] underline">Terms of Use</span>{" "}
                and
                <span className="text-[#3E36B6] underline">
                  {" "}
                  Privacy Policy
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-10">
        <div className="w-fit">
          <Button
            title="Apply Now"
            onClick={onSubmit}
            loading={loading}
            disabled={!btnEnabled}
            icon={<GoArrowUpRight className="w-5 h-5 text-white" />}
          />
        </div>
      </div>
    </div>
  );
}