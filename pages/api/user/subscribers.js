import {postSubscribers} from "../../../controllers/subscribers";
import {getSubscribers} from "../../../controllers/subscribers";
import API from "../../../utils/apiRoute";

const apiRoute = API

apiRoute.post('/api/user/subscribers',postSubscribers )
apiRoute.get('/api/user/subscribers',getSubscribers )

export default apiRoute
