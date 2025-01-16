import React, { useState } from "react";

import { FiArrowDownCircle } from "react-icons/fi";
import { FiArrowUpCircle } from "react-icons/fi";

import { Table } from "antd";
import Container from "../../common/Container";
import JobDetails from "./JobDetails";

export default function JobsList({ data = [] }) {
  const columns = [
    {
      title: "Job Id",
      dataIndex: "jobId",
      key: "jobId",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
      render: (_, record) => <p className="max-w-150px">{record?.jobTitle}</p>,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Job Type",
      dataIndex: "employmentType",
      key: "employmentType",
    },
    {
      title: "",
      key: "actions",
      render: (_, record, index) => (
        <span
          style={{
            cursor: "pointer",
            color: "#1890ff",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={(e) => handleExpandToggle(record, index, e)}
        >
          {expandedRows.includes(record.jobId) ? (
            <FiArrowUpCircle className="text-black text-xl" />
          ) : (
            <FiArrowDownCircle className="text-black text-xl" />
          )}
        </span>
      ),
      fixed: "right",
    },
  ];

  const [expandedRows, setExpandedRows] = useState([]);

  const handleExpandToggle = (record, index, e) => {
    // e.stopPropagation();
    const newExpandedRows = expandedRows.includes(record.jobId)
      ? expandedRows.filter((key) => key !== record.jobId)
      : [record.jobId];
    setExpandedRows(newExpandedRows);
  };

  return (
    <div className="md:m-8 rounded-2xl md:overflow-hidden">
      <Table
        dataSource={data}
        columns={columns}
        rowKey="jobId"
        pagination={false}
        expandable={{
          expandedRowRender: (record, i) => (
            <JobDetails details={record} index={i} />
          ),
          expandedRowKeys: expandedRows,
        }}
        scroll={{ x: "max-content" }}
        onRow={(record) => ({
          onClick: () => handleExpandToggle(record),
        })}
      />
    </div>
  );
}
