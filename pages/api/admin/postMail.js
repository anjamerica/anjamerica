
import { postMail } from "../../../controllers/postMail";
import API from "../../../utils/apiRoute";

const apiRoute = API



apiRoute.post('/api/admin/postMail',postMail )

export default apiRoute





