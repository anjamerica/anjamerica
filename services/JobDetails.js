import API from "./api";

export async function createJob(jobData, headers) {
  return await API.post(`/api/admin/jobDetails`, jobData, {
    headers: headers,
  });
}

export const getJobDetails = async function (searchText,page,limit,activeState) {
  console.log(page);
  return API.get(`/api/admin/jobDetails?search=${searchText || ""}&page=${page || ""}&limit=${limit || ""}&is_active=${activeState || ""}`).then((response) => response);
};


export const getJobDetailsById = async (_id) => {
  return API.get(`/api/admin/jobDetails?_id=${_id}`).then((response) => {
    return response;
  });
};

export const updateJobDetails = async (_id, data, headers) => {
  return API.put(`/api/admin/jobDetails?_id=${_id}`, data, {
    headers: headers,
  }).then((response) => {
    return response;
  });
};

export const deleteJobDetails = async (_id, headers) => {
  return API.delete(`/api/admin/jobDetails?_id=${_id}`, {
    headers: headers,
  }).then((response) => {
    return response;
  });
};
