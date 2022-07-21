import { NextApiRequest, NextApiResponse } from "next";
import Job from "../../models/jobDetails"



/**
 * @method PUT
 * @description TO UPDATE JOB DETAILS FOR ADMIN
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */


export const updateJobDetails = async (req, res) => {
   let {ref_id, job_title, description, is_active, job_location, job_type, vendor_rate,client_rate, qualification, license_certification, key_responsiblities, training_details,image} =req.body
    

    try {

        const findJob = await Job.findOne({_id:req.query._id})

    if (!findJob) return res.status(400).json({error:"Job Not Found",status:400});

    


    findJob.ref_id = req.body.ref_id;
    findJob.job_title = req.body.job_title;
    findJob.description = req.body.description;
    findJob.is_active = req.body.is_active;
    findJob.job_type = req.body.job_type;
    findJob.job_location = req.body.job_location;
    findJob.vendor_rate = req.body.vendor_rate;
    findJob.client_rate = req.body.client_rate;
    findJob.qualification = req.body.qualification;
    findJob.license_certification = req.body.license_certification;
    findJob.key_responsiblities = req.body.key_responsiblities;
    findJob.training_details = {
        training_fee:{
            training_fee:training_details.training_fee,
            currency:training_details.currency,
                     },
         training_duration:training_details.training_duration,
         training_type:training_details.training_type
                     };

    if(req.body.image!=null){
        findJob.image = req.body.image
    }
    

    const updateJob = await findJob.save();



    res.status(200).json({ success: "JOb updated successfully",status:200 })


    
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });

    }
    



}