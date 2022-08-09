import { postSubscribers } from "../../../controllers/subscribers";
import { getSubscribers } from "../../../controllers/subscribers";
import API from "../../../utils/apiRoute";
import { apiAutherization } from "../../../midddlewares/apiAutherization";

const apiRoute = API

apiRoute.post('/api/user/subscribers', postSubscribers)
apiRoute.get('/api/user/subscribers', async (req, res, next) => {
    const { error, status } = await apiAutherization(req, res)
    if (error) return res.json({ error, status })
    next()
}, getSubscribers)

export default apiRoute
