
import { applicationMailController,contactUsMailController,neawsLetterMail } from "../../../controllers/postMail";
import API from "../../../utils/apiRoute";

const apiRoute = API

apiRoute.post('/api/user/applicationMail',applicationMailController )
apiRoute.post('/api/user/contactUsMail',contactUsMailController )
apiRoute.post('/api/user/neawsLetterMail',neawsLetterMail )

export default apiRoute
