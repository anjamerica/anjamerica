import jsonwebtoken from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import Admin from "../models/admin";
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()


export const apiAutherization = async (req, res) => {
  return new Promise(async (resolve, reject) => {
    try {

      const token = req.headers?.authorization;

      console.log(token);

      if (!token) {
        
        return resolve({ status: 401, error: "Unathorized" });
      }
   
      const { id } = jsonwebtoken.verify(token,serverRuntimeConfig.mySecret);
      console.log(id);
      const admin = await Admin.findOne({ _id: id });
      console.log(admin);


      if (!admin) {
        return resolve({ status: 401, error: "Unathorized" });
      }
      resolve(admin);
    } catch (e) {
      console.log("error",e);
      resolve({ status: 401, error: "Unathorized" });
    }
  })
}