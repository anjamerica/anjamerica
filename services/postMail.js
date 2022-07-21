import API from "./api"


export async function postMail(details) {
    return await API.post(`/api/admin/postMail`,details)
}