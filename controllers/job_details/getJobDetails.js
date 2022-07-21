import Job from "../../models/jobDetails"
import { NextApiRequest, NextApiResponse } from "next";


/**
 * @method GET
 * @description TO GET JOB DETAILS FOR ADMIN
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */


export const getJobDetails = async (req, res) => {


    try {




        let { search, page, limit, _id } = req.query


        limit = parseInt(limit)
        page = parseInt(page)




        let searchQuery = [
            {
                "$match": {

                    "$or": [

                        {
                            "job_id": {
                                "$regex": `${search}`, $options: 'i'

                            }
                        },
                        {
                            "job_title": {
                                "$regex": `${search}`, $options: 'i'

                            }
                        }


                    ]

                }
            }, {

                "$skip": page * limit - limit
            },
            {
                "$limit": limit
            },
            { $sort: { _id: -1 } },
            // {
            //     "$match": {is_active: true}
            // }


        ]


        if (search && page && limit || page && limit) {


            const searchJobs = await Job.aggregate(searchQuery)
            const totalCounts = await Job.find().count()
            console.log(searchJobs.length);
            return res.status(200).json({ success: "Get all jobs", totalCounts: totalCounts, payload: searchJobs })


        }


        if (_id) {


            const getOneJob = await Job.findOne({ _id: _id })
            return res.status(200).json({ success: "One job", payload: getOneJob })


        }



        const getAllJobs = await Job.aggregate([
            { $sort: { _id: -1 } }, {
                "$match": {is_active: true}
        }
        ])
        const totalCounts = await Job.find().count()
        return res.status(200).json({ success: "List All jobs", totalCounts: totalCounts, payload: getAllJobs })




    } catch (error) {

        console.log(error);
        return res.status(500).json({ error: error })
    }
}
