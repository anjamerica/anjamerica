import { postJobApplicants } from "../../../controllers/jobApplicants/postJobApplicants";
import { getJobApplicants } from "../../../controllers/jobApplicants/getJobApplicants";
import API from "../../../utils/apiRoute";
import { apiAutherization } from "../../../midddlewares/apiAutherization";


const apiRoute = API



// apiRoute.use('/api/user/jobApplicants',async(req,res,next)=>{

    
//     const {error} = await apiAutherization(req,res)
//     // console.log(error);


//     if (error) {
//         return  res.json({ error })
//       }
    
  
//      next() 
    
    


// })
apiRoute.post('/api/user/jobApplicants', postJobApplicants)
apiRoute.get('/api/user/jobApplicants', getJobApplicants)

export default apiRoute


