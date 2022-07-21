import { getJobId } from "../../../controllers/jobId";

import API from "../../../utils/apiRoute";
import connectDB from '../../../utils/dbConnect'


const apiRoute = API

//apiRoute.use('/api/user/jobApplicants', connectDB)
apiRoute.get('/api/admin/jobId',getJobId )

export default apiRoute

