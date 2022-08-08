
import { applicationMailController,contactUsMailController } from "../../../controllers/postMail";
import API from "../../../utils/apiRoute";

const apiRoute = API

apiRoute.post('/api/admin/applicationMail',applicationMailController )
apiRoute.post('/api/admin/contactUsMail',contactUsMailController )

export default apiRoute





