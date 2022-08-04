import { NextApiRequest, NextApiResponse } from "next";
import jobApplicants from "../models/jobApplicants";

/**
 * @method GET
 * @description To get APP ID
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */

export const getAppId = async (req, res) => {
  try {
    let appId = await jobApplicants.aggregate([
      { $sort: { _id: -1 } },
      { $limit: 1 },
      { $project: { app_id: 1, _id: 0 } },
    ]);

    console.log("appid", appId);

    if (Object.keys(appId[0]).length == 0) return "A1";

    const a = appId[0].app_id.split("A")[1];
    const value = parseInt(a) + 1;
    appId = "A" + value;

    return appId;
  } catch (error) {
    console.log(error.message);
  }
};
