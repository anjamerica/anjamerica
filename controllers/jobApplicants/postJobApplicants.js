import { NextApiRequest, NextApiResponse } from "next";
import JobApplicants from "../../models/jobApplicants"



/**
 * @method POST
 * @description To Post JOB APPLICANTS FOR USER
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */

export const postJobApplicants = async (req, res) => {



    try {


        console.log(req.body);
        const { name, phone_number, email, description, link,job_id,file_key } = req.body
        




       // validation
        if (!name) {
            return res.status(400).json({ error: "name required", status: 400 });
        }
        if (!phone_number) {
            return res.status(400).json({ error: "phone_number required", status: 400 });
        }
        if (!email) {
            return res.status(400).json({ error: "email required", status: 400 });
        }
        if (!description) {
            return res.status(400).json({ error: "description required", status: 400 });
        }
        if (!link) {
            return res.status(400).json({ error: "link required", status: 400 });
        }
        if (!file_key) {
            return res.status(400).json({ error: "file required", status: 400 });
        }
        if (!job_id) {
            return res.status(400).json({ error: "job_id required", status: 400 });
        }

        
        const createJobApplicant = await JobApplicants.create({
            name,
            phone_number,
            email,
            description,
            link,
            file:file_key,
            job_id

        });


        res.status(200).json({ success: "job applied succesfully",status:200 })




    } catch (error) {

        console.log(error);
        res.status(500).json({ error:error  });

    }




}


