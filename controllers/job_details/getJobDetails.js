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
        let { search, page, limit, _id, is_active } = req.query
        limit = parseInt(limit)
        page = parseInt(page)
        if (is_active) is_active = JSON.parse(is_active)
        let filterSearchQuery = [
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
                        },
                        {
                            "ref_id": {
                                "$regex": `${search}`, $options: 'i'

                            }
                        }
                    ]
                }
            },
            { $sort: { _id: -1 } },
            { "$match": { is_active: is_active } },
            { "$skip": page * limit - limit },
            { "$limit": limit },
        ]

        let SearchQuery = [
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
                        },
                        {
                            "ref_id": {
                                "$regex": `${search}`, $options: 'i'

                            }
                        }
                    ]
                }
            },
            { $sort: { _id: -1 } },
            { "$skip": page * limit - limit },
            { "$limit": limit }
        ]
        if (typeof (is_active) == "boolean") {
            const searchJobs = await Job.aggregate(filterSearchQuery)
            const totalCounts = await Job.find().count()
            return res.status(200).json({ success: "filter jobs", totalCounts: totalCounts, payload: searchJobs })
        }
        if (search && page && limit || page && limit) {
            const searchJobs = await Job.aggregate(SearchQuery)
            const totalCounts = await Job.find().count()
            return res.status(200).json({ success: "search all jobs", totalCounts: totalCounts, payload: searchJobs })
        }
        if (_id) {
            const getOneJob = await Job.findOne({ _id: _id })
            return res.status(200).json({ success: "One job", payload: getOneJob })
        }
        const getAllJobs = await Job.aggregate([
            { $sort: { _id: -1 } }, {
                "$match": { is_active: true }
            }
        ])
        const totalCounts = await Job.find().count()
        return res.status(200).json({ success: "List active jobs", totalCounts: totalCounts, payload: getAllJobs })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error })
    }
}
