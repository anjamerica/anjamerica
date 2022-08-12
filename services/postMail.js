import API from "./api";

export async function postMail(details) {
  return await API.post(`api/user/contactUsMail`, details);
}

export async function jobUpdatesPostMail(details) {
  return await API.post(`api/user/applicationMail`, details);
}
