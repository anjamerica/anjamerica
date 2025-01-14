"use client";
import React, { useEffect, useState } from "react";

import { MdFilterAltOff } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import Button from "../../common/Button";
import SelectInput from "../../common/Select";
import TextInput from "../../common/TextInput";

const JobFilter = ({ data, setFilteredJobs }) => {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    experience: "",
  });
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
    if (data?.length > 0) {
      const locations = data.map((job) => job.location);
      const uniqueLocations = [...new Set(locations)];
      const formattedLocations = uniqueLocations.map((loc) => ({
        label: loc,
        _id: loc,
      }));
      setLocationOptions(formattedLocations);
    }
  }, [data]);

  const parseRange = (range) => {
    const [min, max] = range
      .replace("yrs", "")
      .split("-")
      .map((v) => parseInt(v.trim(), 10));
    return { min, max };
  };

  const experienceMatches = (jobExperience, selectedExperience) => {
    const jobRange = parseRange(jobExperience);
    const selectedRange = parseRange(selectedExperience);

    return (
      jobRange.min >= selectedRange.min && jobRange.max <= selectedRange.max
    );
  };

  const applyFilter = () => {
    const filtered = data.filter((job) => {
      const matchesSearch = job.jobTitle
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesLocation = filters.location
        ? job.location === filters.location
        : true;
      const matchesExperience = filters.experience
        ? experienceMatches(job.experience, filters.experience)
        : true;

      return matchesSearch && matchesLocation && matchesExperience;
    });
    setFilteredJobs(filtered);
  };

  const handleFilterChange = (name, value) => {
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
  };

  const handleResetFilter = () => {
    setFilters({
      search: "",
      location: "",
      experience: "",
    });
    setFilteredJobs(data);
  };

  return (
    <div className="p-4 bg-white career-card-shadow md:rounded-[20px]">
      <h2 className="text-lg md:text-2xl font-bold">Job Opportunities</h2>
      <p className="mb-4">Browse Our Career Openings</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[30vw]">
          <TextInput
            placeholder="Type a job name, role or skill"
            value={filters.search}
            className="yellow-border-input-rounded"
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>
        <div className="w-full md:w-[25vw]">
          <SelectInput
            value={filters.location}
            options={locationOptions}
            className="yellow-border-input-rounded"
            placeholder="Sort by location"
            onChange={(option) => handleFilterChange("location", option.value)}
          />
        </div>
        <div className="w-full md:w-[25vw]">
          <SelectInput
            className="yellow-border-input-rounded"
            placeholder="Experience"
            value={filters.experience}
            onChange={(option) =>
              handleFilterChange("experience", option.value)
            }
            options={[
              { label: "Entry-Level (0–2 years)", _id: "0-2" },
              { label: "Junior / Associate (1–3 years)", _id: "1-3" },
              { label: "Mid-Level / Professional (3–5 years)", _id: "3-5" },
              { label: "Senior-Level (5–8 years)", _id: "5-8" },
              { label: "Lead / Principal (8–12 years)", _id: "8-12" },
              { label: "Executive / Expert (12+ years)", _id: "12+" },
            ]}
          />
        </div>
        <div className="w-full md:w-[188px]">
          <Button
            title="Explore"
            onClick={applyFilter}
            icon={<FaArrowRight className="w-4 h-4 text-white" />}
          />
        </div>
        <div className="content-center">
          {(filters?.experience || filters?.location || filters?.search) && (
            <MdFilterAltOff
              className="w-5 h-5 text-primary-gray cursor-pointer"
              onClick={handleResetFilter}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
