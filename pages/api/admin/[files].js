import { cvMiddle, getCvStream } from '../../../midddlewares/cv';
import { publicFileMIddle } from '../../../midddlewares/file';
import API from "../../../utils/apiRoute";

const apiRoute = API

apiRoute.use('/api/admin/cvUpload', cvMiddle);
apiRoute.post('/api/admin/cvUpload', async (req, res) => {
    try {
        console.log(req.files);
        const { size, originalname, key, location, mimetype } = req.files[0]
        const AllFiles = { file_size: size, file_name: originalname, file_Key: key, file_location: location, file_mimetype: mimetype }
        res.status(200).json({ success: "file upload successfully", status: 200, payload: AllFiles });
    } catch (error) {
        console.log(error);
        res.json({ 'error message': error })
    }
});

apiRoute.use('/api/admin/fileUpload', publicFileMIddle);
apiRoute.post('/api/admin/fileUpload', async (req, res) => {
    try {
        if(req.files.length===0)return res.status(400).json(errors({ status: 400, errorMessage: 'file is required' }))
        const { size, originalname, key, location, mimetype } = req.files[0]
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