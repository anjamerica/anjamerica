"use client";

import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";

import Button from "../../common/Button";
import TextArea from "../../common/TextArea";
import TextInput from "../../common/TextInput";
import SelectInput from "../../common/Select";

export default function CampaignResponseApplyForm({ job }) {
  const [loading, setLoading] = useState(false);

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
      location: "",
      description: "",
      qualification: "",
      interested_status: "",
    },
  });

  const onSubmit = async () => {
    clearErrors();
    handleSubmit(async (params) => {
      try {
        setLoading(true);

        const payload = {
          ...params,
          interested_status: params?.interested_status?.value,
        };
        const res = await fetch("/api/user/campaignResponse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set Content-Type to JSON
          },
          body: JSON.stringify(payload), // Pass params as JSON string
        });

        const response = await res.json();
        if (!res.ok) throw new Error(response.error);
        reset();
        setLoading(false);
        toast.success("Application submitted successfully");
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Failed to submit application");
      }
    })();
  };

  const updatedValues = watch();
  const btnEnabled =
    updatedValues?.name &&
    updatedValues?.contact &&
    updatedValues?.email &&
    updatedValues?.location &&
    updatedValues?.interested_status &&
    updatedValues?.description &&
    updatedValues?.qualification;

  return (
    <div className="mt-3 md:mt-5 rounded-[20px] bg-white p-5">
      <Toaster />

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
                placeholder="Full Name*"
                value={value}
                error={errors.name}
                onChange={onChange}
                className="yellow-border-input-rounded"
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
                placeholder="Contact Number*"
                value={value}
                type="number"
                error={errors.contact}
                onChange={onChange}
                className="yellow-border-input-rounded"
              />
            )}
            name="contact"
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
                className="yellow-border-input-rounded"
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
                placeholder="What Is Your Expectations*"
                value={value}
                onChange={onChange}
                className="yellow-border-input-rounded"
              />
            )}
            name="description"
          />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-[47%]">
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
                placeholder="Email Address*"
                value={value}
                error={errors.email}
                onChange={onChange}
                className="yellow-border-input-rounded"
              />
            )}
            name="email"
          />
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
                className="yellow-border-input-rounded"
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
              <SelectInput
                className="yellow-border-input-rounded"
                placeholder="Are you interested in the campaign*"
                error={errors.interested_status}
                value={value}
                onChange={onChange}
                options={[
                  { label: "Yes", _id: "Yes" },
                  { label: "No", _id: "No" },
                ]}
              />
            )}
            name="interested_status"
          />
        </div>
      </div>
      <div className="mt-8 md:mt-10">
        <div className="w-fit">
          <Button
            title="Register Now"
            onClick={onSubmit}
            loading={loading}
            disabled={!btnEnabled}
            icon={<FaArrowRight className="w-4 h-4 text-white" />}
          />
        </div>
      </div>
    </div>
  );
}
