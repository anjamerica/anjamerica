import API from "./api";

export const getJobId=async function(){
    return API.get(`/api/admin/jobId`).then(response=>response);
}