import API from "./api";

export async function Subcribe(email) {
  return await API.post(
    `/api/user/subscribers`,email);
}
