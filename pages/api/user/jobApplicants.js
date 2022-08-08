import { postJobApplicants } from "../../../controllers/jobApplicants/postJobApplicants";
import { getJobApplicants } from "../../../controllers/jobApplicants/getJobApplicants";
import API from "../../../utils/apiRoute";
import { apiAutherization } from "../../../midddlewares/apiAutherization";

const apiRoute = API

try{
    apiRoute.post('/api/user/jobApplicants',postJobApplicants)

    apiRoute.get('/api/user/jobApplicants',async (req, res, next) => {
        const {error,status} = await apiAutherization(req, res)
        if (error) return res.json({ error,status })
        next()
    }, getJobApplicants)
}catch{
    console.log(error);
    res.status(500).json({error,status:500})
}

export default apiRoute

