
import { getJobDetails } from "../../../controllers/job_details/getJobDetails"
import { postJobDetails } from "../../../controllers/job_details/postJobDetails"
import { deleteJobDetails } from "../../../controllers/job_details/deleteJobDetails"
import { updateJobDetails } from "../../../controllers/job_details/updateJobDtails"
import { apiAutherization } from "../../../midddlewares/apiAutherization"

export default async function handler(req, res) {

    const { method } = req;
    

    if(method=="GET"){

     return await getJobDetails(req, res);
      
    }
        
    const {error}= await apiAutherization(req, res);
        
    if (error) {
        return  res.json({ error })
      }


    switch (method) {
        

        case "POST":
            postJobDetails(req, res);
            break;
        case "PUT":
            updateJobDetails(req, res);
            break;

        case "DELETE":
            deleteJobDetails(req, res);
            break;

        default:
            res.end();
    }
}