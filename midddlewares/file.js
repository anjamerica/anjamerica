import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3 } from '../utils/awsConfig';



 const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_PUBLIC_BUCKET,
         acl: 'public-read',
      
        key: function (req, file, cb) {
            console.log(file)
           

           
            cb(null, `images/${new Date().toISOString()+file.originalname}`);

           
        },
    }),
});




 export const uploadMIddle = uploadS3.array('file');