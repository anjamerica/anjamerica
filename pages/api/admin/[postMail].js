
import { applicationMailController,contactUsMailController } from "../../../controllers/postMail";
import API from "../../../utils/apiRoute";

const apiRoute = API

apiRoute.post('/api/admin/',applicationMailController )
apiRoute.post('/api/admin/contactapplicationMailUsMail',contactUsMailController )

export default apiRoute





