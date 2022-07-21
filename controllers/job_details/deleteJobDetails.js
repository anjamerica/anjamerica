import { NextApiRequest, NextApiResponse } from "next";
import Job from "../../models/jobDetails"



/**
 * @method DELETE
 * @description TO DELETE JOB DETAILS FOR ADMIN
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */


export const deleteJobDetails = async (req, res) => {


    try {

        console.log(req.query);
        const job= await Job.findOneAndDelete({_id:req.query._id})

        if (!job) return res.status(400).json({error:"Job Not Found",status:400});



        res.json({ success: "Job deleted successfully" })


    } catch (error) {

        console.log(error);
        res.status(500).json({ error: error });
    }




}