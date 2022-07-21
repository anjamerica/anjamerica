import { NextApiRequest, NextApiResponse } from "next";
import Job from "../../models/jobDetails"



/**
 * @method POST
 * @description TO POST JOB DETAILS FOR ADMIN
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */


export const postJobDetails = async (req, res) => {




    const {job_id, ref_id, job_title, description, is_active, job_location, job_type, vendor_rate,client_rate, qualifications, license_certification, key_responsiblities, training_details,image } = req.body

    if (!job_id) {
        return res.status(400).json({ error: "job_id required", status: 400 });
    }
    if (!ref_id) {
        return res.status(400).json({ error: "ref_id required", status: 400 });
    }
    if (!job_title) {
        return res.status(400).json({ error: "job_title required", status: 400 });
    }
    if (!job_location) {
        return res.status(400).json({ error: "job_location required", status: 400 });
    }
    if (!training_details) {
        return res.status(400).json({ error: "training_details required", status: 400 });
    }
    if (!vendor_rate) {
        return res.status(400).json({ error: "vendor_rate required", status: 400 });
    }
    if (!client_rate) {
        return res.status(400).json({ error: "client_rate required", status: 400 });
    }

    try {

        

        const createJob = await Job.create({
            job_id, ref_id, job_title, description, is_active, job_location, job_type, vendor_rate,client_rate, qualifications, license_certification, key_responsiblities,
            training_details:{
                training_fee:{
                    training_fee:training_details.training_fee,
                    currency:training_details.currency,
                             },
                 training_duration:training_details.training_duration,
                 training_type:training_details.training_type
                             },image
    
        })
    
        res.status(200).json({ success: "Job post successfully",status:200, payload: createJob })
    
        
    } catch (e) {

        console.log(e);
        res.status(500).json({ error:e  });

          
    }

    
}