import { NextApiRequest, NextApiResponse } from "next";
import jobDetails from "../models/jobDetails"


/**
 * @method GET
 * @description To get JOB ID
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */



export const getJobId = async (req, res) => {

    try {

        let jobId = await jobDetails.aggregate([{ $sort: { _id: -1 } }, { $limit: 1 }, { $project: { job_id: 1, _id: 0 } }])
       

        console.log(jobId);

        if (jobId?.length<1) {
            let jobId = "ANJ1"
           return res.status(200).json({ message: "success", data: jobId })
        }

        

            const a = jobId[0].job_id.split("T")[1]
            const value = parseInt(a) + 1
            jobId = "ANJ" + value

           return res.status(200).json({ message: "success", data: jobId })
       


    } catch (error) {
        console.log(error);
        res.json({ status: 500, error: "internal server error", errorMessage: error })

    }

}