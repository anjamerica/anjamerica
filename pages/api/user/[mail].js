
import { applicationMailController,contactUsMailController } from "../../../controllers/postMail";
import API from "../../../utils/apiRoute";

const apiRoute = API

apiRoute.post('/api/user/applicationMail',applicationMailController )
apiRoute.post('/api/user/contactUsMail',contactUsMailController )

export default apiRoute
