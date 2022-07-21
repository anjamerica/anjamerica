import { checkLogedIn, doLogin } from "../../../controllers/login";
import connectDB from "../../../utils/dbConnect";




export default async (req, res) => {

    connectDB();
    switch (req.method) {

        case "GET":
            
                await checkLogedIn(req, res);
                break;
            


        case "POST":
            await doLogin(req, res)
            break;

        default:
            res.end();
    }
}