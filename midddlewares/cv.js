import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3 } from '../utils/awsConfig';
import Job from "../models/jobApplicants"


export const uploadCv = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'nichetechies',
       

        key: async function (req, file, cb) {
            console.log(file)

            // const isExist = await Job.aggregate( [
            //     {"$match":{"file":"cv/"+file.originalname}}
                
            // ])

           //console.log(isExist);

            cb(null,  `cv/${new Date().toISOString()+file.originalname}`)

          
        },
    }),
});



export const getCvStream=(fileKey)=> {
    const downloadParams = {
        Key: fileKey,
        Bucket: 'nichetechies',
    };

    return s3.getObject(downloadParams).createReadStream();
}

export const cvMiddle = uploadCv.array('file');