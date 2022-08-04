import { NextApiRequest, NextApiResponse } from "next";
import JobApplicants from "../../models/jobApplicants"



/**
 * @method GET
 * @description To get JOB APPLICANTS FOR USER
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 

 */

export const getJobApplicants = async (req, res) => {

    try {

        let { search, _id, page, limit, from, to} = req.query

        limit = parseInt(limit)
        page = parseInt(page)
        const fromDate = from ? new Date(from) : ""
        const toDate = to ? new Date(new Date(to).setDate((new Date(to).getDate())+1)) : ""

        const dateQuery = fromDate && to ? { "createdAt": { $gte: fromDate, $lt: toDate } } : {}

        let searchQuery = [
            {
                $match:
                {
    
                    $and: [
                        dateQuery,
    
                    ]
                }
            },
            {
                $lookup: {
                    from: "jobdetails",
                    localField: "job_id",
                    foreignField: "_id",
                    as: "job_details"
                },

            },
            {
                $unwind: {
                    path: "$job_details",
                    preserveNullAndEmptyArrays: true
                }
            },



            {
                "$match": {

                    "$or": [

                        {
                            "name": {
                                "$regex": `${search}`, $options: 'i'

                            }
                        },
                        {
                            "email": {
                                "$regex": `${search}`, $options: 'i'

                            }
                        },
                        {
                            "job_details.job_title": {
                                "$regex": `${search}`, $options: 'i'

                            }
                        }



                    ]

                }
            },
            { "$sort": { application_date: -1}},
            {
                "$skip": page * limit - limit
            },
            {
                "$limit": limit
            },
            { $sort: { _id: -1 } }
            

        ]



       
        if (_id) {


            const getOneJob = await JobApplicants.findOne({ _id: _id })
            return res.status(200).json({ success: "One job", payload: getOneJob })


        }

        if (search && page && limit || limit && page) {


            const searchJobs = await JobApplicants.aggregate(searchQuery)
            const totalCounts = await JobApplicants.find().count()


            return res.status(200).json({ success: "Get search applicants", totalCount: totalCounts, payload: searchJobs })

        }



        const jobApplicants = await JobApplicants.find({}).populate("job_id")
        const totalCounts = await JobApplicants.find().count()

        res.status(200).json({ success: "get all jobApplicants", totalCount: totalCounts, status: 200, payload: jobApplicants })

    } catch (error) {


        console.log(error);
        res.status(500).json({ error: error })

    }

}