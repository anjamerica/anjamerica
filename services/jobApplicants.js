import API from "./api";

export const getJobApplicants = async function (searchQuery, page, limit,from,to,headers) {
  console.log(
    `/api/user/jobApplicants?search=${searchQuery || ""}&page=${
      page || ""
    }&limit=${limit || ""}`
  );
  return API.get(
    `/api/user/jobApplicants?search=${searchQuery || ""}&page=${
      page || ""
    }&limit=${limit || ""}&from=${from || ""}&to=${to || ""}`,
    {
      headers,
    }
  );
};

export async function createJobApplicants(data) {
  console.log(data);
  return await API.post(`/api/user/jobApplicants`, data);
}
