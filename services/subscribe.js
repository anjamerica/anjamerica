import API from "./api";

export async function Subcribe(email) {
  return await API.post(`/api/user/subscribers`, email);
}

export async function getSubscribers(page,limit,headers) {
  return await API.get(`/api/user/subscribers?page=${page}&limit=${limit}`, {
    headers,
  });
}
