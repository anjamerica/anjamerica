import aws, { S3 } from 'aws-sdk';
import { cvMiddle,getCvStream } from '../../../midddlewares/cv';
import { uploadMIddle } from "../../../midddlewares/file"
import API from "../../../utils/apiRoute";
import { s3 } from '../../../utils/awsConfig';




const apiRoute = API



apiRoute.use('/api/admin/fileUpload', uploadMIddle);

apiRoute.post('/api/admin/fileUpload', async (req, res) => {

    try {
        console.log(req.files);

        const { size, originalname, key, location, mimetype } = req.files[0]


        // if(mimetype !== 'image/png' && mimetype !== 'image/jpg' && mimetype !== 'image/jpeg'){
        //     res.send("Supported image files are jpeg, jpg, and png");
        // }

        const AllFiles = { file_size: size, file_name: originalname, file_Key: key, file_location: location, file_mimetype: mimetype }





        res.status(200).json({ success: "file upload successfully", status: 200, payload: AllFiles });



    } catch (error) {
        console.log(error);
        res.json({ 'error message': error })

    }

});


apiRoute.delete("/api/admin/fileDelete", async (req, res) => {
	const { key } = req.query;
	if (!key) {
		res.status(400).json({ error: "key must be passed in query." })
	}
	const response = await s3.deleteObject({
		Bucket: 'nichetechies-public',
		Key: key
	})
	res.status(200).json({success:"image deleted"});

})








apiRoute.use('/api/admin/cvUpload', cvMiddle);

apiRoute.post('/api/admin/cvUpload', async (req, res) => {

    try {
        console.log(req.files);

        const { size, originalname, key, location, mimetype } = req.files[0]


        // if(mimetype !== 'image/png' && mimetype !== 'image/jpg' && mimetype !== 'image/jpeg'){
        //     res.send("Supported image files are jpeg, jpg, and png");
        // }

        const AllFiles = { file_size: size, file_name: originalname, file_Key: key, file_location: location, file_mimetype: mimetype }





        res.status(200).json({ success: "file upload successfully", status: 200, payload: AllFiles });



    } catch (error) {
        console.log(error);
        res.json({ 'error message': error })

    }

});


apiRoute.get('/api/admin/cvDownload', (req, res) => {
    const { key } = req.query;
    const readStream = getCvStream(key);
    readStream.pipe(res);
});




export default apiRoute;


export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};