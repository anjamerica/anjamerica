import axios from "axios";
import getConfig from 'next/config'


const { publicRuntimeConfig } = getConfig()


const API = axios.create({
    baseURL:"/" ,
    timeout: 400000,
  
})



// API.interceptors.request.use(
//     async (config) => {
//       config.headers = {
//         Authorization: `${localStorage.getItem("token")}`,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       };
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );


export default API;