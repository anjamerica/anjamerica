import API from "./api";

export const getJobApplicants = async function(searchQuery,page,limit){
    console.log(`/api/user/jobApplicants?search=${searchQuery || ""}&page=${page || ""}&limit=${limit || ""}`);
    return API.get(`/api/user/jobApplicants?search=${searchQuery || ""}&page=${page || ""}&limit=${limit || ""}`);
}


export async function createJobApplicants(data) {
    console.log(data);
    return await API.post(`/api/user/jobApplicants`, data)
}